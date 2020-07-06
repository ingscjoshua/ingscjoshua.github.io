<template>
  <div id="app" class="main" >
    <router-view/>
    <main-footer></main-footer>
  </div>
</template>

<script>
import M from 'materialize-css'
import MainFooter from '@/components/MainFooter'
export default {
  name: 'App',
  mounted(){
    M.AutoInit()
  },
  components:{MainFooter}
}
</script>
