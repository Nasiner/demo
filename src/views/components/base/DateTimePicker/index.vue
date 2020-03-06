<template>
  <el-date-picker
      v-model="value"
      :type="config.type"
      :placeholder="config.placeholder"
      range-separator="至"
      >
    </el-date-picker>
</template>
<script>
import config from './config'
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
