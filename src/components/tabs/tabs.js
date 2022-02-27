import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './tabs.css';

export default class Tabs extends Component {
  state = {
    search: { active: true },
    rated: { active: false },
  };

  getSearch = (fun) => {
    fun();
    this.setState({ search: { active: true }, rated: { active: false } });
  };

  getRated = (fun) => {
    fun();
    this.setState({ search: { active: false }, rated: { active: true } });
  };

  render() {
    const { getRated, getSearch } = this.props;
    const { search, rated } = this.state;
    const classSearch = search.active ? 'tabs-button tabs-button--active' : 'tabs-button';
    const classRated = rated.active ? 'tabs-button tabs-button--active' : 'tabs-button';

    return (
      <div>
        <button type="button" className={classSearch} onClick={() => this.getSearch(getSearch)}>
          Search
        </button>
        <button type="button" className={classRated} onClick={() => this.getRated(getRated)}>
          Rated
        </button>
      </div>
    );
  }
}
Tabs.propTypes = {
  getRated: PropTypes.func,
  getSearch: PropTypes.func,
};
Tabs.defaultProps = {
  getSearch: () => {},
  getRated: () => {},
};
