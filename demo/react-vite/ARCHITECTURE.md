# DDD Structure Evaluation: Rank Feature Example

## Recommended Structure (Feature-First)

### Simple feature

```
src/features/rank/
  ├── rank.model.ts                      # Domain entities (If server returns good domain, no dto.ts)
  ├── rank.repo.ts                        # Simple Request, can have simple mapper(Infrastructure)
  ├── useRankList.ts                     # React Query hooks (Application/Presentation)
  ├── RankList.tsx                       # UI components (Presentation)
  └── RankListPage.tsx                   
```

### Complex feature

```
src/features/rank/
  ├── domain/                             # Optional: domain layer (Domain)
  │   ├── rank.model.ts                  # Domain entities with behavior (simple: flat structure)
  │   └── rank.domain.ts                 # Domain services (pure business logic; can split if complex)
  ├── repos/                               # HTTP + light mapping (Infrastructure)
  │   ├── rank.api.ts                    # exports getRankList/...
  │   ├── rank.dto.ts                    # DTO types. In case server doesn't return good models
  │   ├── rank.repo.ts                    # repo = api + dto + mapper
  │   └── rank.mapper.ts                 # DTO → domain mappers. In case server doesn't return good models
  ├── hooks/                              # React Query + orchestration (App/Presentation)
  │   ├── useRankList.ts
  │   └── useRankInfo.ts
  ├── helpers/                            # Presentation utilities (formatting, parsing for display)
  │   ├── time.ts                         # e.g., secondToMin, formatDate
  │   └── lyric.ts                        # e.g., getFormattedLyrics
  ├── components/                         # UI (Presentation)
  │   ├── RankList.tsx
  │   ├── RankInfo.tsx
  │   └── RankListPage.tsx
  └── services/                           # Optional: complex orchestration/business rules (Application)
      └── rank.service.ts                 # Application services (orchestration/validation; can split if complex)
```

### DDD Mapping
- **domain/** → Domain (entities + domain services; prefer reuse from demo/shared/domains)
  - Simple: flat structure (entities and services in same folder)
  - Complex: can nest `models/` and `services/` if needed
- **repos** → Infrastructure (prefer reuse from demo/shared/domains)
- **hooks** → Application (data/orchestration) / Presentation (pure UI state)
- **helpers/** → Presentation (formatting, parsing for display; feature-specific presentation utilities)
- **components** → Presentation
- **services/** → Application (orchestration, coordination; different from domain services)
- **demo/shared/domains** → Domain (DTOs/mappers; add local domain only if behavior needed)

## DDD Principles Applied

1. **Layer Separation (lightweight)**
   - Domain (domain/ - entities and services in flat structure for simple features; prefer reuse from demo/shared/domains for DTOs/mappers)
   - Infrastructure (repos), Application (services/hooks for orchestration), Presentation (components/helpers/UI hooks)

2. **Dependency Direction**
   - Presentation → Application → Domain
   - Infrastructure depends on domain DTOs but not UI

3. **Reuse over boilerplate**
   - Prefer function-based modules; avoid interfaces/classes unless needed
   - Reuse `demo/shared/domains` for DTOs/mappers

## Structure Examples

### Simple Feature (Rank)

```typescript
// features/rank/repos/rank.repo.ts
export async function getRankList(): Promise<Rank[]> {
  // API call + mapping (reuse demo/shared/domains/rank DTOs/mappers)
}

// features/rank/hooks/useRankList.ts
export function useRankList() {
  return useQuery({
    queryKey: ['rankList'],
    queryFn: getRankList,
  })
}

// features/rank/components/RankListPage.tsx
export function RankListPage() {
  const { data, isLoading } = useRankList()
  return <RankList ranks={data} />
}
```

## Final Recommendation

- **Default structure:** `features/{feature}`
  - Simple: `{feature}/{*.model.ts, *.repo.ts, Component.tsx, useHook.ts}`
  - Complex: `{feature}/{domain, repos, hooks, helpers, components, services}`
  - Large and Complext: `{feature}/${subFeature}/...`
- **Add `domain/`** only when you need rich domain entities/services with behavior (prefer reuse from demo/shared/domains)
- **Add `helpers/`** (Presentation layer) for feature-specific presentation utilities (formatting, parsing for display)
- **Add `services/`** (Application layer) only when orchestration/validation emerges (different from domain services)
- **Reuse `demo/shared/domains`** for DTOs/mappers; add local domain only if behavior is needed
- **Hooks placement:**
  - Data/orchestration hooks → Application
  - Pure UI state hooks → Presentation
- If there're feature specific code that needs to be shared put it under `shared/{feature}/`.
  - For example, `shared/player/usePlayerStore`

**Why this works:**
- ✅ Keeps DDD boundaries without boilerplate (functions, not classes/DI)
- ✅ Consistent structure across features
- ✅ Easy to understand and test
- ✅ Can evolve by adding `services/` when complexity grows
