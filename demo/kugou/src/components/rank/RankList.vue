<template>
  <section class="rank_list">
    <PubList :pub-list="rankList" class="rank_list__cont">
      <div class="rank_list__info" slot-scope="props" slot="cont">{{props.data.title}}</div>
    </PubList>
  </section>
</template>

<script>
import PubList from '../public/PubList'
import axios from 'axios'
import api from '../../assets/js/api'
import { mapState, mapMutations } from 'vuex'
import loading from '../../mixins/loading'
import replaceSizeInUrl from '@/utils/replaceSizeInUrl'
export default {
  name: 'RankList',
  mixins: [loading],
  components: {
    PubList
  },
  computed: {
    ...mapState('rank', ['rankList'])
  },
  created() {
    if (this.rankList.length === 0) {
      this.setLoadingExcludeNav()
      this.startLoading()
      this.getRank()
    }
  },
  methods: {
    ...mapMutations(['replaceProperty']),
    getRank() {
      axios.get(api.rankList).then(({ data }) => {
        data.rank.list.forEach(obj => {
          obj.imgUrl = replaceSizeInUrl(obj.imgurl)
          obj.path = '/rank/info/' + obj.rankid
          obj.title = obj.rankname
        })
        this.replaceProperty({
          paths: 'rank.rankList',
          data: data.rank.list
        })
        this.stopLoading()
      })
    }
  }
}
</script>

<style lang="less" scoped>
.rank_list {
  font-size: 19px;
}
.rank_list__cont {
  overflow: scroll;

  box-sizing: border-box;

  width: 100%;

  height: 100%;
}
.rank_list__info {
  padding-left: 18px;
}
</style>
