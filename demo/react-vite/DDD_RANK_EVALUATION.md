# DDD Structure Evaluation: Rank Feature Example

## Recommended Structure (Feature-First)

```
src/features/rank/
  ├── apis/           # HTTP + light mapping (Infrastructure)
  ├── hooks/          # React Query + orchestration (Application/Presentation)
  ├── components/     # UI (Presentation)
  └── services/       # Optional: complex orchestration/business rules (Application)
```

### DDD Mapping
- **apis** → Infrastructure
- **hooks** → Application (data/orchestration) / Presentation (pure UI state)
- **components** → Presentation
- **services** → Application
- **demo/shared/domains** → Domain (DTOs/mappers; add local models only if behavior needed)

## DDD Principles Applied

1. **Layer Separation (lightweight)**
   - Infrastructure (apis), Application (services/hooks for orchestration), Presentation (components/UI hooks), Domain (shared models/DTOs)

2. **Dependency Direction**
   - Presentation → Application → Domain
   - Infrastructure depends on domain DTOs but not UI

3. **Reuse over boilerplate**
   - Prefer function-based modules; avoid interfaces/classes unless needed
   - Reuse `demo/shared/domains` for DTOs/mappers

## Structure Examples

### Simple Feature (Rank)

```typescript
// features/rank/apis/getRankList.ts
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

### Complex Feature (add services folder)

```
features/{feature}/
  ├── apis/
  ├── hooks/
  ├── components/
  └── services/    # Add when orchestration/validation emerges
```

## Final Recommendation

- **Default structure:** `features/{feature}/{apis,hooks,components}`
- **Add `services/`** only when orchestration/validation emerges
- **Reuse `demo/shared/domains`** for DTOs/mappers; add local domain models only if behavior is needed
- **Hooks placement:**
  - Data/orchestration hooks → Application
  - Pure UI state hooks → Presentation

**Why this works:**
- ✅ Keeps DDD boundaries without boilerplate (functions, not classes/DI)
- ✅ Consistent structure across features
- ✅ Easy to understand and test
- ✅ Can evolve by adding `services/` when complexity grows
