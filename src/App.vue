<template>
  <div id="app" class="container-main">
  	<main-header></main-header>
  	<div class="content-main">
  		<router-view/>	
  	</div>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainFooter from '@/components/MainFooter'
import MainHeader from '@/components/MainHeader'
export default {
  name: 'App',
  mounted(){
  },
  components:{MainHeader,MainFooter}
}
</script>
