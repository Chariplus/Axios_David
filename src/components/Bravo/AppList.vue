<template>
<div>
  <h1 class="main-title">
    {{'Encontrados'}}
  </h1>
    <ul>
        <li v-for="item in animalDetails" :key="item.title">
          <app-card :animalDetail="item"/>
        </li>
    </ul>
</div>
</template>

<script>
import AppCard from './AppCard.vue';

export default {
  name: 'AppList',
  components: {
    AppCard
  },
  data(){
    return {
      animalDetails: [
        {
          image: 'https://images.unsplash.com/photo-1567268377583-d1aaf9ccfc22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          name: 'Gatito adorable 1111',
          description: 'Este gatito adorable ha sido encontrado',
          likes: '67',
          mssgs: '12',
          type: 'gato'
        },
        {
          image: 'https://images.unsplash.com/photo-1500309725725-09d5f645646a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          name: 'Perrito 222',
          description: 'Un perrito ',
          likes: '6',
          mssgs: '20',
          type: 'perro'
        },
        {
          image: 'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80',
          name: 'Gatito adorable 333333',
          description: 'Este gatito adorable ha sido encontrado también',
          likes: '1',
          mssgs: '5',
          type: 'gato'
        },
        {
          image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          name: 'Gatito adorable 4444444',
          description: 'Este gatito adorable ha sido encontrado también',
          likes: '22',
          type: 'gato'
        },
        {
          image: 'https://images.unsplash.com/photo-1516799914734-34e86b7addcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1108&q=80',
          name: 'Otro perrito piloto',
          description: 'Perro perdido en Toledo, responde al nombre de....',
          likes: '22',
          mssgs: '20',
          type: 'perro'
        },
        {
          image: 'https://images.unsplash.com/photo-1452857297128-d9c29adba80b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
          name: 'Conejito',
          description: 'Perdido conejito en el parque del Capricho....',
          likes: '22',
          mssgs: '20',
          type: 'otro'
        },
        {
          image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80',
          name: 'Hamster',
          description: 'Dónde andará??',
          likes: '22',
          mssgs: '20',
          type: 'otro'
        }
        ]
    }
  },
  // computed(){

  // }

}
</script>

<style scoped>

.main-title{
  color: #409EFF;
  font-size: 	20px;

}
.card-container {
  display: flex;
  flex-direction: column;
}
.img-container{
  width: 200px;
}

li{
  list-style-type: none;
  padding: 20px;
  float: left;
  margin: 0px;
}
.main-title{
  color: #409EFF;
  font-size: 	20px;
  text-align: center;
}

</style>
