import React from 'react';
import './style.css';

export default function Project(props) {
  return (
    <div class="card">
      <a class="img-card" href={props.repoLink}>
        <img
          src={props.imgsrc} />
      </a>
      <div class="card-content">
        <h4 class="card-title">
          <a href={props.webLink}> {props.title}
          </a>
        </h4>
        <p class="">
          {props.children} 
        </p>
      </div>
      <div class="card-read-more">
        <a href={props.repoLink}
          class="btn btn-link btn-block">
          Git Repo
        </a>
      </div>
    </div>
  );
}
