import { onUpdated } from 'vue'
import { useStore } from 'vuex'
import type { RootState } from '@/store'

// 定义加载控制函数返回类型
interface LoadingFunctions {
  startLoading: () => void
  stopLoading: () => void
  setLoadingExcludeHeader: () => void
  setLoadingExcludeNav: () => void
  setLoadingExcludeModuleTitle: () => void
  setLoadingExcludeSearchForm: () => void
}

export function useLoading(): LoadingFunctions {
  const store = useStore<RootState>()

  const startLoading = (): void => {
    store.commit('replaceProperty', {
      paths: 'loading.isShow',
      data: true
    })
  }

  const stopLoading = (): void => {
    store.commit('replaceProperty', {
      paths: 'loading.isShow',
      data: false
    })
  }
  
  onUpdated(() => {
    stopLoading()
  })
  
  const setLoadingExcludeHeader = (): void => {
    store.commit('replaceProperty', {
      paths: 'loading.sizeClassName',
      data: 'loading--exclude_header'
    })
  }

  const setLoadingExcludeNav = (): void => {
    store.commit('replaceProperty', {
      paths: 'loading.sizeClassName',
      data: 'loading--exclude_nav'
    })
  }

  const setLoadingExcludeModuleTitle = (): void => {
    store.commit('replaceProperty', {
      paths: 'loading.sizeClassName',
      data: 'loading--exclude_module_title'
    })
  }

  const setLoadingExcludeSearchForm = (): void => {
    store.commit('replaceProperty', {
      paths: 'loading.sizeClassName',
      data: 'loading--exclude_search_form'
    })
  }

  return {
    startLoading,
    stopLoading,
    setLoadingExcludeHeader,
    setLoadingExcludeNav,
    setLoadingExcludeModuleTitle,
    setLoadingExcludeSearchForm
  }
}
