<template>
<div class="home-view">
  <layout-navbar />
  <layout-footer />
</div>
</template>

<script setup>
import LayoutNavbar from '@/components/Layout/layautNavbar.vue'
import LayoutFooter from '@/components/Layout/LayoutFooter.vue'
</script>

<style scoped>
.home-view {
  display: grid;
  grid-template-rows: 16rem 10rem auto 10rem;
  gap: 3rem;
}
</style>
