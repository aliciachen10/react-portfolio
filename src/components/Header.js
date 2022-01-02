import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props
// we are deconstructing props into { currentPage, handlePageChange }
function Header({ currentPage, handlePageChange }) {
  return (
    <>
    <img src="bg-masthead.jpg" class="hero-hero" alt="masthead"></img>
    </>
  );
}

export default Header;
