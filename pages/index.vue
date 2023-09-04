<template>
  <h1>This is the home page</h1>
  <Card v-for="arr in pokemonList" :name="arr.name" />
</template>

<script setup>
const searchInput = ref(useState('searchInput', () => 'clefairy'))
const { data: pokemonList } = await useFetch('/api/pokemonList')
</script>
