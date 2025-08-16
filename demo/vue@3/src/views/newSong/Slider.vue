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
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    data: {
      handler: function(newArray) {
        if (newArray.length === 0) {
          return
        }
        this.$nextTick(() => this.initGlideVm())
      },
      immediate: true
    }
  },
  destroyed() {
    glide.destroy()
  },
  methods: {
    initGlideVm() {
      glide = new Glide('.slider__body', {
        type: 'carousel',
        autoplay: 3000,
        animationDuration: 1000
      }).mount({
        Autoplay,
        Controls,
        Swipe
      })
    }
  }
}
</script>

<style lang="css" scoped>
@import '../../../node_modules/@glidejs/glide/dist/css/glide.core.min.css';
@import "../../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css";
</style>
<style scoped lang="less">
@import (reference) '~@/styles/constant';
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
