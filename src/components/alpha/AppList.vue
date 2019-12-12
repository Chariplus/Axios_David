<template>
    <div>
        <el-row :gutter="20" style="margin: 0% 10%">
            <AppCard
                v-for="(card, index) in cardList" 
                :key="index"
                :src="card.imgSrc"
                :title="card.title"                
                :desc="card.desc"
                :likes="card.likes"
                :comments="card.comments">
            </AppCard>
        </el-row>
    </div>
</template>

<style>

</style>

<script>
import AppCard from './AppCard';

export default {
    props: {
        cardList: {
            type: Array,
            required: false,
        },
    },
    components: {
        AppCard
    }
}
</script> 

