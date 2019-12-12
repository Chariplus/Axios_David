<template>
  <el-card shadow="hover" no-gutters>
    <el-avatar shape="square" :size="350" fit="cover" :src="animalDetail.image" ></el-avatar>
    <!--img :src="animalDetail.image" class="image"-->
    <h3>{{ animalDetail.name }}</h3>
    <div>
      <div class="bottom clearfix">
         <p>{{ animalDetail.description }}</p>
          <i class="el-icon-star-on"> {{ animalDetail.likes }} </i>
          <i class="el-icon-zoom-in"> {{ animalDetail.mssgs }} </i>
          <el-button type="description" class="button">SHARE</el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'AppCard',
  props: {
    dataValue: String,
    animalDetail: {
      type: Object,
    }
  },
  data() {
    return {

    };
  },
};
</script>

<style scoped>
 .el-icon-star-on, .el-icon-zoom-in {
    float: left;
  }
  .el-icon-star-on{
    padding-right: 3rem;
  }
  .button {
    padding: 0 0 1.5rem 0;
    float: right;
  }
  .el-car{
    color: red
  }
</style>
