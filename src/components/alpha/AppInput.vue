<template>
        <el-input placeholder="Please input" v-model="inputValue" @input="onChange" class="input"></el-input>
</template>

<script>
export default {
    name: 'AppInput',
    data(){
       return{
            inputValue: this.inputText
        }
    },
   props: {
       inputText: {
           type: String
       }
   },
   methods:{
     onChange(evt){
            this.$emit("inputText", evt);
     }
   }
}
</script>