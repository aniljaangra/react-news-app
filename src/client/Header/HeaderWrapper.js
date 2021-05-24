/**
 * Created by Anil Jangra on 5/20/2021
 */
import React from 'react';
import PropTypes from 'prop-types';

function HeaderWrapper({ children, onReset }) {
  return (
    <nav className="navbar bg-dark px-5 justify-content-between">
      <div
        className="navbar-brand font-weight-bold btn"
        style={{
          color: '#fff7f7',
          fontFamily: 'Georgia',
        }}
        onClick={onReset}
      >
        UK NEWS APP
        <span className="text-info"> (with Infinite Scroll)</span>
      </div>
      {children}
    </nav>
  );
}
export default HeaderWrapper;

HeaderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  onReset: PropTypes.func.isRequired,
};
