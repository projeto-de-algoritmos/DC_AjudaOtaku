const API_URL =  process.env.API_URL|| 'https://localhost:3001';
export async function getAnimeList(){
    try{
        const {response} = await fetch(API_URL + '/api/animes');
        return response.json();
    }catch(error){
        return[];
    }
}