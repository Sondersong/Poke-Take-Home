<template>
  <h1>This is the home page</h1>
  <div v-for="arr in pokemonList">
    <Card :name="arr.name" />
  </div>
</template>

<script setup>
const searchInput = useState("searchInput", () => "");
const { data: pokemonList } = await useFetch("/api/pokemonList", {params: {search: searchInput}});
</script>
