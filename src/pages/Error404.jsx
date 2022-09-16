import React from "react";
import './Error404.css'

export default class Error404 extends React.Component {
  render() {
    return (
      <div className="background-color-grey">
        <div class="stars">

            <div class="central-body">
                <img class="image-404" src="http://salehriaz.com/404Page/img/404.svg" width="300px" alt="404"/>
                <a href="/" class="btn-go-home">GO HOME</a>
            </div>
            <div class="objects">
                <img class="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px" alt="Rocket"/>
                <div class="earth-moon">
                    <img class="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px" alt="Terra"/>
                    <img class="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px" alt="Lua"/>
                </div>
                <div class="box_astronaut">
                    <img class="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px" alt="Astronalta"/>
                </div>
            </div>
            <div class="glowing_stars">
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
            </div>
        </div>
      </div>
    );
  }
}
