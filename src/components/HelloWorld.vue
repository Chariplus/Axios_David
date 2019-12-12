<template>
  <!--<div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="enviarEvento" >Enviar</button>
    <ul>
      <li v-for="(item, index) in listafiltrada" :key="`todo-${index}`">
        <span v-if="!item.hidden">
          {{item.value}} {{ item.hidden }}
        </span>
      </li>
    </ul>
    {{ lista }}
  </div>-->
  <app-card :data-value="pepe"></app-card>
</template>

<script>
import AppCard from './Bravo/AppCard.vue';

export default {
  name: 'HelloWorld',
  data() {
    return {
      lista: [
        {
          value: 'elemento 1', hidden: true,
        }, {
          value: 'elemento 2', hidden: false,
        }, {
          value: 'elemento 3', hidden: false,
        }],
    };
  },
  components: {
    AppCard,
  },
  props: {
    msg: {
      type: String,
      required: true,
      default: 'tipo',
    },
  },
  methods: {
    enviarEvento() {
      this.$emit('emitEvent', { value: '', type: '' });
    },
  },
  computed: {
    listafiltrada() {
      return this.lista.filter(item => item.hidden);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
