<template>
<section class="home-tea-list__container">
  <article>
    <h1>
      Té rojo
    </h1>
    <p>
      Detox Digestivo Focus
    </p>
    <img src="@/assets/tea-image.svg" alt="tea image">
  </article>

  <article>
    <h1>
      Té matcha
    </h1>
    <p>
      Energizante Relajante Adelgazante
    </p>
    <img src="@/assets/tea-image.svg" alt="tea image">
  </article>

  <article>
    <h1>
      Té negro
    </h1>
    <p>
      Vibrante Activador Sobroso
    </p>
    <img src="@/assets/tea-image.svg" alt="tea image">
  </article>

  <article>
    <h1>
      Té verde
    </h1>
    <p>
      Antioxidante Estimulante Adelgazante
    </p>
    <img src="@/assets/tea-image.svg" alt="tea image">
  </article>
</section>
</template>

<script setup>
  //import componentName from '../components/Folder/componentName.vue'
</script>

<style scoped>
.home-tea-list__container {
  display: grid;
  grid-template-columns: 30rem 30rem 30rem 30rem;
  gap: 2.5rem;
  justify-self: center;
  align-self: center;
  width: 90%;
  height: 43rem;
  border-radius: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
}

.home-tea-list__container article {
  background: #ffffff;
  border-radius: 1rem;
}

.home-tea-list__container article h1 {
  font-size: 3.2rem;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.home-tea-list__container article p {
  font-size: 2.4rem;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.
.home-tea-list__container article img {
  width: 1rem;
  height: 1rem;
}

</style>
