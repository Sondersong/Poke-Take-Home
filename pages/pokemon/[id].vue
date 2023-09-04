<template>
  <h1>{{ route.params.id }}</h1>
  <img :src="pokeFacts.sprites.front_default" />
  <ul>
    <li>Height: {{ pokeFacts.height }}ft.</li>
    <li>Weight: {{ pokeFacts.weight }}lbs.</li>
    <li>
      Abilities:
      <span v-for="obj in pokeFacts.abilities">{{ obj.ability.name }}, </span>
    </li>
  </ul>
</template>

<script setup>
const route = useRoute();
const { data: pokeFacts } = await useFetch("/api/pokemonStats", {
  params: { name: route.params.id },
});
</script>
