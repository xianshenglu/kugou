<template>
  <section class="slider" @touchstart.stop>
    <div class="glide slider__body" ref="glide">
      <div class="glide__track slider__track" data-glide-el="track">
        <ul class="glide__slides slider__slides">
          <li class="glide__slide" v-for="(item,index) in data" :key="index">
            <a :href="item.extra.tourl" class="slider__link">
              <img :src="item.imgurl" :alt="item.title" class="slider__img">
            </a>
          </li>
        </ul>
      </div>
      <div class="glide__bullets slider__bullets" data-glide-el="controls[nav]">
        <button
          class="glide__bullet"
          v-for="(item,index) in data"
          :key="index"
          :data-glide-dir="'='+index"
        ></button>
      </div>
    </div>
  </section>
</template>

<script>
import Glide, {
  Controls,
  Autoplay,
  Swipe
} from '@glidejs/glide/dist/glide.modular.esm'

let glide
export default {
  name: 'Slider',
  props: ['data'],
  mounted() {
    this.$nextTick(() => {
      // todo avoid setTimeout
      setTimeout(() => {
        glide = new Glide('.slider__body', {
          type: 'carousel',
          autoplay: 3000,
          animationDuration: 1000
        }).mount({
          Autoplay,
          Controls,
          Swipe
        })
      }, 2000)
    })
  },
  destroyed() {
    glide.destroy()
  }
}
</script>

<style lang="sass" scoped>
@import 'node_modules/@glidejs/glide/src/assets/sass/glide.core';
@import "node_modules/@glidejs/glide/src/assets/sass/glide.theme";
</style>
<style scoped lang="less">
@import (reference) '../../assets/css/constant.less';
.slider {
  padding-top: 5px;
  position: relative;
}
.slider__body,
.slider__track,
.slider__slides {
  height: 100%;
}
.slider__bullets {
  bottom: 0.8em;
}
.slider__link,
.slider__img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
