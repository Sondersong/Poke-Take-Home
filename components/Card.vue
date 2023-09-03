<script setup>
const props = defineProps(['name'])
const { data: pokeFacts } = await useFetch('/api/pokemonStats', { params: { name: props.name } })
</script>

<template>
  <h1>{{ props.name }}</h1>
  <img :src="pokeFacts.sprites.front_default"/>
</template>