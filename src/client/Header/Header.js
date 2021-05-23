/**
 * Created by Anil Jangra on 5/20/2021
 */
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import HeaderWrapper from './HeaderWrapper';

const Header = ({ onSearchNews, onReset }) => (
  <HeaderWrapper onReset={onReset}>
    <SearchBar onSearchNews={onSearchNews} />
  </HeaderWrapper>
);

Header.propTypes = {
  onReset: PropTypes.func.isRequired,
  onSearchNews: PropTypes.func.isRequired,
};
export default Header;
