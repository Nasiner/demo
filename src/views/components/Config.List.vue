<template>
  <el-form class="list-comp" label-position="right" label-width="80px">
    <div class="name">Config.List</div>
    <template v-for="(config, index) in Object.keys(configs)">
        <el-form-item :key="index" :label="config">
          {{configs[config]}}
        </el-form-item>
    </template>
  </el-form>
</template>
<script>
export default {
  props: {
    configs: {
      default: () => ({}),
      type: Object
    }
  }
}
</script>
