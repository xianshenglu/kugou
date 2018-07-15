<template>
  <ul class="pub_music__list">
    <li class="pub_music__item main_border_bottom" v-for="(item,index) in musicList" :key="index">
      <slot :data="index" name="index"></slot>
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
  padding-left: 19px;
}

.pub_music__item {
  display: flex;
  align-items: center;

  box-sizing: border-box;
  width: 100%;
  height: 72px;

  border-color: #eee;
}

.pub_music__name {
  width: calc(100% - 48px);

  font-size: 18px;
}

.pub_music__download {
  box-sizing: content-box;
  width: 23px;
  height: 100%;
  padding: 0 13px;
}

</style>
