<template>
  <el-table
    :data="tableData"
    style="width: 100%;"
    height="100%"
    :cell-style="cellStyle"
    :row-class-name="tableRowClassName"
    :header-cell-style="{
      color: 'rgba(255,255,255,.6)',
      height: '0.455rem',
      padding: '0'
    }"
    ref="table"
  >
    <!-- :row-style="{ height: '0' }"
    :cell-style="{ padding: '0' }" -->

    <el-table-column
      prop="time"
      label="时间"
      fixed
      width="100"
    ></el-table-column>
    <el-table-column prop="severity" label="等级" width="80"> </el-table-column>
    <el-table-column prop="groupname,hostname,name" label="内容">
      <template slot-scope="scope">
        {{ scope.row.groupname }} {{ scope.row.hostname }} {{ scope.row.name }}
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { color } from 'echarts/lib/export'

export default {
  name: 'alert',
  data() {
    return {
      tableData: [],
      flag: null,
      length: 0,
      height: 0
    }
  },
  methods: {
    tableRowClassName({ row, column, rowIndex, columnIndex }) {
      if (rowIndex % 2 != 0) {
        return 'test'
      }
    },
    cellStyle({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 1) {
        if (row.severity === '1') {
          return {
            color: 'rgb(229, 115, 115)',
            padding: '0px',
            background: 'revert'
          }
        } else if (row.severity === '2') {
          return {
            color: ' rgb(255, 183, 77)',
            padding: '0px',
            background: 'revert'
          }
        } else if (row.severity === '3') {
          return {
            color: 'rgb(255, 241, 118)',
            padding: '0px',
            background: 'revert'
          }
        } else if (row.severity === '4') {
          return {
            color: '#64b5f6 ',
            padding: '0px',
            background: 'revert'
          }
        } else if (row.severity === '5') {
          return {
            color: '#badbf5',
            padding: '0px',
            background: 'revert'
          }
        } else if (!row.severity) {
          return {
            color: 'rgb(157, 229, 115)',
            padding: '0px',
            background: 'revert'
          }
        }
      } else {
        return {
          color: 'white',
          padding: '0px',
          background: 'revert'
        }
      }
    },

    headerStyle() {
      return {
        height: '0.46rem',
        padding: '0'
      }
    },
    getData() {
      this.axios.get('http://localhost:9001/jk/monitor').then(data => {
        this.tableData = data.data.RECORDS.reverse()
        this.length = this.tableData.length
        var height = document.getElementsByClassName('el-table__cell').style
        // console.log(height)
        
      })
    },
    infinitScroll() {
      const that = this
      // 拿到表格挂载后的真实DOM
      const table = this.$refs.table
      // 拿到表格中承载数据的div元素
      const divData = table.bodyWrapper
      divData.onmouseover = function() {
        clearInterval(that.flag)
      } //鼠标移入，停止滚动
      divData.onmouseout = function() {
        start()
      } //鼠标移出，继续滚动

      // 拿到元素后，对元素进行定时增加距离顶部距离，实现滚动效果(此配置为每1秒移动20像素)
      function start() {
        if (that.flag) {
          that.flag = null
        }
        // 数据少于表格高度停止滚动
        if (divData.clientHeight >= divData.scrollHeight) {
          return
        }
        that.flag = setInterval(() => {
          // console.log(this.flag)
          // 元素自增距离顶部1像素
          divData.scrollTop += 46
          // 判断元素是否滚动到底部(可视高度+距离顶部=整个高度)
          // console.log(divData.clientHeight)
          // console.log(divData.clientHeight + divData.scrollTop)
          // console.log(divData.scrollHeight)
          if (
            divData.clientHeight + divData.scrollTop == divData.scrollHeight ||
            divData.scrollHeight - (divData.clientHeight + divData.scrollTop) <
              1
          )
            // 重置table距离顶部距离
            divData.scrollTop = 0
        }, 2000)
      }
      start()
    }
  },
  mounted() {
    this.getData()
    setTimeout(() => {
      // const table = this.$refs.table
      // // 拿到表格中承载数据的div元素
      // const divData = table.bodyWrapper
      // this.height = (divData.scrollHeight - divData.clientHeight) / this.length
      // console.log(this.height);
      this.infinitScroll()
 
    }, 200)
  }
}
</script>

<style scoped>
.el-table /deep/ .test td {
  background-color: rgba(0, 0, 0, 0.2) !important;
}

.el-table /deep/ td,
.el-table /deep/ tr,
.el-table /deep/ th {
  text-align: center;
  background-color: transparent;
  border-bottom: 0px;
}
.el-table {
  overflow: auto;
  background-color: transparent;
}

.el-table::before {
  height: 0px;
}

.el-table /deep/ .el-table__fixed::before {
  height: 0px;
}
.el-table /deep/ td.el-table__cell,
.el-table /deep/ th.el-table__cell.is-leaf {
  border-bottom: 0px;
}

.el-table /deep/ .el-table__body-wrapper::-webkit-scrollbar {
  /*width: 0;宽度为0隐藏*/
  width: 0px;
}
</style>
