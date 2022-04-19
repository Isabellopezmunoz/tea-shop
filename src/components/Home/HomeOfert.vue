<template>
<div class="home-ofert__container">
  <p>
    En tu Tea Shop tienes los gastos de envío gratis
    con pedidos superiores a 20€
  </p>

  <div class="home-ofert__container-button">
    <button class="home-ofert__button">
      Ver ofertas
    </button>
  </div>
</div>
</template>

<script setup>
  //import componentName from '../components/Folder/componentName.vue'
</script>

<style scoped>
.home-ofert__container {
  background: #ffffff;
  display: grid;
  grid-template-columns: auto auto;
  justify-self: center;
  align-self: center;
  width: 90%;
  height: 10rem;
  border: 1px solid #808B78;
  border-radius: 0.5rem;
}

.home-ofert__container p {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.4rem;
}

.home-ofert__container-button {
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-ofert__button {
  width: 14rem;
  height: 5rem;
  background: #42392B;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  border-radius: 1rem;
  cursor: pointer;
}

@media only screen and (max-width: 1120px) {
  .home-ofert__container {
    display: inline-block;
  }
  .home-ofert__button {
  width: 12rem;
  height: 6rem;
}
}
</style>
