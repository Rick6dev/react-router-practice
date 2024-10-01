const baseUrl="https://pokeapi.co/api/v2/pokemon?limit=480&offset=0"

// const character =baseUrl +"character/"


export const getPokemon= ()=>{
    return fetch(baseUrl).then(res=>res.json())
}

