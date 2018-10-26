<template>
  <section class="rank_list">
    <PubList :pub-list="rankList" v-if="rankList.length!==0" class="rank_list__cont">
      <div class="rank_list__info" slot-scope="props" slot="cont">{{props.data.title}}</div>
    </PubList>
  </section>
</template>

<script>
import PubList from '../public/PubList'
import axios from 'axios'
import api from '../../assets/js/api.js'
import utilsMixin from '../../assets/js/utilsMixin.js'

export default {
  name: 'RankList',
  mixins: [utilsMixin],
  components: {
    PubList
  },
  data() {
    return {
      rankList: []
    }
  },
  created() {
    this.getRank()
  },
  methods: {
    getRank() {
      axios.get(api.rankList).then(({ data }) => {
        data.rank.list.forEach(obj => {
          obj.imgUrl = this.replaceImgUrlSize(obj.imgurl)
          obj.path = '/rank/info/' + obj.rankid
          obj.title = obj.rankname
          this.rankList.push(obj)
        })
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
