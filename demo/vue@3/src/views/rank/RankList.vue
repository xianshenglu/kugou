<template>
  <section class="rank_list">
    <PubList :pub-list="rankList" class="rank_list__cont">
      <template v-slot:cont="props">
        <div class="rank_list__info">
          {{ props.data.title }}
        </div>
      </template>
    </PubList>
  </section>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

import PubList from '@/modules/PubList.vue'
import { fetchRankList } from '@/requests/rankList'
import { useLoading } from '@/composables/useLoading'
import replaceSizeInUrl from '@/utils/replaceSizeInUrl'

// 定义排行榜项接口
interface RankItem {
  rankid: string;
  imgurl: string;
  rankname: string;
  imgUrl: string;
  path: string;
  title: string;
  [key: string]: any;
}

const store = useStore()
const { startLoading, stopLoading, setLoadingExcludeNav } = useLoading()

const rankList = computed<RankItem[]>(() => store.state.rank.rankList)

const getRank = () => {
  fetchRankList().then(({ data }) => {
    data.rank.list.forEach((obj: any) => {
      obj.imgUrl = replaceSizeInUrl(obj.imgurl)
      obj.path = '/rank/info/' + obj.rankid
      obj.title = obj.rankname
    })
    store.commit('replaceProperty', {
      paths: 'rank.rankList',
      data: data.rank.list
    })
    stopLoading()
  })
}

if (rankList.value.length === 0) {
  setLoadingExcludeNav()
  startLoading()
  getRank()
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
