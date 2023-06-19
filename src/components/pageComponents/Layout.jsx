import React from 'react';
import Nav from '../baseComponents/Nav';

const Layout = ({ children }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col flex-grow">
          <div className="flex flex-1 mx-2">{children}</div>
          <Nav />
        </div>
      </div>
    </section>
  );
};

export default Layout;
