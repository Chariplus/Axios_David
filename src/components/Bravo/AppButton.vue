<template>
    <!--el-button-- type="primary" icon="el-icon-search">Search</!--el-button-->
    <el-button icon="el-icon-search" type="primary" square @click="foundPeludos"></el-button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    
  },
  methods: {
    foundPeludos() {
        console.log(this.prueba);
        this.$emit(this.prueba);       
    } 
  },
  data() {
    return {
      prueba:'Esto es una prueba para el buscador...'
    };
  },
};
</script>
<style scoped>
.el-button{
  float: right;
  padding: 1rem;
  margin-right: 4rem;
}
</style> 