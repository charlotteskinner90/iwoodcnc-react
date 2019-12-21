import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="twelve columns collapsed">
            <h1>About</h1>
              <div className="bgrid-thirds">
                <div className="columns about-item green-blob">
                  <div>
                    <h5>ABOUT US</h5>
                    <p>Based in Brighton, Sussex</p>
                    <p>Precision CNC bespoke cutting service</p>
                  </div>
                </div>
                <div className="columns about-item blue-blob">
                  <div>
                    <h5>LATEST PRODUCTS</h5>
                  </div>
                </div>
                <div className="columns about-item pink-blob">
                  <div>
                    <h5>SERVICES</h5>
                    <p>Complete CAD services</p>
                    <p>Custom made furniture</p>
                    <p>Storefront signs & swag</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
} 