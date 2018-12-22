<template>
  <main class="todo-list">
    <ToDoInput :isAllChecked="isAllChecked" @completeAllItems="completeAllItems" @addItem="addItem" />
    <ToDoData :items="displayedItems[filterMode]" @modifyItem='modifyItem' @completeItem="completeItem" @removeItem="removeItem" />
    <ToDoResult :items="displayedItems[filterMode]" @filterItem="filterItem" @clearCompletedItems="clearCompletedItems" />
  </main>
</template>

<script>
import ToDoInput from './ToDoInput'
import ToDoData from './ToDoData'
import ToDoResult from './ToDoResult'
let count = 0
let initItems = [
  {
    text: 'item0',
    isCompleted: false,
    id: 'todoItem' + String(count++)
  }
]
function $ (selector) {
  return Array.from(document.querySelectorAll(selector))
}
export default {
  name: 'ToDoList',
  components: {
    ToDoInput,
    ToDoData,
    ToDoResult
  },
  data () {
    return {
      isAllChecked: false,
      items:
        localStorage && localStorage.getItem('todo-mvc')
          ? JSON.parse(localStorage.getItem('todo-mvc'))
          : initItems,
      filterMode: 'showAll'
    }
  },
  created () {
    this.recountItems()
    this.countStartFromHistory()
  },
  mounted () {
    this.resizeAppHeight()
    this.resizeTodoListHeight()
  },
  watch: {
    items (oldItems, newItems) {
      localStorage.setItem('todo-mvc', JSON.stringify(newItems))
    }
  },
  computed: {
    displayedItems: function () {
      return {
        showAll: this.items,
        showActive: this.items.filter(o => !o.isCompleted),
        showCompleted: this.items.filter(o => o.isCompleted)
      }
    }
  },
  methods: {
    resizeAppHeight () {
      $('#app')[0].style.height = $('html')[0].clientHeight + 'px'
    },
    resizeTodoListHeight () {
      $('.todo-list')[0].style.height = getComputedStyle(
        $('.todo-list')[0]
      ).height
    },
    recountItems () {
      this.items.forEach((item, index) => {
        item.id = 'todoItem' + index
      })
    },
    countStartFromHistory () {
      count = this.items.length
    },
    getIndexById (itemId) {
      return this.items.findIndex(item => item.id === itemId)
    },
    addItem (event, value) {
      this.items.push({
        text: value,
        isCompleted: false,
        id: 'todoItem' + String(count++)
      })
    },
    completeAllItems (isAllChecked) {
      this.isAllChecked = isAllChecked
      if (this.items.length === 0) {
        // can't change back right now
        this.$nextTick(() => {
          this.isAllChecked = false
        })
      } else {
        this.items.forEach(o => (o.isCompleted = isAllChecked))
      }
    },
    modifyItem (itemId, value) {
      this.items[this.getIndexById(itemId)].text = value
    },
    completeItem (itemId, isCompleted) {
      this.items[this.getIndexById(itemId)].isCompleted = isCompleted
    },
    removeItem (itemId) {
      this.items.splice(this.getIndexById(itemId), 1)
    },
    filterItem (filterMode) {
      this.filterMode = filterMode
    },
    clearCompletedItems () {
      let find = obj => obj.isCompleted === true
      while (this.items.find(find)) {
        this.items.splice(this.items.findIndex(find), 1)
      }
      this.isAllChecked = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-list {
  overflow: hidden;
  flex: 1 1 auto;

  box-sizing: border-box;
  width: 550px;
}
@media screen and (max-width: 600px) {
  .todo-list {
    width: 90%;
    margin-right: 5%;
    margin-left: 5%;
  }
}

</style>
