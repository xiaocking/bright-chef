<template>
  <div class="BodyTemperature overflowCss">
    <div class="body_header clearfix">
      <div class="fl">
        <el-form :model="searchForm" ref="searchForm" inline label-width="80px">
          <el-form-item label="姓名" prop="searchName">
            <el-input v-model="searchForm.searchName"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="doSearch">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="body_content">
      <el-table :data="tableData" tooltip-effect="dark" style="width: 100%">
        <el-table-column prop="userName" label="姓名" show-overflow-tooltip>
          <template slot-scope="scope">
            <span :class="{ warning: scope.row.temperature >= '37.3' }">{{
              scope.row.userName
            }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="temperature"
          label="监测度数"
          show-overflow-tooltip
          ><template slot-scope="scope">
            <span :class="{ warning: scope.row.temperature >= '37.3' }">{{
              scope.row.temperature
            }}℃</span>
          </template></el-table-column
        >
        <el-table-column
          prop="measureTime"
          label="监测时间"
          show-overflow-tooltip
          ><template slot-scope="scope">
            <span :class="{ warning: scope.row.temperature >= '37.3' }">{{
              scope.row.measureTime
            }}</span>
          </template></el-table-column
        >
        <el-table-column prop="remark" label="备注" show-overflow-tooltip
          ><template slot-scope="scope">
            <span :class="{ warning: scope.row.temperature >= '37.3' }">{{
              scope.row.remark
            }}</span>
          </template></el-table-column
        >
      </el-table>
    </div>
    <div class="body_footer clearfix">
      <div class="fr">
        <el-pagination
          background
          layout="total, prev, pager, next"
          :page-size="size"
          :current-page.sync="page"
          @current-change="pageChange"
          :total="total"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import axios from "axios";

@Component
export default class BodyTemperature extends Vue {
  private size = 100;
  private page = 1;
  private total = 0;
  private tableData: any[] = [];
  private timer;
  private searchForm = {
    searchName: ""
  };

  private pageChange() {}
  private sizeChange() {}
  private doSearch() {}

  private getInfo() {
    this.tableData = [
      {
        userName: "小明",
        temperature: "36.4",
        measureTime: "2020-04-04 11:18:02",
        remark: "体温检测正常"
      },
      {
        userName: "小红",
        temperature: "37.4",
        measureTime: "2020-04-04 11:14:34",
        remark: "体温检测异常"
      },
      {
        userName: "小张",
        temperature: "36.6",
        measureTime: "2020-04-04 10:34:37",
        remark: "体温检测正常"
      },
      {
        userName: "小芳",
        temperature: "36.5",
        measureTime: "2020-04-04 10:24:08",
        remark: "体温检测正常"
      }
    ];
    this.total = 4;
  }
  created() {
    this.getInfo();
  }
  mounted() {
    this.timer = setInterval(this.getInfo, 5000);
  }
  beforeDestroy() {
    clearInterval(this.timer);
  }
}
</script>

<style lang="scss" scoped>
.BodyTemperature {
  height: 100%;
  padding: 15px;
  background: #fff;
  .warning {
    color: $red-color;
  }
  .body_footer {
    margin-top: 15px;
  }
}
</style>