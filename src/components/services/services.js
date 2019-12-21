import React, { Component } from 'react';
export default class Services extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="services">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Services</h1>
              <div className="bgrid-quarters s-bgrid-thirds cf">
                <div className="columns services-item green-blob">
                  <div>
                    <h5>BESPOKE FURNITURE</h5>
                  </div>
                </div>
                <div className="columns services-item blue-blob">
                  <div>
                    <h5>STOREFRONT SIGNS & OTHER SIGNAGE</h5>
                  </div>
                </div>
                <div className="columns services-item pink-blob">
                  <div>
                    <h5>CAD DRAWINGS</h5>
                  </div>
                </div>
                <div className="columns services-item lilac-blob">
                  <div>
                    <h5>CNC CUTTING SERVICE</h5>
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