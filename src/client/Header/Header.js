/**
 * Created by Anil Jangra on 5/20/2021
 */
import React from 'react';
import SearchBar from './SearchBar';
import HeaderWrapper from './HeaderWrapper';

const Header = ({ onSearchNews }) => (
  <HeaderWrapper>
    <SearchBar onSearchNews={onSearchNews} />
  </HeaderWrapper>
);

export default Header;
