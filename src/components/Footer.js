import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props
// we are deconstructing props into { currentPage, handlePageChange }
function Footer({ currentPage, handlePageChange }) {
  return (
    <>
    <a href="http://www.github.com/aliciachen10"><p>Github</p></a>
    <a href="http://www.linkedin.com/in/alicia--chen"><p>LinkedIn</p></a>
    </>
  );
}

export default Footer;
