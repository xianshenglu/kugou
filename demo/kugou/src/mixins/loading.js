import { mapMutations } from 'vuex'
export default {
  updated() {
    this.replaceProperty({
      paths: 'loading.isShow',
      data: false
    })
  },
  methods: {
    ...mapMutations(['replaceProperty'])
  }
}
