<template>
  <section class="singer_info" v-if="isSingerInfoShow">
    <PubModuleHead :moduleHeadInfo="getModuleHeadInfo()">
      <PubModuleDes slot="moduleDes" :description="getModuleHeadInfo().intro"></PubModuleDes>
    </PubModuleHead>
    <PubMusicList :musicList="getMusicList()"></PubMusicList>
  </section>
</template>

<script>
import PubModuleHead from '../public/PubModuleHead'
import PubModuleDes from '../public/PubModuleDes'
import PubMusicList from '../public/PubMusicList'

export default {
  name:'SingerInfo',
  props:['curSingerInfo','isSingerInfoShow'],
  components:{
    PubModuleHead,
    PubMusicList,
    PubModuleDes
  },
  data:function() {
    return {
      getModuleHeadInfo(){
        return this.$props.curSingerInfo.info
      },
      getMusicList(){
        return this.$props.curSingerInfo.data
       },
    }
  },
  created() {
    let singerId = this.$route.path.split('/').pop()
    let isDataReady = this.$props.curSingerInfo.info && this.$props.curSingerInfo.info.id === singerId
    // console.log('isDataReady',isDataReady)

    if (!isDataReady) {
      this.$emit('getSingerInfo', singerId)
    }
  },
  destroyed() {
    //数据异步更新，没有被刷新，手动销毁数据，数据准备好了之后，再渲染
    this.$emit('destroyCurSingerInfo')
  }
}
</script>

<style scoped lang="less">
</style>
