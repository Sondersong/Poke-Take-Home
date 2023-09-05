<template>
  <NuxtLink class="card" :to="pageLink">
    <img :src="pokeFacts.sprites.front_default" />
    <h2>{{ name.charAt(0).toUpperCase() + name.slice(1) }}</h2>
  </NuxtLink>
</template>

<script setup>
const props = defineProps(["name"]);
const { data: pokeFacts, refresh } = await useFetch("/api/pokemonStats", {
  params: { name: props.name },
});
watch(props, refresh)
const pageLink = ref(`/pokemon/${props.name}`);
</script>
