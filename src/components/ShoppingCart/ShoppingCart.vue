<template>
<div class="shopping-cart__container">
  <figure class="shopping-cart__image">
    <img src="@/assets/tea-image.svg" alt="tea image">
  </figure>

  <div class="shopping-cart__quantities-group">
    <div class="shopping-cart__quantities">
      <div>
        <label for="75gr">75gr</label>
        <input type="radio" name="75gr">
      </div>
      <div>
        <label for="45gr">45gr</label>
        <input type="radio" name="45gr">
      </div>
    </div>
    <div class="shopping-cart__price">
      <p>
        <span>3,95€</span>
        <br>
        (98,75 por Kg)
        <br>
        Impuestos incuídos
      </p>
    </div>
    <input class="shopping-cart__input-number" type="number">
  </div>

  <div class="shopping-cart__pay-section">
    <h1>
      Shopping cart
    </h1>
    <p>
      Cart total 3,95€
      <br>
      Envío 2,50€
    </p>
    <button>
      <img src="@/assets/mastercard-shoppingcart-icon.svg">
    </button>
    <button>
      <img src="@/assets/paypal-shoppingcart-icon.svg">
    </button>
  </div>
</div>

</template>

<script setup>
  //import componentName from '../components/Folder/componentName.vue'
</script>

<style scoped>
.shopping-cart__container {
  display: grid;
  grid-template-columns: 40rem auto auto;
  background: #ffffff;
  gap: 3rem;
  margin: 0 3rem;
  border-radius: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
}

.shopping-cart__image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.shopping-cart__image img {
  width: 38rem;
  height: 38rem;
}

.shopping-cart__quantities-group {
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 0.5rem;
}

.shopping-cart__quantities {
  display: inline-flex;
  align-content: center;
  gap: 1rem;
  margin-right: 1rem;
}

.shopping-cart__input-number {
  height: 5rem;
  width: 6rem;
  text-align: center;
}

.shopping-cart__price p span{
  font-size: 3rem;
  font-weight: bold;
}

.shopping-cart__pay-section {
  display: grid;
  grid-template-rows: auto auto auto auto;
  justify-items: center;
  align-content: center;
  gap: 5rem;
  background: #42392B;
  border-radius: 1rem;
}

.shopping-cart__pay-section h1  {
  color: #ffffff;
}

.shopping-cart__pay-section p  {
  color: #ffffff;
}

.shopping-cart__pay-section button {
  width: 10rem;
  height: 5rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer
}

@media only screen and (max-width: 1120px) {
  .shopping-cart__pay-section {
  display: grid;
  grid-template-rows: auto auto auto auto;
  justify-items: center;
  align-content: center;
  gap: 2rem;
  }

  .shopping-cart__pay-section *:not(button) {
    font-size: 1.6rem;
  }

  .shopping-cart__pay-section button {
  width: 6rem;
  height: 5rem;
}

.shopping-cart__input-number {
  height: 4rem;
  width: 4rem;
  text-align: center;
}


.shopping-cart__image img {
  width: 28rem;
  height: 28rem;
}
}
</style>
