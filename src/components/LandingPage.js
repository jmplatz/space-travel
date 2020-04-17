import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import showcaseImage from './images/Mars-512.png';

export class LandingPage extends Component {

  render() {

    return (
      <div className="main">
        <nav className="navbar">
          <div className="container">
            <h1 className="logo">Galactic Tours</h1>
            <ul className="nav">
              <li>
                <Link to="/userform">Create Booking</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Showcase */}
        <section className="showcase">
          <div className="container">
            <div>
              <h1>Guided tours that are out of this world.</h1>
              <p>
                A human mission to Mars has been the subject of science fiction, aerospace engineering,
                and scientific proposals since the 20th century. Today, join us on an all inclusive guided
                tour of the Red Planet.

                Starting from just $80,000
              </p>
              <Link to="/userform" className="btn">Book Now</Link>
            </div>
            <img src={showcaseImage} alt="Mars Logo" />
          </div>
        </section>

        {/* Footer */}
        <footer className="section-footer">
          <div className="container">
            <div>
              <p>Created by: Jordan Platz</p>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default LandingPage;