<template>
  <section class="NewSong">
    <Slider :data="sliderData" class="NewSong__slider"/>
    <AppMusicList :music-list="newSongs" class="NewSong__music_list"/>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import AppMusicList from '@/components/AppMusicList';
import Slider from './Slider.vue';
import { fetchNewSong } from '@/requests/newSong';
import { useLoading } from '@/composables/useLoading';

const store = useStore();

const newSongs = computed(() => store.state.newSong.newSongs);
const sliderData = computed(() => store.state.newSong.sliderData);

const { startLoading, stopLoading, setLoadingExcludeNav } = useLoading();
const getNewSong = () => {
  fetchNewSong().then(({ data }) => {
    store.commit('replaceProperty', {
      paths: 'newSong.newSongs',
      data: data.data
    });
    let banners = data.banner;
    store.commit('replaceProperty', {
      paths: 'newSong.sliderData',
      data: banners
    });
    stopLoading()
  });
};
if (newSongs.value.length === 0) {
  setLoadingExcludeNav();
  startLoading();
  getNewSong();
}
</script>

<style lang="less" scoped>
.NewSong__slider {
  box-sizing: border-box;
  width: 100%;
  height: 154px;
}
</style>
