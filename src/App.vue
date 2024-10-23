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
@use '@/assets/variables.scss' as v;

nav {
  display: flex;
  justify-content: center;
  background-color: v.$color-primary-dark;
  margin-bottom: 1px;

  .navigation-element {
    padding: 0.5rem;
    text-decoration: none;
    color: v.$color-text;
    &:hover {
      background-color: v.$color-primary;
    }
    &:visited {
      text-decoration: none;
    }
  }
}
</style>
