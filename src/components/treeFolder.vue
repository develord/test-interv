<template>
  <template v-if="loader">
    loading ...
  </template>
  <template v-else>
      <userCard  v-if="!folder.children || level === 1"  :level="level"   :data="folder" />
			<treeContents :children="folder" :level="level + 1"></treeContents>
  </template>
</template>

<script>

export default {
  name: 'treeFolder',
  props: {
    folder: {
      type: Object
    },
    level: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      loader: true
    }
  },
  watch: {
    folder: {
      immediate: true,
      handler(newVal) {
       if (newVal) {
         this.loader = false
       } 
      }
    }
  }
}
</script>

