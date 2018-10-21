<template>
  <section class="singer_category_info" v-if="isSingerCategoryInfoShow">
    <PubModuleTitle :title="singerCategoryInfo.info.name"></PubModuleTitle>
    <ul class="singer_category_info__list" @scroll="loadImgLazy">
      <li class="singer_category_info__item main_border_bottom" v-for="(item,index) in singerCategoryInfo.data" :key="index">
        <router-link :to="item.path" class="singer_category_info__link">
          <img class="singer_category_info__img" ref="lazyImages" src="../../assets/images/default.png" :data-src="item.imgUrl" :data-is-loaded="isLoaded">
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
import utilsMixin from '../../assets/js/utilsMixin.js'

export default {
  name: 'SingerCategoryInfo',
  mixins: [utilsMixin],
  components: {
    PubModuleTitle
  },
  data() {
    return {
      singerCategoryInfo: {},
      isSingerCategoryInfoShow: false
    }
  },
  created() {
    let singerCategoryInfoId = this.$route.path.split('/').pop()
    this.getSingerCategoryInfo(singerCategoryInfoId)
  },
  mounted() {
    this.$watch('isSingerCategoryInfoShow', function() {
      this.loadImgLazy()
    })
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
            obj.imgUrl = this.replaceImgUrlSize(obj.imgurl)
            obj.path = '/singer/info/' + obj.id
          })
          Object.assign(this.singerCategoryInfo, singerCategoryInfo)
          this.singerCategoryInfo = singerCategoryInfo
          this.isSingerCategoryInfoShow = true
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
  height: calc(100% - 54px);
  box-sizing: border-box;
  overflow: scroll;
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
