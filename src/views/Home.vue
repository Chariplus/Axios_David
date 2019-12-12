<template>
  <div class="home">
    <div> ENTRADA!! </div>
    <button @click="llamada()">llamada</button>
    <p>{{ responseRetry }}</p>
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
      str: 'demo',
      responseRetry: []
      }
  },
  methods: {
    llamada: function() {
      User_results.initMaterial().then((a) => {
        //debugger
        console.log('response ok');
        this.responseRetry.push('success');
      }).catch((e) => {
        console.log('ha fallado')
        this.responseRetry.push('error');
      });
    }
    /*recibirEvento({ value, type }) {
      console.log(value, type);

    },*/
  },
};
</script>
