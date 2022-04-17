<template>
<div class="footer-container">
  <ul class="pay-list">
    <li>
      <img src="@/assets/applepay-icon.svg" >
    </li>
    <li>
      <img src="@/assets/paypal-icon.svg">
    </li>
    <li>
      <img src="@/assets/mastercard-icon.svg">
    </li>
    <li>
      <img src="@/assets/visa-icon.svg">
    </li>
  </ul>

  <ul class="social-list">
    <li>
      <img src="@/assets/facebook-icon.svg">
    </li>
    <li>
      <img src="@/assets/instagram-icon.svg">
    </li>
    <li>
      <img src="@/assets/twitter-icon.svg">
    </li>
  </ul>

  <button class="contact-button">
    Contact Us
    <img  src="@/assets/movil-icon.svg">
  </button>
  <button class="about-us-button">
    About Us
    <img src="@/assets/user-icon.svg">
  </button>
</div>
</template>

<script setup>
  //import componentName from '../components/Folder/componentName.vue'
</script>

<style scoped>
.footer-container {
  display: flex;
  justify-content: space-between;
  background: #42392B;
  height: 10rem;
}

.pay-list {
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 2rem;
  cursor: pointer;
}

.social-list {
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 2rem;
  cursor: pointer;
}

.contact-button {
  display: flex;
  align-items: center;
  font-size: 2.4rem;
  color: #ffffff;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.about-us-button {
  display: flex;
  align-items: center;
  font-size: 2.4rem;
  color: #ffffff;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
