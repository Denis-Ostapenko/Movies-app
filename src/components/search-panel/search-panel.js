import React from 'react';
import PropTypes from 'prop-types';
import './search-panel.css';

const SearchPanel = ({ onInputChange }) => (
  <div className="search-form">
    <input className="search-panel" type="search" placeholder="Type to search..." onChange={onInputChange} />
  </div>
);
SearchPanel.propTypes = {
  onInputChange: PropTypes.func,
};
SearchPanel.defaultProps = {
  onInputChange: () => {},
};
export default SearchPanel;
