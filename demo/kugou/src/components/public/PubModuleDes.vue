<template>
  <div class="module_info__intro main_box_shadow">
    <p class="module_info__text">{{description}}</p>
    <button class="more_btn down" @click="showMore"></button>
  </div>
</template>

<script>
export default {
  name: 'PubModuleDes',
  props: ['description'],
  methods: {
    showMore() {
      let targetClassList = event.target.classList
      let isDown = targetClassList.contains('down')
      let songListInfoIntro = utils.closest('.module_info__intro', event.target)

      if (isDown) {
        targetClassList.remove('down')
        targetClassList.add('up')
      } else {
        targetClassList.remove('up')
        targetClassList.add('down')
      }
      songListInfoIntro.classList.toggle('show_more', isDown)
    }
  }
}
</script>

<style scoped lang="less">
.module_info__intro {
  display: flex;
  overflow: hidden;
  align-items: flex-start;

  box-sizing: border-box;
  height: 41px;
  padding: 5px 0 5px 19px;

  font-size: 18px;
  line-height: 1.8;
}

.module_info__intro.show_more {
  height: auto;
}

.more_btn {
  flex: 0 0 auto;

  width: 24px;
  height: 24px;
  margin: auto 12px;

  border-width: 2px;
  border-color:#bbb;
}

.more_btn::before {
  width: 8px;
  height: 8px;

  border-width: inherit;
}
</style>
