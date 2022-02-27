import React, { Component } from 'react';
import { debounce } from 'lodash';
import ApiMovies from '../../api-movies/api-movies';
import MoviesList from '../movies-list/movies-list';
import SearchPanel from '../search-panel/search-panel';
import Tabs from '../tabs/tabs';

import './app.css';

export default class App extends Component {
  state = {
    searchValue: '',
    totalPages: 0,
    page: 0,
    loading: false,
    error: false,
    notFound: false,
    rating: false,
    ratingMoviesList: JSON.parse(localStorage.getItem('ratingMoviesList')) || [],
    appDate: [],
  };

  apiMovies = new ApiMovies();

  debouncedGetList = debounce((searchValue, page) => this.getResource(searchValue, page), 500);

  componentDidUpdate(perevProps, prevState) {
    const { searchValue, page } = this.state;
    if (searchValue !== prevState.searchValue || page !== prevState.page) {
      this.componentLoading();
      this.debouncedGetList(searchValue, page);
    }
  }

  getGenre(moviesArr, totalPages, page, inputValue) {
    this.apiMovies.getGenres().then((res) => {
      const newMoviesArr = moviesArr.map((movie) => {
        const arrGenreIds = [];
        movie.genreIds.forEach((element) => {
          res.forEach((genre) => {
            const { id, name } = genre;
            if (id === element) {
              arrGenreIds.push(name);
            }
          });
        });
        const newMovie = { ...movie, genreIds: arrGenreIds };
        return newMovie;
      });
      this.setState(() => ({
        totalPages,
        appDate: [...newMoviesArr],
        page,
        loading: false,
        notFound: false,
        searchValue: inputValue,
      }));
    });
  }

  getResource = (inputValue, page = 1) => {
    this.apiMovies
      .getResource(inputValue, page)
      .then(({ totalPages, list }) => {
        const moviesArr = list.map((movie) => {
          const {
            title,
            release_date: releaseDate,
            id,
            poster_path: posterPath,
            overview,
            vote_average: voteAverage,
            genre_ids: genreIds,
          } = movie;
          return { title, releaseDate, backdropPath: posterPath, overview, voteAverage, genreIds, id };
        });
        this.getGenre(moviesArr, totalPages, page, inputValue);
      })
      .then(() => {
        const { appDate } = this.state;
        if (appDate.length === 0) {
          this.setState({
            notFound: true,
          });
        }
      })
      .catch(this.onError);
  };

  onPageChange = (event) => {
    this.setState({
      page: event,
    });
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  onInputChange = (event) => {
    event.preventDefault();
    this.setState({
      searchValue: event.target.value,
      page: 1,
    });
  };

  ratingСhanges = (ratingValue, item, id) => {
    this.setState(({ ratingMoviesList }) => {
      const i = ratingMoviesList.findIndex((el) => el.id === id);
      const oldItem = i !== -1 ? ratingMoviesList[i] : { ...item };
      const newItem = { ...oldItem, ratingValue };
      const newArr =
        i !== -1
          ? [...ratingMoviesList.slice(0, i), newItem, ...ratingMoviesList.slice(i + 1)]
          : [...ratingMoviesList, newItem];
      return {
        ratingMoviesList: newArr,
      };
    });
  };

  getRated = () => {
    this.setState({ rating: true });
  };

  getSearch = () => {
    this.setState({ rating: false });
  };

  componentLoading() {
    this.setState({
      loading: true,
      error: false,
      notFound: false,
    });
  }

  render() {
    const { searchValue, totalPages, loading, page, appDate, error, notFound, rating, ratingMoviesList } = this.state;
    localStorage.setItem('ratingMoviesList', JSON.stringify(ratingMoviesList));
    const searchPanel = !rating ? <SearchPanel onInputChange={this.onInputChange} /> : null;
    return (
      <div className="container">
        <Tabs getRated={this.getRated} getSearch={this.getSearch} />
        {searchPanel}
        <MoviesList
          props={{ totalPages, searchValue, loading, page, appDate, error, notFound, rating, ratingMoviesList }}
          onPageChange={this.onPageChange}
          ratingСhanges={this.ratingСhanges}
        />
      </div>
    );
  }
}
