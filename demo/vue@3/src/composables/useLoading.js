import { onUpdated } from 'vue'
import { useStore } from 'vuex'

export function useLoading() {
  const store = useStore()

  const startLoading = () => {
    store.commit('replaceProperty', {
      paths: 'loading.isShow',
      data: true
    })
  }

  const stopLoading = () => {
    store.commit('replaceProperty', {
      paths: 'loading.isShow',
      data: false
    })
  }
  onUpdated(() => {
    stopLoading()
  })
  const setLoadingExcludeHeader = () => {
    store.commit('replaceProperty', {
      paths: 'loading.sizeClassName',
      data: 'loading--exclude_header'
    })
  }

  const setLoadingExcludeNav = () => {
    store.commit('replaceProperty', {
      paths: 'loading.sizeClassName',
      data: 'loading--exclude_nav'
    })
  }

  const setLoadingExcludeModuleTitle = () => {
    store.commit('replaceProperty', {
      paths: 'loading.sizeClassName',
      data: 'loading--exclude_module_title'
    })
  }

  const setLoadingExcludeSearchForm = () => {
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
