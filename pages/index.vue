<script setup>
const searchInput = ref(useState('searchInput', () => 'clefairy'))
const { data: pokemonList } = await useFetch('/api/pokemonList')
const { data: singlePoke } = await useFetch('/api/pokemonStats', { params: { name: searchInput } })
</script>

<template>
  <h1>This is the home page</h1>
  <Card v-for="arr in pokemonList" :name="arr.name" />
</template>