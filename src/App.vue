<template>
  <div id="app">
    <menu>
      <router-link class="navigation-element" to="/">Dogs Catalog</router-link>
      <router-link class="navigation-element" to="favourites-dogs">Favourites Dogs</router-link>
    </menu>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

menu {
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
