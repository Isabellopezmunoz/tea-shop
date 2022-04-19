<template>
<div class="shopping-cart">
  <layout-navbar />
  <shopping-cart />
  <layout-footer />
</div>
</template>

<script setup>
import LayoutFooter from '@/components/Layout/LayoutFooter.vue'
import LayoutNavbar from '@/components/Layout/LayoutNavbar.vue'
import TeaDetail from '@/components/ShoppingCart/ShoppingCart.vue'
</script>

<style scoped>
.teadetail-view {
  display: grid;
  grid-template-rows: 16rem minmax(calc(100vh - 32rem), auto) 10rem;
  gap: 3rem;
}
</style>
