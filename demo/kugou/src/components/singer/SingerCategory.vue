<template>
  <section class="singer_category">
    <ul
      class="singer_category__list main_border"
      v-for="(list,list_index) in singerCategories"
      :key="list_index"
    >
      <li
        class="singer_category__item main_border_bottom"
        v-for="(item,index) in list.data"
        :key="'1'+index"
      >
        <router-link :to="item.path" class="singer_category__link">
          <div class="singer_category__title">{{item.classname}}</div>
          <button class="singer_category_btn arrow arrow--right"></button>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from 'axios'
import api from '../../assets/js/api.js'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'SingerCategory',
  computed: {
    ...mapState('singer', ['singerCategories'])
  },
  created() {
    this.getSingerCategories()
  },
  methods: {
    ...mapMutations(['replaceProperty']),
    getSingerCategories() {
      axios.get(api.singerCategory).then(({ data }) => {
        let singerCategories = data.list.reduce((re, obj) => {
          obj.path = '/singer/list/' + obj.classid
          let findCategories = re.find(
            o => o.category === obj.classname.substring(0, 2)
          )
          if (findCategories) {
            findCategories.data.push(obj)
          } else {
            re.push({
              category: obj.classname.substring(0, 2),
              data: [obj]
            })
          }
          return re
        }, [])
        this.replaceProperty({
          paths: 'singer.singerCategories',
          data: singerCategories
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import (reference) '../../assets/css/constant.less';
.singer_category__list {
  width: 347px;
  margin: 18px auto;

  // border-bottom: none;

  border-radius: 6px;
  background-color: @white;
}

.singer_category__item {
  height: 50px;
}

.singer_category__item:last-child {
  /*如果用另一种思路，设置 .singer_category__list 的 border-bottom ，
  在 iPhone6/7/8 就会失败，待测试*/
  border-bottom: none;
}

.singer_category__link {
  display: block;
  display: flex;
  align-items: center;

  height: 100%;
}

.singer_category__title {
  display: block;

  padding-left: @padding_width;
}

.singer_category_btn {
  margin-right: 15px;
  margin-left: auto;
}
</style>
