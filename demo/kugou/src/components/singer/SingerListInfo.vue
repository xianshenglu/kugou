<template>
  <section class="singer_list_info">
    <PubModuleTitle :title="singerListInfo.info.name"/>
    <ul class="singer_list_info__list" @scroll="$_xsl__loadImgLazy($refs.lazyImages)">
      <li
        class="singer_list_info__item main_border_bottom"
        v-for="(item,index) in singerListInfo.data"
        :key="index"
      >
        <router-link :to="item.path" class="singer_list_info__link">
          <img
            class="singer_list_info__img"
            ref="lazyImages"
            src="../../assets/images/default.png"
            :data-src="item.imgUrl"
            :data-is-loaded="isLoaded"
          >
          <div class="singer_list_info__name">{{item.name}}</div>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import PubModuleTitle from '../public/PubModuleTitle'
import axios from 'axios'
import api from '../../assets/js/api.js'
import mixin from '../../mixins/index.js'
import { mapState } from 'vuex'

export default {
  name: 'SingerListInfo',
  mixins: [mixin],
  components: {
    PubModuleTitle
  },
  computed: {
    ...mapState('singer', ['singerListInfo'])
  },
  watch: {
    'singerListInfo.data.length': function() {
      this.$nextTick(function() {
        this.$_xsl__loadImgLazy(this.$refs.lazyImages)
      })
    }
  },
  created() {
    let singerListInfoId = this.$route.path.split('/').pop()
    this.getSingerListInfo(singerListInfoId)
  },
  methods: {
    getSingerListInfo(singerListInfoId) {
      axios
        .get(api.singerListInfo.replace(/singerListInfoId?/i, singerListInfoId))
        .then(({ data }) => {
          let singerListInfo = {
            info: {
              id: data.classid,
              name: data.classname,
              count: data.singers.total
            },
            data: data.singers.list.info
          }
          data.singers.list.info.forEach(obj => {
            obj.id = obj.singerid
            obj.name = obj.singername
            obj.imgUrl = this.$_xsl__replaceImgUrlSize(obj.imgurl)
            obj.path = '/singer/info/' + obj.id
          })
          Object.assign(this.singerListInfo, singerListInfo)
          this.$store.commit('replaceProperty', {
            paths: 'singer.singerListInfo',
            data: singerListInfo
          })
        })
        .catch(er => {
          alert(er)
        })
    }
  }
}
</script>

<style scoped lang="less">
.singer_list_info {
  font-size: 19px;
}
.singer_list_info__list {
  overflow: scroll;

  box-sizing: border-box;
  height: calc(100% - 54px);
}
.singer_list_info__item {
  height: 88px;
}
.singer_list_info__link {
  display: flex;
  align-items: center;

  height: 100%;
}
.singer_list_info__img {
  display: block;

  width: 61px;
  height: 61px;
  margin: 0 18px 0 13px;
}
</style>
