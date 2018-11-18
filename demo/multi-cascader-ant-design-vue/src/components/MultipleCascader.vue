<template>
  <div class="multi_cascader">
    <a-cascader
      size="large"
      class="multi_cascader__cascader"
      :popupVisible="cascaderPopupVisible"
      :popupClassName="'multi_cascader__cascader_popup'+timestamp"
      changeOnSelect
      expandTrigger="hover"
      :options="cascaderOptions"
      :fieldNames="{ label: 'label', value: 'id', children: 'children' }"
      v-model="cascaderValues"
      ref="cascader"
      :showSearch="{cascaderFilter}"
      @change="cascaderChange"
    ></a-cascader>
    <a-select
      size="large"
      class="multi_cascader__select"
      dropdownClassName="hide"
      mode="multiple"
      :value="selectValues"
      allowClear
      placeholder="Please select"
      :options="selectOptions"
      ref="select"
      @focus="selectFocus"
      @blur="selectBlur"
      @deselect="deleteOption"
      @change="selectChange"
      @search="selectSearch"
      @input.native="searchKeyword=arguments[0].target.value"
    ></a-select>
  </div>
</template>

<script>
export default {
  name: 'MultipleCascader',
  data: function() {
    return {
      timestamp: Date.now(),
      searchKeyword: '',
      selectOptions: [],
      selectValues: [],
      cascaderPopupVisible: false,
      cascaderValues: [],
      cascaderOptions: [
        {
          id: '1',
          value: '1',
          label: '1',
          children: [
            { id: '1.1', value: '1.1', label: '1-1' },
            {
              id: '1.2',
              value: '1.2',
              label: '1-2',
              children: [
                { id: '1.21', value: '1.21', label: '1-2-1' },
                { id: '1.22', value: '1.22', label: '1-2-2' }
              ]
            }
          ]
        },
        { id: '2', value: '2', label: '2' }
      ]
    }
  },
  mounted() {
    document.addEventListener('click', this.hideCascaderPopup, true)
  },
  destroyed() {
    document.removeEventListener('click', this.hideCascaderPopup, true)
  },
  methods: {
    getCascaderSearchInput() {
      return this.$refs.cascader.$el.querySelector('input')
    },
    setCascaderSearchInput(value = this.searchKeyword) {
      let cascaderSearchInput = this.getCascaderSearchInput()
      cascaderSearchInput.value = value
      cascaderSearchInput.dispatchEvent(new Event('input'))
    },
    getSelectSearchInput() {
      return this.$refs.select.$el.querySelector('input')
    },
    setSelectSearchInput(value = this.searchKeyword) {
      let selectSearchInput = this.getSelectSearchInput()
      selectSearchInput.value = value
      selectSearchInput.dispatchEvent(new Event('input'))
    },
    cascaderChange(values, options) {
      // you may have different logic with the selected option, here I just want the last one.
      let targetValue = values.slice(-1).pop()
      let targetOption = options.slice(-1).pop()
      let selectedValIndex = this.selectValues.indexOf(targetValue)
      if (selectedValIndex >= 0) {
        this.selectValues.splice(selectedValIndex, 1)
        this.selectOptions.splice(selectedValIndex, 1)
      } else {
        this.selectValues.push(targetValue)
        this.selectOptions.push(targetOption)
      }
      // this.selectSearch(this.searchKeyword)
      if (this.searchKeyword !== '') {
        this.setCascaderSearchInput(this.searchKeyword)
      }
    },
    deleteOption(value) {
      let selectedValIndex = this.selectValues.indexOf(value)
      this.cascaderChange([value], [this.selectOptions[selectedValIndex]])
    },
    selectFocus() {
      this.cascaderPopupVisible = true
    },
    selectBlur() {
      this.setSelectSearchInput(this.searchKeyword)
    },
    selectChange(values, vNodes) {
      // if you clear the last one or clear all, data will clear.
      // todo find the difference between clear last one and clear all
      if (values.length === 0) {
        this.selectValues = []
        this.selectOptions = []
        this.searchKeyword = ''
        this.setSelectSearchInput()
        this.setCascaderSearchInput()
      }
    },
    selectSearch(keyword) {
      let cascaderSearchInput = this.getCascaderSearchInput()
      if (cascaderSearchInput) {
        cascaderSearchInput.value = keyword
        cascaderSearchInput.dispatchEvent(new Event('input'))
      }
    },
    cascaderFilter(inputValue, path) {
      return path.some(
        option =>
          option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
      )
    },
    hideCascaderPopup(event) {
      let cascaderPopup = document.querySelector(
        '.multi_cascader__cascader_popup' + this.timestamp
      )
      let isClickCascaderPopup =
        cascaderPopup && cascaderPopup.contains(event.target)
      let selectEl = this.$refs.select.$el
      let isClickSelect = selectEl && selectEl.contains(event.target)
      if (isClickCascaderPopup || isClickSelect) {
        return
      }
      this.cascaderPopupVisible = false
    }
  }
}
</script>


<style scoped>
.multi_cascader {
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.multi_cascader__select {
  width: 50%;
  margin-top: 0;
  margin-bottom: auto;
  transform: translate(0, -100%);
}
.multi_cascader__cascader {
  width: 50%;
  margin-top: auto;
  margin-bottom: 0;
  opacity: 0;
}
</style>

<style>
/* global style*/
.hide {
  display: none;
}
</style>
