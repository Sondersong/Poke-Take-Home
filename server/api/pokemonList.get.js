import Axios from "axios";
import { setupCache } from "axios-cache-interceptor";
const axios = setupCache(Axios);
export default defineEventHandler(async (event) => {
  let params = getQuery(event);
  const res = await axios({
    method: "get",
    url: "https://pokeapi.co/api/v2/pokemon",
    params: {
      limit: 1000,
    },
  });
  let search = params.search.toLowerCase();
  let pokeList = res.data.results;
  if (params.search === "") {
    let shortenedList = [];
    for (let i = 0; i <= 60; i++) {
      shortenedList.push(pokeList[i]);
    }
    return shortenedList;
  } else {
    let index = 0;
    let resultsArr = [];
    while (resultsArr.length <= 60 && index < pokeList.length) {
      if (pokeList[index].name.toLowerCase().includes(search)) {
        resultsArr.push(pokeList[index]);
      }
      index++;
    }
    return resultsArr;
  }
});
