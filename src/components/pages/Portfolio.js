import React from 'react';
import Project from './Project';
import './style.css';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
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
                  </div>
                  <div class="col-xs-12 col-sm-6">
                    <Project title="Timed Quiz" repoLink="github.com/aliciachen10/timed-quiz"
                    webLink="http://aliciachen10.github.io/timed-quiz" 
                    imgsrc="https://www.ispringsolutions.com/blog/wp-content/uploads/2020/02/top-5.png">
                      Take a timed coding quiz that records your score and stores it in your browser.
                    </Project>
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
                  <Project title="Day Planner" repoLink="github.com/aliciachen10/day-planner"
                      webLink="http://aliciachen10.github.io/day-planner" 
                      imgsrc="https://commit30.com/wp-content/uploads/WeeklyDayPlannerInside.jpg">
                        Plan your day. + Come back to your plan, too, if you want. (It's saved in your browser.)
                  </Project>
                    
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
