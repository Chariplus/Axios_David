<template>
  <section>
    <app-search/>
    <app-list />
  </section>
</template>

<script>
import AppList from '../components/Bravo/AppList.vue';
import AppSearch from '../components/Bravo/AppSearch.vue';

export default {
    name: 'FoundView',
    components: {
        AppList, AppSearch,
    },
}
</script>

<style>

</style>
