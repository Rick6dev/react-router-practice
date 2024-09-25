const baseUrl="https://rickandmorty.com/api"

const character =baseUrl +"character/"


export const getMorty= ()=>{
    return fetch(character+'2').then(res=>res.json())
}