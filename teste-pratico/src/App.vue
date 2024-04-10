<script setup>
import HeaderMenu from './components/HeaderMenu/HeaderMenu.vue'
import Wapapper from './components/Wapapper/Wapapper.vue'
import Departments from './components/Departments/Departments.vue'
import Products from './components/Products/Products.vue'
import FooterEnd from './components/FooterEnd/FooterEnd.vue'
</script>

<template>
  <HeaderMenu />
  <main>
    <Wapapper />
    <Departments />
    <Products />
  </main>
  <FooterEnd />
</template>
