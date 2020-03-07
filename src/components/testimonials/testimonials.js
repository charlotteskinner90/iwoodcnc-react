import React, { Component } from 'react';
export default class Testimonials extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="testimonials">
          <div className="text-container">
            <div className="row">
              <div className="two columns header-col">
                <h1><span>Client Testimonials</span></h1>
              </div>
              <div className="ten columns flex-container">
                <div className="flexslider">
                  <ul className="slides">
                    <li>
                      <blockquote>
                        <p>
                          “The quality and craftsmanship is really impressive. Fantastic attentive service all round”
                        </p>
                        <cite>Joy Voysey, Hove UK</cite>
                      </blockquote>
                    </li>
                    <li>
                      <blockquote>
                        <p>
                          “An amazing custom job on my set of bookcase speakers. Slick quality work”
                        </p>
                        <cite>Dominic Duff, Worthing UK</cite>
                      </blockquote>
                    </li>
                    <li>
                      <blockquote>
                        <p>
                          “Makes perfect use of the space available. Brilliant finishes"
                        </p>
                        <cite>Robert Poffel, Hove UK</cite>
                      </blockquote>
                    </li>
                    <li>
                      <blockquote>
                        <p>
                          “Excellent service. Really clear, helpful and informative. Will definitely come back”
                        </p>
                        <cite>Scott Daniels, Brighton UK</cite>
                      </blockquote>
                    </li>
                  </ul>
                </div>
              </div> 
            </div> {/* row ends */}
          </div>  {/* text-container ends */}
        </section>
      </React.Fragment>
    )
  }
}