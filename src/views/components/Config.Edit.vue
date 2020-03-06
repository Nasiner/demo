<template>
  <el-form class="edit-comp" method="post">
    <div class="name">Config.Edit</div>
    <template v-for="(config, index) in Object.keys(configs)">
        <el-form-item :key="index" :label="config">
          <el-input v-model="configs[config]" @change="onchange"></el-input>
        </el-form-item>
    </template>
    <el-button @click="onchange" v-if="fileName">保存修改</el-button>
  </el-form>
</template>
<script>
import axios from 'axios'
export default {
  props: {
    configs: {
      default: () => ({}),
      type: Object
    },
    fileName: {
      default: '',
      type: String
    }
  },
  methods: {
    onchange () {
      const params = {
        configs: this.configs,
        fileName: this.fileName
      }
      axios.post('http://localhost:3000/api/editConfig', params).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>
