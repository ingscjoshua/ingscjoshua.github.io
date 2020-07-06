<template>
  <div class="container">
    <div class="row">
      <div class="col s12">

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
      nameSite:process.env.VUE_APP_SITE_NAME
    }
  }
}
</script>
