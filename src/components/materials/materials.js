import React, { Component } from 'react';
export default class Materials extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="materials">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Materials</h1>
              <div className="accordion-container">
                <button className="accordion-materials pale-lilac">Aluminium</button>
                <div className="panel">
                  <p>
                    Using our specialist aluminium cutting tools we create and manufacture parts for signs, components 
                    and finishing touches from a range of non – ferrous metals including brass and copper
                  </p>
                </div>

                <button className="accordion-materials pale-green">Hardwoods</button>
                <div className="panel">
                    <p>
                      Cutting hardwoods is what were best known for. We adjust all of our cutting parameters to achieve 
                      the cleanest sharpest edges for a variety of wood types and density’s. Our hardwood selection is as follows:
                    </p>
                    <div className="panel-list">
                      <ul>
                        <li>
                          White Oak
                        </li>
                        <li>
                          European Oak
                        </li>
                        <li>
                          White Beech
                        </li>
                        <li>
                          Steamed Beech
                        </li>
                        <li>
                          Poplar/Tulipwood
                        </li>
                        <li>
                          Canadian Hard Maple
                        </li>
                        <li>
                          American Walnut
                        </li>
                        <li>
                          Meranti
                        </li>
                        <li>
                          Douglas Fir
                        </li>
                        <li>
                          American Cherry
                        </li>
                      </ul>
                    </div>
                </div>
                <button className="accordion-materials pale-pink">Softwoods</button>
                <div className="panel">
                    <p>
                      Our machinery is capable of cutting parts to a maximum size of 1250 x 800 and can cut a variety 
                      of softwood sheet materials such as Interior and exterior strains of Birch Ply. Many of our gallery 
                      items have been made using a particular grade of Birch plywood noted as BB/BB
                    </p>
                </div>
                <button className="accordion-materials pale-blue">MDF</button>
                <div className="panel">
                    <p>
                      MDF is a popular material to cut with. Since it’s typically an affordable material 
                      to trial ideas and assembly’s as well as being relatively easy to paint and finish. 
                    </p>
                </div>
            </div>
            </div>
          </div> {/* row End */}
        </section>
      </React.Fragment>
    )
  }
}