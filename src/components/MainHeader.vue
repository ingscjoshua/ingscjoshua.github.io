<template>
<div class="">
<header class="h-12 sm:h-12  md:h-20 lg:h-24 xl:h-32 bg-gray-900">
<h1 class="hidden  sm:hidden md:block md:text-left lg:text-center text-white">{{nameSite}}</h1>
	
</header>
</div>
</template>
<script>
export default{
  name:'mainHeader',
  data(){
    return{
    	  nameSite:'Josué Hernández Ramírez',
      	  profession:'software engineer'
    }
  }
}
</script>