import React from 'react'
import Navbar from "../component/navbar"

const Layout = ({ children }) => {

    return (
      <div >
        <Navbar />
          <div>
            {children}
          </div>
      </div>
    );
  };
  
  export default Layout;
