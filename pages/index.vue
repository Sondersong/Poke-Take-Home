<template id="homePage">
  <div id="homePage">
    <h1>Welcome to Poké-pedia!</h1>
    <div id="cardGrid">
      <Card v-for="arr in pokemonList" :name="arr.name" />
    </div>
  </div>
</template>

<script setup>
const searchInput = useState("searchInput", () => "");
const { data: pokemonList } = await useFetch("/api/pokemonList", {
  params: { search: searchInput },
});
</script>
