import React from 'react';
import './pages/style.css';
import Navigation from './Navigation';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props
// we are deconstructing props into { currentPage, handlePageChange }
function Header({ currentPage, handlePageChange }) {
  return (
    <>
    <img src="https://www.nme.com/wp-content/uploads/2020/08/Arthur_Mamou_Mani_Galaxia_Temple_Jamen_Percy.jpg" class="hero-hero" alt="masthead"></img>
    </>
  );
}

export default Header;
