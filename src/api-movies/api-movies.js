export default class ApiMovies {
  apiBase = 'https://api.themoviedb.org/3/';

  apiKey = 'a4d0b37d32322c580bdd559932e85f65';

  requestGet = (url) =>
    fetch(url).then((res) => {
      if (!res.ok) {
        throw new Error(`error fetch URL ${url}, response status ${res.status}`);
      }
      return res.json();
    });

  async getResource(search, page) {
    const url = `${this.apiBase}search/movie?api_key=${this.apiKey}&language=en-US&query=${search}&page=${page}&include_adult=false`;
    const res = await this.requestGet(url);
    return {
      totalPages: res.total_pages,
      list: res.results,
    };
  }

  async getGenres() {
    const url = `${this.apiBase}genre/movie/list?api_key=${this.apiKey}&language=en-US`;
    const res = await this.requestGet(url);
    return res.genres;
  }
}
