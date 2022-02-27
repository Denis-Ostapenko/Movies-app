import React from 'react';
import { Rate } from 'antd';
import PropTypes from 'prop-types';

import noPictures from './no-pictures.png';
import './movies-list-item.css';

const MoviesListItem = ({ itemData, ratingСhanges }) => {
  const { title, backdropPath, overview, releaseDate, genreIds, voteAverage, ratingValue } = itemData;
  const tab = genreIds.map((item) => (
    <div key={Math.floor(Math.random() * (10 - 1)) + 1} className="film-details__tab">
      {item}
    </div>
  ));

  const cover = backdropPath !== null ? `https://image.tmdb.org/t/p/w200/${backdropPath}` : noPictures;

  let label = overview;
  if (overview.length > 125) {
    const ind = overview.slice(0, 125).lastIndexOf(' ');
    label = `${overview.slice(0, ind)} ...`;
  }

  let header = title;
  if (title.length > 25) {
    const ind = title.slice(0, 25).lastIndexOf(' ');
    header = `${title.slice(0, ind)} ...`;
  }

  let borderColor = '#E90000';
  if (voteAverage >= 3 && voteAverage < 5) {
    borderColor = '#E97E00';
  }
  if (voteAverage >= 5 && voteAverage < 7) {
    borderColor = '#E9D100';
  }
  if (voteAverage >= 7) {
    borderColor = '#66E900';
  }

  return (
    <>
      <div>
        <img src={cover} alt="film" className="film-cover" />
      </div>
      <div className="film-details">
        <h3 className="film-details__header">{header}</h3>
        <div className="film-details__rating" style={{ borderColor }}>
          <span>{voteAverage}</span>
        </div>
        <span className="film-details__date">{releaseDate}</span>
        <div>{tab}</div>
        <p className="film-details__text">{label}</p>
        <div className="film-details__stars">
          <Rate defaultValue={ratingValue} count={10} onChange={ratingСhanges} />
        </div>
      </div>
    </>
  );
};
MoviesListItem.defaultProps = {
  itemData: {},
  ratingСhanges: () => {},
};

MoviesListItem.propTypes = {
  itemData: PropTypes.shape({
    title: PropTypes.string,
    backdropPath: PropTypes.string,
    overview: PropTypes.string,
    releaseDate: PropTypes.string,
    genreIds: PropTypes.arrayOf(PropTypes.string),
    voteAverage: PropTypes.number,
    ratingValue: PropTypes.number,
  }),
  ratingСhanges: PropTypes.func,
};

export default MoviesListItem;
