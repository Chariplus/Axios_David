<template>
<div class="subheader">
  <h2 class="subheader-title">
    Buscar encontrados
  </h2>
  <div class="subheader-search-box">
    <app-input :textValue="serverText" :sizeInput="sizeSearch"/>
    <app-button/>
  </div >
 </div>
</template>

<script>
import AppButton from './AppButton.vue';
import AppInput from './AppInput.vue'

export default {
  name: 'AppSearch',
  components: {AppButton, AppInput},
  data(){
    return{
      serverText:'Search...',
      sizeSearch: "large",
    }
  },
methods: {
  }
};
</script>

<style lang="css" scoped>
.subheader{
  height: 50%;
  margin: 2% 10%;
  padding: 28px 26px;
  background-color:#EDEDED;
  color: #7F7F7F;
  text-align: left;
  font-size: 18px;
}
.subheader-title{
  margin-top: 5px;
}
.subheader-search-box{
  display: flex;
  justify-content: center;
}
</style>
// TODO: devolver query a lista para hacer loop filtrado
