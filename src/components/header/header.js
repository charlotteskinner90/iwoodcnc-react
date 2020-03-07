import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#portfolio">Gallery</a></li>
              <li><a className="smoothscroll" href="#services">Services</a></li>
              <li><a className="smoothscroll" href="#materials">Materials</a></li>
              <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="row banner">
            <div className="banner-text">
              <img className="logo" src="images/iwoodcnc.png" alt="iwoodcnc logo" />
              <ul className="social">
                <li><a href="https://www.facebook.com/Iwoodcnc-103032651310709"><FontAwesomeIcon icon={faFacebookSquare} /></a></li>
                <li><a href="https://www.instagram.com/iwoodcnc"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a className="smoothscroll" href="#contact"><FontAwesomeIcon icon={faEnvelope} /></a></li>
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}