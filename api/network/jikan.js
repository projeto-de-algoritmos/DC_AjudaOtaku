const axios = require('axios');
module.exports = {
    getRecommendations: () => {
        return axios.get('https://api.jikan.moe/v4/recommendations/anime?page=1')
    }
}
