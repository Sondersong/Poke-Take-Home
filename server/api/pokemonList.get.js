import axios from 'axios';
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