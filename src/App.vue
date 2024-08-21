<template>
  <div id="app">
    <nav>
      <RouterLink class="navigation-element" to="/"> Dogs Catalog </RouterLink>
      <RouterLink class="navigation-element" to="/favourites-dogs"> Favourites Dogs </RouterLink>
    </nav>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

nav {
  display: flex;
  justify-content: center;
  background-color: $color-primary-dark;
  margin-bottom: 1px;

  .navigation-element {
    padding: 0.5rem;
    text-decoration: none;
    color: $color-text;
    &:hover {
      background-color: $color-primary;
    }
    &:visited {
      text-decoration: none;
    }
  }
}
</style>
