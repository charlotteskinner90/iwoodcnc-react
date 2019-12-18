import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faEtsy, faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#portfolio">Gallery</a></li>
              <li><a className="smoothscroll" href="#services">Services</a></li>
              <li><a className="smoothscroll" href="#materials">Materials</a></li>
              <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul> {/* end #nav */}
          </nav> {/* end #nav-wrap */}
          <div className="row banner">
            <div className="banner-text">
              <img className="logo" src="images/iwoodcnc.png" alt="iwoodcnc logo" />
              <h1 className="responsive-headline">{resumeData.name}</h1>
              <h3>Brighton based <span>{resumeData.role}</span></h3>
              <ul className="social">
                <li><a href="/"><FontAwesomeIcon icon={faFacebookSquare} /></a></li>
                <li><a href="/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href="/"><FontAwesomeIcon icon={faEtsy} /></a></li>              </ul>
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