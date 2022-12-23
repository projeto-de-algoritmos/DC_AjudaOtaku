export async function getAnimeList(){
    try{
        const {response} = await fetch('https://localhost:3001/api/animes');
        return response;
    }catch(error){
        return[];
    }
}