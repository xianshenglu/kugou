<template>
  <div class="player_progress" @click="setCurTime">
    <div class="player_progress__song_cur_time">{{secondToMin(currentTime)}}</div>
    <div class="player_progress__progress_bar" ref="progressBar" :style="progressBarStyle">
      <div class="player_progress__progress_bar_pointer" :style="`left:${currentProgress}%;`"></div>
    </div>
    <div class="player_progress__song_duration">{{secondToMin(audioEl.duration)}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import mixin from '../../mixins/index.js'
export default {
  name: 'PlayerProgress',
  mixins: [mixin],
  data() {
    return {
      currentTime: 0,
      loadProgress: 0,
      isTouching: false,
      touchStartX: 0,
      progressBarRect: null
    }
  },
  computed: {
    ...mapState('player', ['song', 'audioEl']),
    currentProgress() {
      return Math.floor((100 * this.currentTime) / this.audioEl.duration)
    },
    progressBarStyle() {
      return `background-image:linear-gradient(to right, #2ca2f9 ${
        this.currentProgress
      }%, transparent ${
        this.currentProgress
      }%),linear-gradient(to right, #6c6b70 ${
        this.loadProgress
      }%, transparent ${this.loadProgress}%)`
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.audioEl.addEventListener('progress', this.progressCb)
      this.audioEl.addEventListener('timeupdate', this.timeUpdateCb)
    })
  },
  destroyed() {
    this.audioEl.removeEventListener('progress', this.progressCb)
    this.audioEl.addEventListener('timeupdate', this.timeUpdateCb)
  },
  methods: {
    progressCb() {
      // todo songs wouldn't download all now or user jumped. They all make the progress bar wouldn't continuous. So, the style may need change.
      if (this.audioEl.readyState < 2) {
        return
      }
      let bufferedLength = this.audioEl.buffered.length
      this.loadProgress = Math.floor(
        (100 * this.audioEl.buffered.end(bufferedLength - 1)) /
          this.audioEl.duration
      )
    },
    timeUpdateCb(event) {
      if (this.isTouching) {
        return
      }
      this.currentTime = event.target.currentTime
    },
    setCurTime(event) {
      this.isTouching = true
      if (!this.progressBarRect) {
        this.progressBarRect = this.$refs.progressBar.getBoundingClientRect()
      }
      let clientX = event.touches[0].clientX
      this.currentTime = this.calcCurTime(clientX, this.progressBarRect.left, 0)
      this.touchStartX = clientX
      window.addEventListener('touchmove', this.setCurTimeOnMove)
      window.addEventListener('touchend', this.touchEndCb)
    },
    setCurTimeOnMove(event) {
      let clientX = event.touches[0].clientX
      this.currentTime = this.calcCurTime(clientX, this.touchStartX, 1)
      this.touchStartX = clientX
    },
    touchEndCb() {
      this.isTouching = false
      this.audioEl.currentTime = this.currentTime
      window.removeEventListener('touchmove', this.setCurTimeOnMove)
      window.removeEventListener('touchend', this.touchEndCb)
    },
    calcCurTime(end, start, type) {
      let offsetX = end - start
      let percent = offsetX / this.progressBarRect.width
      let currentTime
      switch (type) {
        case 0:
          currentTime = this.audioEl.duration * percent
          break
        case 1:
          currentTime = this.currentTime + this.audioEl.duration * percent
          break
      }
      if (currentTime < 0) {
        currentTime = 0
      } else if (currentTime > this.audioEl.duration) {
        currentTime = this.audioEl.duration
      }
      return currentTime
    }
  }
}
</script>
<style lang="less" scoped>
@import (reference) '../../assets/css/constant.less';
.player_progress {
  font-size: @font_size_mini;
  padding: 16px @padding_width;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: @white-2;
}
.player_progress__song_cur_time,
.player_progress__song_duration {
  flex: 0 0 auto;
}
.player_progress__progress_bar {
  flex: 1 0 auto;
  height: 4px;
  margin: 0 10px;
  background-color: @black-2;
  position: relative;
}
.player_progress__progress_bar_pointer {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(-50%, -50%);
  background: @theme;
  height: 13px;
  width: 13px;
  border-radius: 50%;
}
</style>
