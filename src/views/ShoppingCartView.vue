<template>
<div class="shoppingcart-view">
  <layout-navbar />
  <shopping-cart />
  <layout-footer />
</div>
</template>

<script setup>
import LayoutFooter from '@/components/Layout/LayoutFooter.vue'
import LayoutNavbar from '@/components/Layout/LayoutNavbar.vue'
import ShoppingCart from '@/components/ShoppingCart/ShoppingCart.vue'
</script>

<style scoped>
.shoppingcart-view {
  display: grid;
  grid-template-rows: 16rem minmax(calc(100vh - 32rem), auto) 10rem;
  gap: 3rem;
}
</style>
