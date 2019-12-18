import React, { Component } from 'react';
export default class Blog extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="blog">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Blog</h1>
            </div>
          </div> {/* row End */}
        </section>
      </React.Fragment>
    )
  }
}