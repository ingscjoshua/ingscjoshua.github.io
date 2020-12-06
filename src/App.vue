<template>
  <div id="app" class="container">
    <main>
    <router-view/>
    </main>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainFooter from '@/components/MainFooter'
export default {
  name: 'App',
  mounted(){
  },
  components:{MainFooter}
}
</script>
