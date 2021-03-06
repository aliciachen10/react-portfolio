import React from 'react';
import Project from './Project';
import './style.css';

export default function Work() {
  return (
    <div>
      <h1>Work</h1>
      <div class="col-12 col-md-8 col-xl-9">
        <section class="wrapper">
          <div class="container-fostrap">
            <div class="content">
              <div class="container">
                <div class="row">
                  <div class="col-xs-12 col-sm-6">
                    <Project title="Weather Dashboard" repoLink="github.com/aliciachen10/weather-dashboard"
                    webLink="http://aliciachen10.github.io/weather-dashboard" 
                    imgsrc="https://github.com/aliciachen10/weather-dashboard/blob/main/assets/mockup.png?raw=true">
                      Search for weather in any city and obtain current conditions and a five day forecast.
                    </Project>

                    <Project title="Timed Quiz" repoLink="github.com/aliciachen10/timed-quiz"
                    webLink="http://aliciachen10.github.io/timed-quiz" 
                    imgsrc="https://github.com/aliciachen10/weather-dashboard/blob/main/assets/mockup.png?raw=true">
                      Take a timed coding quiz that records your score and stores it in your browser.
                    </Project>
                  </div>
                  <div class="col-xs-12 col-sm-6">
                    <div class="card">
                      <a class="img-card"
                        href="http://aliciachen10.github.io/timed-quiz">
                        <img
                          src="./assets/images/timed-quiz.png" />
                      </a>
                      <div class="card-content">
                        <h4 class="card-title">
                          <a href="http://aliciachen10.github.io/timed-quiz">
                            Timed Quiz
                          </a>
                        </h4>
                        <p class="">
                          Take a timed coding quiz that records your score and stores it in your browser.
                        </p>
                      </div>
                      <div class="card-read-more">
                        <a href="https://github.com/aliciachen10/timed-quiz" class="btn btn-link btn-block">
                          Git Repo
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="row">
                  <div class="col-xs-12 col-sm-6">
                    <Project title="Stock and Cryto App" repoLink="github.com/aliciachen10/stock-and-crypto-app"
                      webLink="http://aliciachen10.github.io/stock-and-crypto-app" 
                      imgsrc="https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/XA6KIXE6FBFM5EWSA25JI5YAU4.jpg">
                        Take a timed coding quiz that records your score and stores it in your browser.
                    </Project>
                  </div>

                  <div class="col-xs-12 col-sm-6">
                    <div class="card">
                      <a class="img-card"
                        href="http://aliciachen10.github.io/day-planner">
                        <img
                          src="./assets/images/day-planner.png" />
                      </a>
                      <div class="card-content">
                        <h4 class="card-title">
                          <a href="http://aliciachen10.github.io/day-planner">
                            Day Planner
                          </a>
                        </h4>
                        <p class="">
                          Plan your day. + Come back to your plan, too, if you want. (It's saved in your browser.)
                        </p>
                      </div>
                      <div class="card-read-more">
                        <a href="http://github.com/aliciachen10/day-planner"
                          class="btn btn-link btn-block">
                          Git Repo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
