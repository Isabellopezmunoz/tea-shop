<template>
  <nav class="layout-navbar">
    <img class="layout-navbar-__logo" src="@/assets/tea-logo-icon.svg">

    <h1 class="layout-navbar__title">
      Un té para cada momento del día
      <p>
        Tu tienda de té favorita
      </p>
    </h1>

    <button class="layout-navbar__button">
      Buscador de Té
      <img src="@/assets/lupa-icon.svg">
    </button>

    <div class="layout-navbar__account">
      <a href="">Mi Cuenta</a>
    </div>

     <div class="layout-navbar__shopping-cart">
      <a href="">Mi Cesta</a>
    </div>
  </nav>
</template>

<style scoped>
.layout-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  height: 16rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
}

.layout-navbar-__logo {
  height: 12rem;
  width: 12rem;
  padding: 0 0 0 2rem;
}

.layout-navbar__title {
  font-size: 3.2rem ;
  text-align: center;
}

.layout-navbar__title p {
  font-size: 2.4rem;
}

.layout-navbar__button {
  position: relative;
  width: 50rem;
  height: 4.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  color:var(--color-brown);
  background-color: transparent;
  border-radius: 2rem;
  border:  solid #42392B;
  cursor: pointer;
}

.layout-navbar__button img {
  position: absolute;
  left: 1rem;
}

.layout-navbar__account a {
  font-size: 2.4rem;
  text-decoration: none;
  color: #42392B;
}

.layout-navbar__shopping-cart a {
  font-size: 2.4rem;
  text-decoration: none;
  color: #42392B;
}

.layout-navbar__account {
  display: flex;
  width: 12rem;
  height: 4rem;
}

.layout-navbar__shopping-cart {
  display: flex;
  width: 14rem;
  height: 4rem;
}
</style>
