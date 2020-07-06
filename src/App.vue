<template>
  <div id="app" class="page-flexbox-wrapper"  >
    <main>
    <router-view/>
    </main>
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
