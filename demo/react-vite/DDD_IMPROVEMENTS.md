# DDD Improvement Recommendations for React-Vite Project

## Current Structure Analysis

### Current Organization
```
src/
├── pages/          # Feature-based pages (rank, song, singer, search, player)
│   ├── rank/
│   │   ├── rankListApi.ts       # API calls mixed with pages
│   │   ├── rankInfoApi.ts
│   │   ├── RankListContainer.tsx
│   │   └── RankInfo.tsx
├── stores/         # Global state (Zustand)
│   ├── usePlayerStore.ts        # Player domain logic mixed with state
│   └── useAppNavStore.ts
├── components/     # Shared UI components
├── constants/      # API endpoints, routes, status
└── redux/          # RTK Query base setup
```

### Issues Identified
1. **No clear domain boundaries** - API calls scattered in page folders
2. **Business logic in stores/containers** - Domain logic mixed with UI logic
3. **No repository pattern** - Direct API calls in components
4. **Mixed concerns** - Infrastructure (API) mixed with application logic
5. **No domain services** - Business rules scattered across components/stores
6. **DTOs in shared folder** - Good, but not fully leveraged

---

## Recommended DDD Structure

### Proposed Directory Structure

```
src/
├── domains/                    # Domain Layer
│   ├── rank/
│   │   ├── models/            # Domain models (not DTOs)
│   │   │   └── Rank.ts
│   │   ├── services/          # Domain services (business logic)
│   │   │   └── RankService.ts
│   │   └── repositories/      # Repository interfaces
│   │       └── IRankRepository.ts
│   ├── song/
│   │   ├── models/
│   │   │   └── Song.ts
│   │   ├── services/
│   │   │   └── SongService.ts
│   │   └── repositories/
│   │       └── ISongRepository.ts
│   ├── playlist/              # Previously "songList"
│   ├── singer/
│   ├── search/
│   └── player/
│       ├── models/
│       │   └── Player.ts      # Rich domain model
│       ├── services/
│       │   ├── PlayerService.ts
│       │   └── PlaylistService.ts
│       └── repositories/
│           └── IPlayerRepository.ts
│
├── application/               # Application Layer
│   ├── rank/
│   │   └── useCases/
│   │       ├── GetRankListUseCase.ts
│   │       └── GetRankInfoUseCase.ts
│   ├── song/
│   ├── player/
│   │   └── useCases/
│   │       ├── PlaySongUseCase.ts
│   │       ├── PauseSongUseCase.ts
│   │       └── FetchSongUseCase.ts
│   └── search/
│       └── useCases/
│           ├── GetHotSearchUseCase.ts
│           └── SearchByKeywordUseCase.ts
│
├── infrastructure/            # Infrastructure Layer
│   ├── api/
│   │   ├── RankApiRepository.ts    # Implements IRankRepository
│   │   ├── SongApiRepository.ts
│   │   ├── PlayerApiRepository.ts
│   │   └── SearchApiRepository.ts
│   ├── store/                 # State management adapters
│   │   └── PlayerStoreAdapter.ts
│   └── http/                  # HTTP client config
│       └── apiClient.ts
│
├── presentation/              # Presentation Layer (UI)
│   ├── components/           # Pure UI components
│   ├── pages/                # Page components (containers)
│   │   ├── rank/
│   │   │   ├── RankListPage.tsx
│   │   │   └── RankInfoPage.tsx
│   │   └── player/
│   │       └── PlayerPage.tsx
│   └── hooks/                # React Query hooks, etc.
│       ├── useRankList.ts
│       └── usePlayer.ts
│
└── shared/                    # Shared Kernel
    ├── types/
    ├── utils/
    └── constants/
```

---

## Key Improvements

### 1. **Domain Models - Rich Models Instead of Anemic DTOs**

**Current (Anemic):**
```typescript
// Shared model is just a data container
export interface RankItem extends RankItemDto {
  imgUrl: string
  path: string
  title: string
}
```

**Improved (Rich Domain Model):**
```typescript
// domains/rank/models/Rank.ts
export class Rank {
  constructor(
    private readonly id: string,
    private readonly name: string,
    private readonly imgUrl: string,
    private readonly bannerUrl?: string
  ) {}

  get path(): string {
    return `/rank/info/${this.id}`
  }

  get displayTitle(): string {
    return this.name
  }

  get thumbnailUrl(): string {
    return this.imgUrl
  }

  get bannerImageUrl(): string {
    return this.bannerUrl || this.imgUrl
  }

  static fromDto(dto: RankItemDto): Rank {
    return new Rank(
      dto.rankid,
      dto.rankname,
      replaceSizeInUrl(dto.imgurl),
      dto.banner7url ? replaceSizeInUrl(dto.banner7url) : undefined
    )
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      imgUrl: this.imgUrl,
      path: this.path,
      title: this.displayTitle
    }
  }
}
```

### 2. **Repository Pattern - Abstract Data Access**

**Current:**
```typescript
// pages/rank/rankListApi.ts - Direct API call
export const rankListApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRankList: builder.query<RankItem[], void>({
      queryFn: async () => {
        const response = await axios.get(api.rankList)
        return { data: mapRankListResponse(response.data) }
      }
    })
  })
})
```

**Improved:**
```typescript
// domains/rank/repositories/IRankRepository.ts
export interface IRankRepository {
  getRankList(): Promise<Rank[]>
  getRankById(id: string): Promise<RankDetail>
}

// infrastructure/api/RankApiRepository.ts
export class RankApiRepository implements IRankRepository {
  constructor(private apiClient: ApiClient) {}

  async getRankList(): Promise<Rank[]> {
    const response = await this.apiClient.get<RankListResponseDto>(api.rankList)
    return response.data.rank.list.map(item => Rank.fromDto(item))
  }

  async getRankById(id: string): Promise<RankDetail> {
    // Implementation
  }
}
```

### 3. **Domain Services - Encapsulate Business Logic**

**Current:**
```typescript
// stores/usePlayerStore.ts - Business logic mixed with state
fetchMusicIfNeeded: async (id: string | null, songIndex = 0, songList: Song[] = []) => {
  if (!id) return
  // ... business logic mixed with state management
}
```

**Improved:**
```typescript
// domains/player/services/PlayerService.ts
export class PlayerService {
  constructor(
    private playerRepository: IPlayerRepository,
    private playlistService: PlaylistService
  ) {}

  async playSong(songHash: string, playlist: Song[], currentIndex: number): Promise<SongInfo> {
    // Business logic: validate, fetch, prepare
    const songInfo = await this.playerRepository.getSongInfo(songHash)
    const enrichedPlaylist = this.playlistService.enrichPlaylist(playlist)
    
    // Domain rules
    if (!songInfo.playUrl) {
      throw new Error('Song is not available for playback')
    }
    
    return songInfo
  }

  canPlayNext(currentIndex: number, playlist: Song[]): boolean {
    return currentIndex < playlist.length - 1
  }

  canPlayPrevious(currentIndex: number): boolean {
    return currentIndex > 0
  }
}

// domains/player/services/PlaylistService.ts
export class PlaylistService {
  enrichPlaylist(songs: Song[]): Playlist {
    return new Playlist(songs.map(song => this.enrichSong(song)))
  }

  private enrichSong(song: Song): Song {
    // Business logic for song enrichment
    return song
  }
}
```

### 4. **Use Cases - Application Layer Orchestration**

**Current:**
```typescript
// pages/rank/RankListContainer.tsx - Direct hook usage
const { data, error, isLoading } = useGetRankListQuery()
```

**Improved:**
```typescript
// application/rank/useCases/GetRankListUseCase.ts
export class GetRankListUseCase {
  constructor(private rankRepository: IRankRepository) {}

  async execute(): Promise<Rank[]> {
    return await this.rankRepository.getRankList()
  }
}

// presentation/hooks/useRankList.ts
export function useRankList() {
  const getRankListUseCase = useContainer().get(GetRankListUseCase)
  
  return useQuery({
    queryKey: ['rankList'],
    queryFn: () => getRankListUseCase.execute()
  })
}

// presentation/pages/rank/RankListPage.tsx
export function RankListPage() {
  const { data: rankList, isLoading, error } = useRankList()
  
  if (isLoading) return <Loading />
  if (error) return <ErrorDisplay error={error} />
  
  return <RankList ranks={rankList} />
}
```

### 5. **Separate Infrastructure Concerns**

**Current:**
```typescript
// constants/api.ts - Hard-coded URLs mixed with proxy
const api = {
  rankList: baseApiHost + '/rank/list&json=true',
}
Reflect.ownKeys(api).forEach(key => {
  api[key] = proxyUrl + api[key]
})
```

**Improved:**
```typescript
// infrastructure/http/apiClient.ts
export class ApiClient {
  constructor(
    private baseUrl: string,
    private proxyUrl?: string
  ) {}

  async get<T>(endpoint: string, config?: RequestConfig): Promise<ApiResponse<T>> {
    const url = this.proxyUrl 
      ? `${this.proxyUrl}${this.baseUrl}${endpoint}`
      : `${this.baseUrl}${endpoint}`
    
    // Centralized error handling, retry logic, etc.
    return this.request<T>('GET', url, config)
  }
}

// infrastructure/config/apiConfig.ts
export const apiConfig = {
  baseUrl: process.env.VITE_API_BASE_URL || 'http://m.kugou.com',
  proxyUrl: process.env.VITE_API_PROXY_URL || 'https://bird.ioliu.cn/v1?url='
}
```

### 6. **Player Domain - Extract Complex Logic**

**Current Issues:**
- Player state management contains business logic
- Song fetching, playing, pausing mixed with UI state
- No clear separation between player domain and presentation

**Improved Structure:**
```typescript
// domains/player/models/Player.ts
export class Player {
  private currentSong: SongInfo | null = null
  private playlist: Playlist = new Playlist([])
  private status: PlayerStatus = PlayerStatus.Stopped
  private currentIndex: number = 0

  constructor(private playerService: PlayerService) {}

  async playSong(songHash: string): Promise<void> {
    this.status = PlayerStatus.Loading
    try {
      this.currentSong = await this.playerService.fetchSongInfo(songHash)
      this.status = PlayerStatus.Playing
    } catch (error) {
      this.status = PlayerStatus.Error
      throw error
    }
  }

  pause(): void {
    if (this.status === PlayerStatus.Playing) {
      this.status = PlayerStatus.Paused
    }
  }

  resume(): void {
    if (this.status === PlayerStatus.Paused) {
      this.status = PlayerStatus.Playing
    }
  }

  canPlayNext(): boolean {
    return this.playerService.canPlayNext(this.currentIndex, this.playlist.songs)
  }

  async next(): Promise<void> {
    if (!this.canPlayNext()) return
    
    const nextSong = this.playlist.songs[this.currentIndex + 1]
    this.currentIndex++
    await this.playSong(nextSong.hash)
  }
}

// infrastructure/store/PlayerStoreAdapter.ts
// Adapts Player domain model to Zustand store
export function createPlayerStoreAdapter(player: Player) {
  // Map domain model to store state
}
```

### 7. **Search Domain - Extract Search Logic**

**Current:**
- Search logic scattered in hooks and containers
- URL parameter handling mixed with business logic

**Improved:**
```typescript
// domains/search/services/SearchService.ts
export class SearchService {
  constructor(
    private searchRepository: ISearchRepository
  ) {}

  async getHotSearches(): Promise<HotSearch[]> {
    return await this.searchRepository.getHotSearches()
  }

  async searchByKeyword(keyword: string): Promise<SearchResult> {
    if (!keyword.trim()) {
      return SearchResult.empty()
    }
    
    // Business rules: keyword validation, normalization
    const normalizedKeyword = this.normalizeKeyword(keyword)
    return await this.searchRepository.searchByKeyword(normalizedKeyword)
  }

  private normalizeKeyword(keyword: string): string {
    return keyword.trim().toLowerCase()
  }
}
```

---

## Migration Strategy

### Phase 1: Extract Domain Models
1. Create rich domain models in `domains/*/models/`
2. Replace DTO usage gradually
3. Move mappers to domain models (factory methods)

### Phase 2: Implement Repository Pattern
1. Define repository interfaces
2. Create API repository implementations
3. Replace direct API calls with repositories

### Phase 3: Extract Domain Services
1. Identify business logic in stores/containers
2. Move to domain services
3. Keep stores as simple state containers

### Phase 4: Create Use Cases
1. Define application use cases
2. Create React hooks that use use cases
3. Update containers to use new hooks

### Phase 5: Refactor Infrastructure
1. Centralize API client
2. Move configuration to infrastructure
3. Extract store adapters

---

## Benefits

1. **Testability** - Domain logic can be tested without React/UI
2. **Maintainability** - Clear separation of concerns
3. **Reusability** - Domain logic can be reused across different UIs
4. **Scalability** - Easy to add new features within domain boundaries
5. **Business Logic Clarity** - Business rules are explicit in domain services
6. **Technology Independence** - Easy to swap infrastructure (e.g., API → GraphQL)

---

## Examples of Refactored Code

### Example 1: Rank Domain

**Before:**
```typescript
// pages/rank/rankListApi.ts
export const rankListApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRankList: builder.query<RankItem[], void>({
      queryFn: async () => {
        const { data } = await fetchRankListData()
        return { data: mapRankListResponse(data) }
      }
    })
  })
})
```

**After:**
```typescript
// domains/rank/models/Rank.ts
export class Rank {
  // Rich domain model with business logic
}

// domains/rank/repositories/IRankRepository.ts
export interface IRankRepository {
  getRankList(): Promise<Rank[]>
}

// infrastructure/api/RankApiRepository.ts
export class RankApiRepository implements IRankRepository {
  async getRankList(): Promise<Rank[]> {
    // Implementation with proper error handling
  }
}

// application/rank/useCases/GetRankListUseCase.ts
export class GetRankListUseCase {
  async execute(): Promise<Rank[]> {
    // Orchestration logic
  }
}

// presentation/hooks/useRankList.ts
export function useRankList() {
  // React Query hook using use case
}
```

### Example 2: Player Domain

**Before:**
```typescript
// stores/usePlayerStore.ts - 186 lines mixing state and business logic
fetchMusicIfNeeded: async (id: string | null, songIndex = 0, songList: Song[] = []) => {
  // Business logic + state management
}
```

**After:**
```typescript
// domains/player/services/PlayerService.ts
export class PlayerService {
  async fetchSongInfo(hash: string): Promise<SongInfo> {
    // Pure business logic, no state
  }
}

// domains/player/models/Player.ts
export class Player {
  // Domain model representing player state
}

// infrastructure/store/PlayerStore.ts (Zustand)
// Thin adapter layer, delegates to Player domain model
```

---

## Next Steps

1. **Start with one domain** (e.g., Rank) - Refactor completely
2. **Establish patterns** - Use as template for other domains
3. **Gradually migrate** - One domain at a time
4. **Keep existing code working** - Refactor incrementally
5. **Add tests** - Domain logic should be well-tested

