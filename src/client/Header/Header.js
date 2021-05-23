/**
 * Created by Anil Jangra on 5/20/2021
 */
import React from 'react';
import SearchBar from './SearchBar';
import HeaderWrapper from './HeaderWrapper';

const Header = ({ onSearchNews, onReset }) => (
  <HeaderWrapper onReset={onReset}>
    <SearchBar onSearchNews={onSearchNews} />
  </HeaderWrapper>
);

export default Header;
