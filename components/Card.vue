<template>
  <NuxtLink class="card" :to="pageLink">
    <h1>{{ props.name }}</h1>
    <img :src="pokeFacts.sprites.front_default" />
  </NuxtLink>
</template>

<script setup>
const props = defineProps(['name'])
const { data: pokeFacts } = await useFetch('/api/pokemonStats', { params: { name: props.name } })
const pageLink = `/pokemon/${props.name}`
</script>