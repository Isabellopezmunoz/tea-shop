<template>
<div class=tea-detail__container>
  <figure class="tea-detail__image">
    <img src="@/assets/tea-image.svg" alt="tea image">
  </figure>

  <div class="tea-detail__summary">
    <h1>
      Té verde y blanco con frutos rojos
    </h1>

    <div class="tea-detail__quantities">
      <p>Elige tu cantidad</p>
      <div class="tea-detail__quantities-group">
        <label for="75gr">75gr</label>
        <input type="radio" name="75gr">
      </div>
      <div class="tea-detail__quantities-group">
        <label for="45gr">45gr</label>
        <input type="radio" name="45gr">
      </div>
    </div>

    <div class="tea-detail__price">
      <p>
        <span>3,95€</span>
        <br>
        (98,75 por Kg)
        <br>
        Impuestos incuídos
      </p>
    </div>

    <p class="tea-detail__tea-description">
      Fresco y dulce.Esta combinación es la mejor que habrás probado en mucho tiempo.
    </p>

    <div class="tea-detail__shopping-section">
      <p>
        Cantidad
      </p>
      <input  type="number" name=" ">
      <button class="tea-detail__shopping-button">
        Añadir al carrito
      </button>
    </div>
  </div>
</div>
</template>

<script setup>
  //import componentName from '../components/Folder/componentName.vue'
</script>

<style scoped>
.tea-detail__container {
  display: grid;
  grid-template-columns: 40rem auto;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  gap: 3rem;
  margin: 0 3rem;
  border-radius: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
}

.tea-detail__image img {
  width: 38rem;
  height: 38rem;
}

.tea-detail__quantities-group {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-right: 1rem;
}

.tea-detail__summary {
  display: grid;
  gap: 2rem;
}

.tea-detail__price p span {
  font-weight: bold;
  font-size: 3rem;
  display: inline-block;
  margin-bottom: 2rem;
}

.tea-detail__shopping-section {
  display: flex;
  justify-content: start;
  padding-top: 2rem;
  gap: 1rem;
  align-items: flex-end;
}

.tea-detail__shopping-section p {
  font-size: 2.4rem;
}

.tea-detail__shopping-section input {
  height: 5rem;
  width: 6rem;
  text-align: center;
}

.tea-detail__shopping-button {
  width: 23rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  border: none;
  background: #42392B;
  color: #ffffff;
  border-radius: 2rem;
  cursor: pointer;
}
</style>
