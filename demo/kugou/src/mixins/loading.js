import { mapMutations } from 'vuex'
export default {
  updated() {
    this.stopLoading()
  },
  methods: {
    //todo change loading size and turn on loading before ajax, turn off it after ajax.
    ...mapMutations(['replaceProperty']),
    startLoading() {
      this.replaceProperty({
        paths: 'loading.isShow',
        data: true
      })
    },
    stopLoading() {
      this.replaceProperty({
        paths: 'loading.isShow',
        data: false
      })
    },
    setLoadingExcludeHeader() {
      this.replaceProperty({
        paths: 'loading.sizeClassName',
        data: 'loading--exclude_header'
      })
    },
    setLoadingExcludeNav() {
      this.replaceProperty({
        paths: 'loading.sizeClassName',
        data: 'loading--exclude_nav'
      })
    },
    setLoadingExcludeModuleTitle() {
      this.replaceProperty({
        paths: 'loading.sizeClassName',
        data: 'loading--exclude_module_title'
      })
    },
    setLoadingExcludeSearchForm() {
      this.replaceProperty({
        paths: 'loading.sizeClassName',
        data: 'loading--exclude_search_form'
      })
    }
  }
}
