<template>
  <div class="container">
    <div class="row">
      <div class="col s12">
        <h1>{{nameSite}}</h1>
        <img src="/static/img/cover.jpg" alt="cover" class="cover">
      </div>
    </div>
  </div>
</template>
<script>
export default{
  name:'home',
  data(){
    return{
      nameSite:'Josué Hernández Ramírez'
    }
  },
  mounted(){
  }
}
</script>
