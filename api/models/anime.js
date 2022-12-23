class AnimeList {
    setAnimeList(data){
        var count = 0;
        var animeList = [];
        data.forEach(element => {
            element.entry.forEach(entry => {
                if (!animeList.find(element => element.title == entry.title)){
                    if(count <= 11){
                        animeList.push({
                            title: entry.title,
                            image: entry.images.jpg.image_url
                        })
                        count += 1;
                        return animeList;
                    }
                }
            });
        });
        return animeList;
    }
}

module.exports = AnimeList;
