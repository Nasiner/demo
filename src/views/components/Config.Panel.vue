<template>
  <div class="panel-comp">
    <div class="name">Config.Panel</div>
    <component :is="curComp" :config="config"></component>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loadList: [],
      curComp: ''
    }
  },
  props: ['active', 'config'],
  watch: {
    active (newValue, oldValue) {
      if (newValue && newValue !== oldValue) {
        this.curComp = require(`./base/${newValue}/index.vue`).default
      }
    }
  }
}
</script>
