<template>
  <el-time-select
    v-model="value"
    :picker-options="{
      ...config,
      step: '00:30'
      }"
    placeholder="选择时间">
</el-time-select>
</template>
<script>
import config from './config.js'
export default {
  data () {
    return {
      value: ''
    }
  },
  props: {
    config: {
      default: () => (config),
      type: Object
    }
  }
}
</script>
