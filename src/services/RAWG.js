class RAWGService {
    _apiBase = "https://api.rawg.io/api/";
    _apiKey = process.env.API_KEY;
    _page = 1;

    getResourse = async url => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }

        return await res.json();
    };

    getGames = async (page = this._page) => {
        const res = await this.getResourse(`${this._apiBase}games?key=${this._apiKey}&page=${page}`);
        return res.results.map(this._transformGamesData);
    };

    searchGames = async text => {
        const res = await this.getResourse(`${this._apiBase}games?key=${this._apiKey}&search=${text}`);
        return res;
    };

    getGameData = async id => {
        const res = await this.getResourse(`${this._apiBase}games/${id}?key=${this._apiKey}`);
        return {
            id: res.id,
            name: res.name,
            poster: res.background_image,
            description: res.description.replace(/<\/?p>/g, ""),
            website: res.website,
        };
    };

    getGameScreenShots = async id => {
        const res = await this.getResourse(`${this._apiBase}games/${id}/screenshots?key=${this._apiKey}`);
        return res;
    };

    _transformGamesData = game => {
        return {
            id: game.id,
            name: game.name,
            released: game.released,
            rating: game.rating,
            platforms: game.parent_platforms.map(each => each.platform.name),
            poster: game.background_image,
        };
    };
}

export default RAWGService;
