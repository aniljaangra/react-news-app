/**
 * Created by Anil Jangra on 5/20/2021
 */
import React from 'react';

function HeaderWrapper({ children }) {
  return (
    <nav className="navbar bg-dark px-5 justify-content-between">
      <div
        className="navbar-brand font-weight-bold"
        style={{
          color: '#fff7f7',
          fontFamily: 'Georgia',
        }}
      >
        UK NEWS APP
      </div>
      {children}
    </nav>
  );
}
export default HeaderWrapper;
