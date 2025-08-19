<template>
  <ul class="list" ref="lazyLoadRoot">
    <li
      class="list__item main_border_bottom"
      v-for="(item, index) in pubList"
      :key="index"
    >
      <router-link :to="item.path" class="list__link">
        <img
          class="list__img lazy_image"
          :ref="el => saveImageRef(index, el as HTMLImageElement)"
          :src="logo__grey"
          :data-src="item.imgUrl"
        />
        <slot :data="item" name="cont"></slot>
        <button class="list__btn">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-arrow-right"></use>
          </svg>
        </button>
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts" setup generic="Item extends { imgUrl: string; title: string; path: string }">
import { ref, watch, nextTick, computed } from 'vue';
import { useStore } from 'vuex';
import { lazyLoad } from '@/utils';
interface Props {
  pubList: Array<Item>;
}
const props = withDefaults(defineProps<Props>(), {
  pubList: () => []
});

const store = useStore();
const lazyImageElements = ref<(HTMLImageElement | null)[]>([]);
const lazyLoadRoot = ref(null);

const logo__grey = computed(() => store.state.images.logo__grey);

watch(() => props.pubList, (newArray) => {
  if (newArray.length === 0) {
    return;
  }
  lazyImageElements.value = newArray.map(() => null);
  nextTick(() => {
    lazyLoad(lazyImageElements.value as any, { root: lazyLoadRoot.value });
  });
}, {
  immediate: true,
  deep: true
});

const saveImageRef = (index: number, el: HTMLImageElement) => {
  lazyImageElements.value[index] = el;
};
</script>

<style lang="less" scoped>
@import (reference) '~@/styles/constant';

.list {
  padding-left: @padding_width;
}

.list__item {
  height: 123px;
}

.list__link {
  display: flex;

  align-items: center;

  height: 100%;
}

.list__img {
  flex: 0 0 auto;

  width: 97px;

  height: 97px;
}

.list__btn {
  flex: 0 0 auto;
  font-size: 20px;
  margin-left: auto;
  margin-right: 15px;
}
</style>
