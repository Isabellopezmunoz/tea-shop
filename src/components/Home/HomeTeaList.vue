<template>
<section class="home-tea-list__container">
  <article class="home-tea-list__card" @click="router.push('/tea-detail')">
    <h1>
      Té rojo
    </h1>
    <ul class="home-tea-list__description">
      <li>Detox</li>
      <li>Digestivo</li>
      <li>Focus</li>
    </ul>
    <img class="home-tea-list__image" src="@/assets/tea-image.svg" alt="tea image">
  </article>

  <article class="home-tea-list__card">
    <h1>
      Té matcha
    </h1>
    <ul class="home-tea-list__description">
      <li>Energizante</li>
      <li>Relajante</li>
      <li>Adelgazante</li>
    </ul>
    <img class="home-tea-list__image" src="@/assets/tea-image.svg" alt="tea image">
  </article>

  <article class="home-tea-list__card">
    <h1>
      Té negro
    </h1>
    <ul class="home-tea-list__description">
      <li>Vibrante</li>
      <li>Activador</li>
      <li>Sabroso</li>
    </ul>
    <img class="home-tea-list__image" src="@/assets/tea-image.svg" alt="tea image">
  </article>

  <article class="home-tea-list__card">
    <h1>
      Té verde
    </h1>
    <ul class="home-tea-list__description">
      <li>Antioxidante</li>
      <li>Estimulante</li>
      <li>Adelgazante</li>
    </ul>
    <img class="home-tea-list__image" src="@/assets/tea-image.svg" alt="tea image">
  </article>
</section>
</template>

<script setup>
//import componentName from '../components/Folder/componentName.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

</script>

<style scoped>
.home-tea-list__container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, auto));
  gap: 2.5rem;
  margin: 0 3rem;
}

.home-tea-list__card {
  background: #ffffff;
  height: 43rem;
  border-radius: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: grid;
}

.home-tea-list__card h1 {
  padding-top: 2rem;
  font-size: 3.2rem;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.home-tea-list__description {
  padding-top: 2rem;
  font-size: 2.4rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  list-style-type: none;
  padding-right: 2.5rem;
}

.home-tea-list__image {
  justify-self: center;
}
</style>
