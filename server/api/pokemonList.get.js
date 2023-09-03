import axios from 'axios';
// import { setupCache } from 'axios-cache-interceptor';
// const axios = setupCache(Axios)
export default defineEventHandler(async (event) => {
    const res = await axios( {
        method: 'get',
        url: 'https://pokeapi.co/api/v2/pokemon',
        params: {
            limit: 10
        }
    })
    return res.data.results
})