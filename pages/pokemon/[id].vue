<template>
  <div id="moreInfo">
    <div id="sideCard">
      <img :src="pokeFacts.sprites.front_default" />
      <h1>
        {{ route.params.id.charAt(0).toUpperCase() + route.params.id.slice(1) }}
      </h1>
    </div>
    <ul id="infoPanel">
      <h2>- Stats -</h2>
      <li>Height: {{ pokeFacts.height }}ft.</li>
      <li>Weight: {{ pokeFacts.weight }}lbs.</li>
      <li>
        Abilities:
        <span v-for="(obj, index) in pokeFacts.abilities"
          >{{
            obj.ability.name.charAt(0).toUpperCase() + obj.ability.name.slice(1)
          }}<span v-if="index !== pokeFacts.abilities.length - 1">, </span></span
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
const route = useRoute();
const { data: pokeFacts } = await useFetch("/api/pokemonStats", {
  params: { name: route.params.id },
});
</script>
