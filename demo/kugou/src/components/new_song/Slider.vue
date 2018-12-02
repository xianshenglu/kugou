<template>
  <section class="slider" @touchstart.stop>
    <swiper :options="swiperOptions" ref="mySwiper" class="slider__body">
      <swiper-slide v-for="(item,index) in data" :key="index">
        <a :href="item.extra.tourl" class="slider__link">
          <img :src="item.imgurl" :alt="item.title" class="slider__img">
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'Slider',
  props: ['data'],
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOptions: {
        autoplay: {
          delay: 3000,
          stopOnLastSlide: true,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
          hideOnClick: false
        },
        on: {
          imagesReady: function() {
            this.autoplay.start()
          },
          slideChangeTransitionEnd: function() {
            if (this.isEnd) {
              this.autoplay.stop()
              //! avoid blink in chrome, change to the same picture after render
              setTimeout(() => {
                this.slideTo(0, 0)
                setTimeout(() => {
                  this.autoplay.start()
                }, this.params.autoplay.delay)
              })
            }
          }
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
@import (reference) '../../assets/css/constant.less';
.slider {
  padding-top: 5px;
  position: relative;
}
.slider__body {
  height: 100%;
}
.slider__link,
.slider__img {
  display: block;
  width: 100%;
  height: 100%;
}
.swiper-pagination {
  width: 20%;
  margin: auto;
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
}
/deep/ .swiper-pagination-bullet {
  background: @white;
  opacity: 0.5;
  width: 10px;
  height: 10px;
  margin: 4px;
}
/deep/ .swiper-pagination-bullet:last-child {
  display: none;
}
/deep/ .swiper-pagination-bullet-active {
  opacity: 1;
}
</style>
