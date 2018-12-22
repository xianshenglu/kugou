<template>
  <section class="box">
    <table class="box-table">
      <thead>
        <tr>
          <th v-for="(th,index) in table.th" :key="index">
            <input type="radio" class="hidden" :id="generateId(index)" name="sortColu" :key="index">
            <label :for="generateId(index)" class="q desc" @click="sort(th)">
              {{th}}
            </label>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tr,index) in table.tr" :key="index" v-show="tr.isShow">
          <td v-for="(td,index) in tr.data" :key="index">{{td}}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: 'MyTable',
  props: ['table'],
  methods: {
    generateId (index) {
      return 'sortColu' + String(index)
    },
    sort (th) {
      let classList = event.target.classList
      classList.contains('asce')
        ? updateClsAndEmitEvent(this, classList, 'asce', 'desc', 'sort', th)
        : updateClsAndEmitEvent(this, classList, 'desc', 'asce', 'sort', th)
      function updateClsAndEmitEvent (
        thisArg,
        classList,
        oldCls,
        newCls,
        eventName,
        eventData
      ) {
        classList.remove(oldCls)
        classList.add(newCls)
        thisArg.$emit(eventName, eventData, newCls)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@inactiveColor: rgba(255, 255, 255, 0.66);
@activeColor: #ffffff;
@tdBackground: #f9f9f9;
@mainBackgound: #42b983;
@initialColor: #444444;
.box {
  color : @initialColor;
  font-size : 14px;

  user-select : none;
  .box-table {
    overflow : hidden;
    margin : 0 auto;
    width : 330px;
    border : 2px solid @mainBackgound;
    border-spacing : 2px;
    border-collapse : separate;
    border-radius : 5px;
    thead {
      th {
        background : @mainBackgound;
        color : @inactiveColor;
        text-align : center;
        label {
          display : block;
          box-sizing : border-box;
          padding : 10px 20px;
          width : 100%;
          height : 100%;
          cursor : pointer;
          &:after {
            position : relative;
            top : 3px;
            display : inline-block;
            margin-left : 8px;
            width : 0;
            height : 0;
            border : 5px solid transparent;
            border-top-color : @inactiveColor;
          }
          &.asce {
            &:after {
              top : -3px;
              border : 5px solid transparent;
              border-bottom-color : @inactiveColor;
            }
          }
          &.desc {
            &:after {
              border-top-color : @inactiveColor;
            }
          }
        }
        input:checked + label {
          color : @activeColor;
          &.asce {
            &:after {
              border-bottom-color : @activeColor;
            }
          }
          &.desc {
            &:after {
              border-top-color : @activeColor;
            }
          }
        }
      }
    }
    tbody {
      td {
        padding : 10px 20px;
        text-align : left;
      }
    }
    th ,
    td {
      box-sizing : border-box;
      width : 50%;
      background : @tdBackground;
    }
  }
}

</style>
