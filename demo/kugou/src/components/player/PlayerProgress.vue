<template>
  <div class="player_progress">
    <div class="player_progress__song_cur_time">{{milliToMin(currentTime)}}</div>
    <div
      class="player_progress__progress_bar"
      :style="`background-image:linear-gradient(to right, #2ca2f9 ${currentProgress}%, transparent ${currentProgress}%),linear-gradient(to right, #6c6b70 ${loadProgress}%, transparent ${loadProgress}%)`"
    >
      <div class="player_progress__progress_bar_pointer" :style="`left:${currentProgress}%;`"></div>
    </div>
    <div class="player_progress__song_duration">{{milliToMin(audioEl.duration*1000)}}</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import mixin from '../../mixins/index.js'
export default {
  name: 'PlayerProgress',
  mixins: [mixin],
  data() {
    return {
      loadProgress: 0
    }
  },
  props: {
    currentTime: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  computed: {
    ...mapState('player', ['song', 'audioEl']),
    currentProgress() {
      return Math.floor((100 * this.currentTime) / this.song.timelength)
    }
  },
  mounted() {
    this.audioEl.addEventListener('progress', this.progressCb)
  },
  destroyed() {
    this.audioEl.removeEventListener('progress', this.progressCb)
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
    }
  }
}
</script>
<style lang="less" scoped>
@import (reference) '../../assets/css/constant.less';
.player_progress {
  padding: 16px 13px;
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
