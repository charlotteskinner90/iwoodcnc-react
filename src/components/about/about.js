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
                    <p>iwoodCNC provides bespoke CNC services from 3D drawings to fully finished assembled projects. 
                      Based in Brighton, we are a small, friendly cutting and fitting service offering precision 
                      cut parts and finishes at a competitive rate.
                    </p>
                  </div>
                </div>
                <div className="columns about-item blue-blob">
                  <div>
                  <p>Our services are fit for a variety of business’ and individuals ranging from set designs, construction,
                     exhibitions, home furniture, batch products and bespoke one-off custom designs. We also cut and produce 
                     signage as well as custom branded swag for your office or business.
                  </p>
                  </div>
                </div>
                <div className="columns about-item pink-blob">
                  <div>
                    <p>Pop over to our gallery page to view some of the projects we’ve made for our clients and follow the contact information on our website if you have a project you wish to CNC. Our CAD technicians can convert your drawing or sketch into a CNC friendly format usually within 24hrs.
                    </p>
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