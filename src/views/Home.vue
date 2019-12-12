<template>
  <div class="home">
    <div> ENTRADA!! </div>
    <button @click="llamada()">llamada</button>
  </div>
</template>

<script>

/*import AppList from '../components/Bravo/AppList.vue';*/
import User_results from '../___services/ajax-service.js';

export default {
  name: 'home',
  components: {
   /* AppList,*/
  },
  data () {
    return {
      str: 'demo'
      }
  },
  methods: {
    llamada: function() {
      User_results.initMaterial().then(function(a){
        debugger
        console.log('response ok');
      }).catch(function(e) {
        console.log('ha fallado')
      });
    }
    /*recibirEvento({ value, type }) {
      console.log(value, type);

    },*/
  },
};
</script>
