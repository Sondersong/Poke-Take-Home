<script setup>
  const searchInput = useState('searchInput', () => '')
</script>

<template>
  <h1>Poké-pedia</h1>
  <input placeholder="Search" v-model="searchInput"/>
</template>