<template>
  <el-button icon="el-icon-search" @click="search"></el-button>
</template>

<script>
export default {
    name: "AppButton",
    methods: {
        search(e){
            this.$emit('updateSearch', e)
        }
    }
}
</script>

<style>

</style>