<template>
  <div class="hello">
    <el-select class="select-name-comp" v-model="compName" placeholder="请选择" @change="changeName">
      <el-option
        v-for="item in compList"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <div class="box">
      <panel :active="curComp" :config="configs"/>
      <edit :configs="configs" :fileName="compName"/>
      <list :configs="configs"/>
    </div>
  </div>
</template>
<script>
import panel from './components/Config.Panel.vue'
import edit from './components/Config.Edit.vue'
import list from './components/Config.List.vue'
import compList from './compConfig.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      compList,
      curComp: '',
      compName: '',
      configs: {},
      attr: {}
    }
  },
  components: {panel, edit, list},
  methods: {
    async changeName (event) {
      this.compName = event
      const { attr = {} } = require(`./components/base/${event}/config.js`)
      this.configs = attr
      this.curComp = event
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.box{
  display: flex
}
.edit-comp, .list-comp, .panel-comp {
  width: 30%;
  border: 1px solid;
  margin: 0 5px;
  padding: 5px;
}
.select-name-comp{
  padding-bottom: 20px;
}
</style>
