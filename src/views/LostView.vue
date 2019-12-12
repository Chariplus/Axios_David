<template>
  <div>
    <el-row :gutter="20" class="row-margin">
      <AppSearch @sendFilterData="test"></AppSearch>      
      <AppList :listaFiltrada="list"></AppList>
      
   </el-row>
  </div>
</template>

<script>
import AppList from '../components/alpha/AppList';
import AppSearch from "../components/alpha/AppSearch";
import AppCardVue from '../components/Bravo/AppCard.vue';

export default {
  name: "LostView",
  components: {
    AppList,
    AppSearch
  },
  data(){
    return {
      list: [{
            imgSrc: "https://placekitten.com/200/300",
            title: "Pepe",
            desc: "Desc",
            likes: 609,
            comments: 120
        }, 
        {
            imgSrc: "https://placekitten.com/200/300",
            title: "Pedro",
            desc: "Desc",
            likes: 609,
            comments: 120
        },
          {
            imgSrc: "https://placekitten.com/200/300",
            title: "Manolo",
            desc: "Desc",
            likes: 609,
            comments: 120
        }
      ],
      filterName: String
    }
  },
  methods: {
    test(input){
      this.filterName = input
    }
  },
  computed: {
    listafiltrada: function(filterName){
      console.log(this.filterName);
       return this.list.filter((item) => this.item.title.includes(this.filterName));
     }
   /* listaFiltrada: function (filterName) {
      test = list.map(item => this.item.title == filterName);
      console.log(filterName);
      return test;
    }*/
  }
};
</script>

<style>
.row-margin{
  margin: 0% 10%;
}
</style>