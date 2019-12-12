<template>
  <div>
    <el-col :span="8">
    <el-card class="card-margin">
      <img
        :src="src"
        class="image-card"
      />
      <div class="content-padding">
          <div class="content-aling">
          <h3>{{title}}</h3>
          <p>{{desc}}</p>
      </div>
      <div class="content-social">
          <div><i class="el-icon-sugar"></i>{{likes}}</div>
          <div><i class="el-icon-chat-line-square"></i>{{comments}}</div>
          <a href="#">Share</a>
      </div>
      </div>
    </el-card>
  </el-col>
  </div>
</template>

<script>
export default {
  name: "AppCard",
  props: {
      src: {
          required: true, 
          type: String
      },
      title: {
          required: true, 
          type: String
      },
      desc: {
          required: true, 
          type: String
      },
      likes: {
          required: true, 
          type: Number
      },
      comments: {
          required: true, 
          type: Number
      }
      
  }
};
</script>

<style>
/* Card styles  */
.image-card{
    width: 100%;
}

.el-card__body {
    padding: 0px;
}

.card-margin{
    margin-top: 20px;
}

/* Content styles  */

.content-padding{
    padding: 10%;
}

.content-aling{
    text-align: left;
}

.content-social{
    display: flex; justify-content: space-between;
}

h3{
    margin: 0px;
}
</style>