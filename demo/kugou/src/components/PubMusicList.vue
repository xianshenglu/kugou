<template>
<ul class="pub_music__list">
  <li class="pub_music__item" v-for="(item,index) in musicList" :key="index">
    <slot :data="index"></slot>
    <div class="pub_music__name">{{item.filename}}</div>
    <button class="pub_music__download">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-download"></use>
        </svg>
    </button>
  </li>
</ul>
</template>

<script>
export default {
  name: 'PubMusicList',
  props: ['musicList']
}
</script>

<style lang="less" scoped>
.pub_music__list {
  padding-left: 13px;
}

.pub_music__item {
  display: flex;
  align-items: center;

  box-sizing: border-box;
  width: 100%;
  height: 72px;

  border-bottom: 1px solid #eee;
}

.pub_music__name {
  width: calc(100% - 45px);

  font-size: 18px;
}

.pub_music__download {
  box-sizing: content-box;
  width: 21px;
  height: 100%;
  padding: 0 12px;
}

</style>
