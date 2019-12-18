import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faEtsy, faFacebookSquare } from "@fortawesome/free-brands-svg-icons"

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
                <li><a href="/"><FontAwesomeIcon icon={faFacebookSquare} /></a></li>
                <li><a href="/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href="/"><FontAwesomeIcon icon={faEtsy} /></a></li>
              </ul>
              <ul className="copyright">
                <li>© Copyright 2019 iWoodCNC</li>
              </ul>
            </div>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
          </div>
        </footer>
      </React.Fragment>
    )
  }
}