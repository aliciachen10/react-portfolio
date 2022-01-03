import React from 'react';
import './pages/style.css';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props
// we are deconstructing props into { currentPage, handlePageChange }
function Footer({ currentPage, handlePageChange }) {
  return (
    <>
    <br></br>
    <ul className='footer-list'>
      <li><a href="http://www.github.com/aliciachen10">Github</a></li>
      <li><a href="http://www.linkedin.com/in/alicia--chen">LinkedIn</a></li>
      <li><a href="https://en.gravatar.com/hiddencyclist">Gravatar</a></li>
    </ul>
    </>
  );
}

export default Footer;
