const express = require('express'),
  router = express.Router(),
  jikan = require('../../network/jikan'),
  AnimeList = require('../../models/anime.js');

const anime = new AnimeList();

router.get('/', (req, res) => {
    jikan.getRecommendations().then(response => {
        const animeList = anime.setAnimeList(response.data.data);
        res.status(200).json(animeList);
    }).catch(error => {
        res.status(500).send(error)
    });
});

module.exports = router;
