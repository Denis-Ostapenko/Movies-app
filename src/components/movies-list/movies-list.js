import React from 'react';
import { Pagination, Spin, Alert } from 'antd';
import PropTypes from 'prop-types';
import MoviesListItem from '../movies-list-item/movies-list-item';
import './movies-list.css';

const MoviesList = ({ props, onPageChange, ratingСhanges }) => {
  const { totalPages, loading, page, appDate, error, notFound, searchValue, rating, ratingMoviesList } = props;
  const movieslist = !rating ? appDate : ratingMoviesList;
  const elements = movieslist.map((item) => {
    const { id, ...prop } = item;
    const ratingСhange = (ratingValue) => {
      ratingСhanges(ratingValue, item, id);
    };
    return (
      <li key={id} className="movies-list-item">
        <MoviesListItem itemData={prop} ratingСhanges={ratingСhange} />
      </li>
    );
  });
  const errorMessage =
    error && searchValue !== '' ? (
      <Alert message="Error" description="Oops, something went wrong :-(" type="error" showIcon />
    ) : null;
  const onNotFound =
    !error && !loading && notFound ? (
      <Alert message="No results were found for your search!" type="info" showIcon />
    ) : null;
  const spinner = loading ? <Spin size="large" /> : null;
  const content = !error && !loading && !notFound ? <ul className="movies-list">{elements}</ul> : null;
  const onPagination =
    appDate.length !== 0 && !error && searchValue !== '' && !loading && !rating ? (
      <Pagination
        size="small"
        defaultCurrent={page}
        total={totalPages * 20}
        defaultPageSize={20}
        onChange={onPageChange}
        hideOnSinglePage
        showSizeChanger={false}
      />
    ) : null;
  return (
    <>
      {spinner}
      {content}
      {onNotFound}
      {errorMessage}
      {onPagination}
    </>
  );
};
MoviesList.defaultProps = {
  props: {},
  totalPages: 0,
  loading: false,
  page: 0,
  appDate: {},
  error: false,
  notFound: false,
  searchValue: '',
  rating: false,
  ratingMoviesList: {},
  onPageChange: () => {},
  ratingСhanges: () => {},
};

MoviesList.propTypes = {
  props: PropTypes.shape({
    totalPages: PropTypes.number,
    loading: PropTypes.bool,
    page: PropTypes.number,
    appDate: PropTypes.arrayOf(PropTypes.object),
    error: PropTypes.bool,
    notFound: PropTypes.bool,
    searchValue: PropTypes.string,
    rating: PropTypes.bool,
    ratingMoviesList: PropTypes.arrayOf(PropTypes.object),
    onPageChange: PropTypes.func,
    ratingСhanges: PropTypes.func,
  }),
  totalPages: PropTypes.number,
  loading: PropTypes.bool,
  page: PropTypes.number,
  appDate: PropTypes.objectOf(PropTypes.array),
  error: PropTypes.bool,
  notFound: PropTypes.bool,
  searchValue: PropTypes.string,
  rating: PropTypes.bool,
  ratingMoviesList: PropTypes.objectOf(PropTypes.array),
  onPageChange: PropTypes.func,
  ratingСhanges: PropTypes.func,
};

export default MoviesList;
