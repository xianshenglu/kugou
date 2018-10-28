<template>
  <section class="singer_category_info">
    <PubModuleTitle :title="singerCategoryInfo.info.name"/>
    <ul class="singer_category_info__list" @scroll="$_xsl__loadImgLazy($refs.lazyImages)">
      <li
        class="singer_category_info__item main_border_bottom"
        v-for="(item,index) in singerCategoryInfo.data"
        :key="index"
      >
        <router-link :to="item.path" class="singer_category_info__link">
          <img
            class="singer_category_info__img"
            ref="lazyImages"
            src="../../assets/images/default.png"
            :data-src="item.imgUrl"
            :data-is-loaded="isLoaded"
          >
          <div class="singer_category_info__name">{{item.name}}</div>
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

export default {
  name: 'SingerCategoryInfo',
  mixins: [mixin],
  components: {
    PubModuleTitle
  },
  data() {
    return {
      singerCategoryInfo: {
        info: {},
        data: {}
      }
    }
  },
  watch: {
    'singerCategoryInfo.data.length': function() {
      this.$nextTick(function() {
        this.$_xsl__loadImgLazy()
      })
    }
  },
  created() {
    let singerCategoryInfoId = this.$route.path.split('/').pop()
    this.getSingerCategoryInfo(singerCategoryInfoId)
  },
  methods: {
    getSingerCategoryInfo(singerCategoryInfoId) {
      axios
        .get(
          api.singerCategoryInfo.replace(
            /singerCategoryInfoId?/i,
            singerCategoryInfoId
          )
        )
        .then(({ data }) => {
          let singerCategoryInfo = {
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
          Object.assign(this.singerCategoryInfo, singerCategoryInfo)
          this.singerCategoryInfo = singerCategoryInfo
        })
        .catch(er => {
          alert(er)
        })
    }
  }
}
</script>

<style scoped lang="less">
.singer_category_info {
  font-size: 19px;
}
.singer_category_info__list {
  overflow: scroll;

  box-sizing: border-box;
  height: calc(100% - 54px);
}
.singer_category_info__item {
  height: 88px;
}
.singer_category_info__link {
  display: flex;
  align-items: center;

  height: 100%;
}
.singer_category_info__img {
  display: block;

  width: 61px;
  height: 61px;
  margin: 0 18px 0 13px;
}
</style>
