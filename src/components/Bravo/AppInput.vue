<template>
  <el-input
    v-model="inputValue"
    :size="sizeInput"
    @input="sendInputValue"
    />
</template>

<script>
export default {
    data(){
        return{
        inputValue: this.textValue,
        }
    },
    props: {
        textValue: String,
        sizeInput: String,
    },
    methods: {
        sendInputValue() {
            console.log('input: '+ this.inputValue);
            this.$emit(this.inputValue);       
        } 
    },
}
</script>

<style>

</style>