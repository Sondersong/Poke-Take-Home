// import { useFetch } from '@nuxt/composition-api';
export default defineEventHandler(async (event) => {
  let params = getQuery(event);
  const { data: pokemonList } = await useFetch("/api/pokemonList");
  if (params.search === '') {
    return pokemonList.slice(10)
  }
});
