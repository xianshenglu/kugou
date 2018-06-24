<template>
  <section class="box">
    <span class="box-result">{{items.length}} left</span>
    <section class="box-filter">
      <input type="radio" id="showAll" name="filterMode" class="hidden" checked="checked">
      <label for="showAll" class="box-filter-label" @click="filterItem">All</label>
      <input type="radio" id="showActive" name="filterMode" class="hidden">
      <label for="showActive" class="box-filter-label" @click="filterItem">Active</label>
      <input type="radio" id="showCompleted" name="filterMode" class="hidden">
      <label for="showCompleted" class="box-filter-label" @click="filterItem">Done</label>
    </section>
    <button :class="items.filter(o => o.isCompleted).length?'box-clear show':'box-clear'" @click="clearCompletedItems">Clear done</button>
  </section>
</template>

<script>
export default {
  name: 'ToDoResult',
  props: ['items', 'displayedItem'],
  methods: {
    filterItem (event) {
      this.$emit('filterItem', event.target.getAttribute('for'))
    },
    clearCompletedItems () {
      this.$emit('clearCompletedItems')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  position: relative;

  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 50px;
  margin: 0 auto;

  text-align: left;

  color: #777;
  border: 1px solid #ededed;
  background: #fff;

  font-size: 12px;
}
.box:before {
  content: "";
  position: absolute;
  z-index: 0;
  right: 0;
  bottom: 0;

  display: block;

  width: 100%;
  height: 50px;

  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
  0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
  0 17px 2px -6px rgba(0, 0, 0, 0.2);
}
.box > * {
  box-sizing: border-box;
}
.box-result {
  height: 100%;
  padding-left: 15px;

  text-align: left;

  line-height: 50px;
}
.box-filter {
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 100%;

  text-align: center;
}

.box-filter-label {
  position: relative;

  margin-right: 5px;
  padding: 5px;

  cursor: pointer;

  border: 1px solid transparent;
  border-radius: 5px;
}
.box-filter-label:last-child {
  margin-right: 0;
}
.box-filter-label:hover {
  border: 1px solid rgba(175, 47, 47, 0.2);
}
input:checked + label {
  border: 1px solid rgba(80, 20, 20, 0.4);
}
.box-clear {
  position: relative;

  visibility: hidden;

  height: 100%;
  padding-right: 15px;

  cursor: pointer;
  text-align: right;

  color: inherit;
}
.box-clear.show {
  visibility: visible;
}

</style>
