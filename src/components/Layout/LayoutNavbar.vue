<template>

<nav class="layout-navbar">
  <figure class="layout-navbar__logo">
    <img src="@/assets/tea-logo-icon.svg">
  </figure>

  <div class="layout-navbar__title">
    <h1>Un té para cada momento del día</h1>
    <h2>Tu tienda de té favorita</h2>
  </div>

  <div>
    <button class="layout-navbar__button">
      Buscador de Té
      <img src="@/assets/lupa-icon.svg">
    </button>
  </div>

  <div class="layout-navbar__account">
    <a href="">
      Mi Cuenta
    </a>
  </div>

  <div class="layout-navbar__shopping-cart">
    <a href="">
      Mi Cesta
    </a>
  </div>
</nav>
</template>


<style scoped>
.layout-navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
  height: 16rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
}

.layout-navbar-__logo {
  height: 12rem;
  width: 12rem;
}

.layout-navbar__title h1 {
  font-size: 2.4rem ;
  text-align: center;
  font-weight: bold;
}

.layout-navbar__title h2 {
  font-size: 2.4rem ;
  text-align: center;
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

@media only screen and (max-width: 1120px) {
  .layout-navbar {
    display: grid;
    grid-template-columns: 4rem 4rem auto auto auto;
    grid-template-rows: auto auto;
    grid-template-areas:
      ". logo title title ."
      ". search-bar search-bar account shopping-cart";
  }

  .layout-navbar__logo {
    grid-area: logo;
  }

  .layout-navbar__title {
    grid-area: title;
  }

  .layout-navbar__title + div {
    grid-area: search-bar;
  }

  .layout-navbar__button {
    height: 3.5rem;
  }

  .layout-navbar__account {
    grid-area: account;
  }

  .layout-navbar__shopping-cart {
    grid-area: shopping-cart;
  }
}
</style>
