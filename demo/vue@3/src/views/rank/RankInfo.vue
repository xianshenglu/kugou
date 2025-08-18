<template>
  <section class="rank_info">
    <PubModuleHead :module-head-info="getModuleHeadInfo">
      <template v-slot:moduleUpdateTime>
        <time class="rank_info__update_time">{{ msg }} {{ formatDate }}</time>
      </template>
    </PubModuleHead>
    <AppMusicList :music-list="getMusicList">
      <template v-slot:index="props">
        <div
          :class="'rank_info__index ' + 'rank_info__index' + (props.data + 1)"
        >
          {{ props.data + 1 }}
        </div>
      </template>
    </AppMusicList>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

import PubModuleHead from '@/components/PubModuleHead.vue'
import AppMusicList from '@/components/AppMusicList.vue'
import { fetchRankInfo } from '@/requests/rankInfo'
import { useLoading } from '@/composables/useLoading'
import replaceSizeInUrl from '@/utils/replaceSizeInUrl'

// 定义排行榜信息接口
interface RankInfoData {
  info: {
    banner7url: string;
    rankname: string;
    [key: string]: any;
  };
  songs: {
    timestamp: number;
    list: any[];
    [key: string]: any;
  };
}

const store = useStore()
const route = useRoute()
const { startLoading, stopLoading, setLoadingExcludeHeader } = useLoading()

const msg = ref('上次更新时间')
const rankInfo = computed<RankInfoData>(() => store.state.rank.rankInfo)

const getModuleHeadInfo = computed(() => {
  return {
    imgUrl: replaceSizeInUrl(rankInfo.value.info.banner7url),
    name: rankInfo.value.info.rankname
  }
})

const getMusicList = computed(() => {
  return rankInfo.value.songs.list
})

const formatDate = computed(() => {
  const date = new Date(rankInfo.value.songs.timestamp * 1000)
  return (
    date.getFullYear() +
    '-' +
    String(date.getMonth() + 1).padStart(2, '0') +
    '-' +
    String(date.getDate()).padStart(2, '0')
  )
})

const getRankInfo = (rankId: string) => {
  fetchRankInfo({ params: { rankid: rankId } }).then(res => {
    const rankInfoData: RankInfoData = {
      info: res.data.info,
      songs: res.data.songs
    }
    store.commit('replaceProperty', {
      paths: 'rank.rankInfo',
      data: rankInfoData
    })
    stopLoading()
  })
}

const rankId = route.path.split('/').pop()
setLoadingExcludeHeader()
startLoading()
getRankInfo(rankId)
</script>

<style lang="less" scoped>
@import (reference) '~@/styles/constant';
.rank_info__update_time {
  align-self: flex-end;

  width: 100%;
  height: 50px;
  padding-left: 16px;

  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.6) 5%,
    rgba(107, 107, 107, 0.1) 90%,
    rgba(255, 255, 255, 0)
  );

  font-size: @font_size_med;
  line-height: 2.3;
}

.rank_info__index {
  width: 27px;
  height: 19px;
  margin-right: 10px;

  text-align: center;

  color: @white-to-black;
  border-radius: 9px;

  font-size: @font_size_small;
  line-height: 19px;
}

.rank_info__index1 {
  color: @white;
  background-color: @red;
}

.rank_info__index2 {
  color: @white;
  background-color: @orange;
}

.rank_info__index3 {
  color: @white;
  background-color: @yellow;
}
</style>
