import axios from 'axios';
export default defineEventHandler(async (event) => {
    let params = getQuery(event)
    const res = await axios( {
        method: 'get',
        url: `https://pokeapi.co/api/v2/pokemon/${params.name}`,
    })
    return res.data
})