import React, { Component } from 'react';
export default class Gallery extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Gallery</h1>
            </div>
          </div> {/* row End */}
        </section>
      </React.Fragment>
    )
  }
}