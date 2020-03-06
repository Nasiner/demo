<template>
  <el-date-picker
    v-model="value"
    :type="config.type"
    :placeholder="config.placeholder"
  >
  </el-date-picker>
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
      default: () => ({...config}),
      type: Object
    }
  }
}
</script>
