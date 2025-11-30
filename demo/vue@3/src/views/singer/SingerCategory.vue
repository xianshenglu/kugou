<template>
  <section class="singer_category">
    <ul
      class="singer_category__list main_border"
      v-for="(list,list_index) in singerCategories"
      :key="list_index"
      :test-id="list_index === 0 ? 'page-singer-category' : undefined"
    >
      <li
        class="singer_category__item main_border_bottom"
        v-for="(item,index) in list.data"
        :key="'1'+index"
        test-class="list"
      >
        <router-link :to="(item as any).path" class="singer_category__link" test-class="link">
          <div class="singer_category__title">{{item.classname}}</div>
          <button class="singer_category_btn">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-arrow-right"></use>
            </svg>
          </button>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import type { RootState } from '@/store'
import { fetchSingerCategory } from '../../requests/singerCategory'
import { mapSingerCategoryData } from '@shared/domains/singer/mapper'
import { useLoading } from '@/composables/useLoading'

const store = useStore<RootState>()
const { startLoading, stopLoading, setLoadingExcludeNav } = useLoading()

const singerCategories = computed(() => store.state.singer.singerCategories)

if (singerCategories.value.length === 0) {
  setLoadingExcludeNav()
  startLoading()
  getSingerCategories()
}

function getSingerCategories(): void {
  fetchSingerCategory().then(({ data }) => {
    store.commit('replaceProperty', {
      paths: 'singer.singerCategories',
      data: mapSingerCategoryData(data)
    })
    stopLoading()
  })
}

</script>

<style lang="less" scoped>
@import (reference) '~@/styles/constant';
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
  font-size: 20px;
  margin-right: 15px;
  margin-left: auto;
}
</style>
