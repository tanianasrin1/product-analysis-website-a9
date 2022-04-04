import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (   
        <nav>
          <Link to = '/'>Home</Link> 
          <Link to = '/review' >Review</Link>  
          <Link to = '/dashboard' >DashBoard</Link>  
          <Link to = '/blogs' >Blogs</Link>  
          <Link to ='/about' >About</Link>
     
        </nav>
    );
};

export default Header;