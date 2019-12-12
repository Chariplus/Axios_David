<template>
    <el-row class="row-margin">
    <el-col>
    <el-card class="card-box">
        <h3 class="card-title">Buscar perdidos</h3>
        <div class="card-wrapper">
        <AppInput :inputText="inputValue" @inputText="onInputValueChange"></AppInput>
        <AppButton @updateSearch="saveSearch"></AppButton>
    </div>
    </el-card>
    </el-col>
    </el-row>
</template>

<script>
import AppInput from "../alpha/AppInput";
import AppButton from "../alpha/AppButton";

export default {
  name: "AppSearch",
  components: {
    AppInput,
    AppButton
  },
  data() {
    return {
      inputValue: "Search..."
    };
  },
  methods: {
    onInputValueChange(e) {
      this.inputValue = e;
    },
    saveSearch(event) {
      console.log(event);
      this.$emit('sendFilterData', this.inputValue);
    },
  }
};
</script>

<style>
.card-wrapper{
    display: flex;
}

.card-box{
    padding: 4%;
    background-color: #efefef;
    box-shadow: none !important;
    border: 1px solid #dfdfdf;
}

.card-title{
    margin-bottom: 20px;
}
</style>