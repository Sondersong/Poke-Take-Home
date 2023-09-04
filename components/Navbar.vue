<template>
  <h1>
    <NuxtLink to="/">Poké-pedia</NuxtLink>
  </h1>
  <input placeholder="Search" v-model="searchInput" />
</template>

<script setup>
const searchInput = useState('searchInput')
</script>