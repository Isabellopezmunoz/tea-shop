<template>
<div class="home-view">
  <layout-navbar />
  <home-ofert />
  <home-tea-list />
  <layout-footer />
</div>
</template>

<script setup>
import LayoutFooter from '@/components/Layout/LayoutFooter.vue'
import HomeOfert from '@/components/Home/HomeOfert.vue'
import LayoutNavbar from '@/components/Layout/LayoutNavbar.vue'
import HomeTeaList from '@/components/Home/HomeTeaList.vue'
</script>

<style scoped>
.home-view {
  display: grid;
  grid-template-rows: 16rem 10rem minmax(calc(100vh - 45rem), auto) 10rem;
  gap: 3rem;
}
</style>
