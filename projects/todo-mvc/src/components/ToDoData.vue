<template>
  <ul class="items" id="todo-items">
    <li v-for="(item) in items" :key="item.id" class="items-list">
      <input type="checkbox" class="list-complete-checkbox hidden" :id="item.id" @change="completeItem(arguments[0],item.id)" :checked="item.isCompleted" />
      <label :for="item.id" class="list-complete-label"></label>
      <span class='list-text'
      @keydown.enter.esc="inactiveItem(arguments[0],item.id)"
      @blur="inactiveItem(arguments[0],item.id)"
      @click="activeItem(arguments[0])">
        {{item.text}}
      </span>
      <button class='list-delete' @click="removeItem(arguments[0],item.id)">X</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ToDoData',
  props: ['items'],
  data () {
    return {
      prevClickTime: 0
    }
  },
  methods: {
    activeItem (event) {
      if (Date.now() - this.prevClickTime < 800) {
        event.target.setAttribute('contentEditable', true)
        event.target.focus()
      }
      this.prevClickTime = Date.now()
    },
    test (event) {
      console.log(event.type + Math.ceil(Math.random() * 1000))
    },
    inactiveItem (event, itemId) {
      event.target.textContent = event.target.textContent.trim()
      this.$emit('modifyItem', itemId, event.target.textContent)
      event.target.removeAttribute('contentEditable')
    },
    completeItem (event, itemId) {
      this.$emit('completeItem', itemId, event.target.checked)
    },
    removeItem (event, itemId) {
      this.$emit('removeItem', itemId)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.items {
  overflow-y: auto;
  flex-flow: column;

  box-sizing: border-box;
  width: 100%;
  max-height: calc(100% - 110px);
  margin: 0 auto;

  border: 1px solid #ededed;
  border-top: none;
  border-bottom: none;
  background: #fff;
}
.items-list {
  position: relative;

  display: flex;
  overflow: hidden;
  flex: 0 0 auto;

  width: 100%;
  height: 60px;

  text-align: left;

  border-bottom: 1px solid #ededed;
}
.list-complete-label {
  flex: 0 0 auto;

  box-sizing: border-box;
  width: 25px;
  height: 25px;
  margin: auto 10px auto;

  cursor: pointer;

  border: 1px solid #e6e6e6;
  border-radius: 50%;
}
.list-complete-checkbox:checked + .list-complete-label {
  border: none;
  background: url(../assets/images/tick.png) 0 0 / cover no-repeat;
}
.list-text {
  flex: 1 1 auto;

  box-sizing: border-box;
  height: 100%;

  transition: color 0.5s ease;
  text-align: left;

  border: none;

  font-size: 24px;
  line-height: 60px;
}
.list-text[contentEditable] {
  margin-right: 10px;

  border: 1px solid #999;
  outline: none;
  background: #fff;
  box-shadow: inset rgba(224, 216, 216, 0.966) 1px 1px 1px 1px;
}
.list-complete-checkbox:checked + .list-complete-label + .list-text {
  text-decoration: line-through;

  color: #d9d9d9;
}
.list-delete {
  flex: 0 0 auto;

  height: 65px;
  margin-right: 17px;

  cursor: pointer;

  color: transparent;
  border: none;
  background: transparent;

  font-size: 20px;
}
.list-text:hover + .list-delete {
  color: #cc9a9a;
}
.list-delete:hover {
  color: #af5b5e;
}
</style>
