<template>
  <section class="box">
    <input type="checkbox" class="box-checkbox hidden" id="completeAll" :checked="isAllChecked" @change="completeAllItems" />
    <label for="completeAll" class="box-label"></label>
    <input type="text" class="box-input" :placeholder="placeholder" @keydown.enter="addItem" />
  </section>
</template>

<script>
export default {
  name: 'ToDoInput',
  props: ['isAllChecked'],
  data () {
    return {
      placeholder: 'What needs ?'
    }
  },
  methods: {
    completeAllItems (event) {
      this.$emit('completeAllItems', event.target.checked)
    },
    addItem (event) {
      if (event.target.value.trim() !== '') {
        this.$emit('addItem', event, event.target.value.trim())
      }
      event.target.value = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  display: flex;

  box-sizing: border-box;
  width: 100%;
  height: 60px;
  margin: 0 auto;

  border: 1px solid #ededed;
  background: #fff;

  font-size: 0;
}
.box-input {
  flex: 1 1 auto;

  box-sizing: border-box;
  height: 100%;

  font-size: 24px;
}
::-webkit-input-placeholder {
  color: #d9d9d9;

  font-style: italic;
}
.box-label {
  position: relative;

  flex: 0 0 auto;

  box-sizing: border-box;
  width: 45px;
  height: 65px;

  cursor: pointer;
  vertical-align: top;
}
.box-label:before,
.box-label:after {
  content: "";
  position: absolute;
  left: 10px;

  display: block;

  width: 0;
  height: 0;

  border: 10px solid transparent;
}
.box-label:before {
  top: 27px;

  border-top-color: #e6e6e6;
}
.box-label:after {
  top: 24px;

  border-top-color: #fff;
}
.box-label:hover:before {
  border-top-color: #bdb8b8;
}
.box-checkbox:checked + .box-label:before {
  border-top-color: #737373;
}

</style>
