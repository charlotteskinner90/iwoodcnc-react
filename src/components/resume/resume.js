import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="resume">
          <div className="row education">
            <div className="three columns header-col">
              <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Code Institute</h3>
                  <p className="info">Diploma in Full Stack Web Development (1st Class) <span>•</span> <em className="date">July 2019</em></p>
                  <p>
                    I studied part-time for this diploma whilst working full-time as a junior software developer.
                    The course was portfolio based, focused on building a solid stack of projects to show prospective employers.
                    While studying the course I learned the following technologies:
                  </p>
                  <ul className="tech-list">
                    <li>CSS (& SASS)</li>
                    <li>JavaScript</li>
                    <li>MongoDB</li>
                    <li>PostgresQL</li>
                    <li>SQL</li>
                    <li>Python (Flask & Django frameworks)</li>
                    <li>Heroku deployment</li>
                    <li>AWS</li>
                  </ul>
                </div>
              </div> {/* item end */}
            </div> {/* main-col end */}
          </div> {/* End Education */}
          {/* Work
        ----------------------------------------------- */}
          <div className="row work">
            <div className="three columns header-col">
              <h1><span>Work</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Enlitened @ The Student Room</h3>
                  <p className="info">Frontend Engineer <span>•</span> <em className="date">Oct 2019 - Present</em></p>
                  <p>
                    Enlitened is a unique continuous improvement programme for student engagement and wellbeing.
                    My current role as a Frontend Engineer with Enlitened is to maintain the data dashboard web application 
                    and mobile application.
                    I am also involved in developing new exciting features to improve student engagement.
                    Current tech stack includes:
                  </p>
                  <ul className="tech-list">
                    <li>React</li>
                    <li>React Native</li>
                    <li>Redux</li>
                    <li>Python (Flask)</li>
                  </ul>
                </div>
              </div> {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>My PT Hub</h3>
                  <p className="info">Junior Application Developer <span>•</span> <em className="date">Nov 2018 - Present</em></p>
                  <p>
                    This was my second development role, as an application developer focusing primarily on mobile technologies. 
                    The tech stack included:
                  </p>
                  <ul className="tech-list">
                    <li>React Native</li>
                    <li>Redux</li>
                    <li>VueJS</li>
                    <li>Laravel</li>
                  </ul>
                </div>
              </div> {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Madgex</h3>
                  <p className="info">Junior Software Developer <span>•</span> <em className="date">Oct 2017 - Nov 2018</em></p>
                  <p>
                  This was my first junior software developer role since I started coding. Madgex creates job board software for a variety of 
                  big company names globally. My role in the Enhancements team was to enable extra functionality for our software at the
                   clients request. I worked predominantly in back-end development but I had the opportunity to pick up front end 
                   design changes to assist during periods of high demand. Since July 2018 I was given more responsibility in terms of 
                   taking on more complex development changes, and took ownership of the rollout of Google For Jobs to our EU and UK clients.
                    The technologies I used included:
                  </p>
                  <ul className="tech-list">
                    <li>C# (.NET Core)</li>
                    <li>CSS (& SASS)</li>
                    <li>JavaScript</li>
                    <li>SQL Server</li>
                  </ul>
                </div>
              </div> {/* item end */}
            </div> {/* main-col end */}
          </div> {/* End Work */}
          {/* Skills
        ----------------------------------------------- */}
          <div className="row skill">
            <div className="three columns header-col">
              <h1><span>Experience</span></h1>
            </div>
            <div className="nine columns main-col">
              <h1>Front End</h1>
              <p>I'm skilled in User Experience Design using the combination of HTML5, CSS3 & Javascript. I use frameworking tools to plan my work, and then translate this into creating the clients' vision for their site. </p>
              <h1>Back End</h1>
              <p>I specialise in data-driven web applications. Many of my projects utilise document-based data. I use Python and Django in conjunction with MongoDB to process and present information. I also have experience in SQL database management. </p>
              <h1 style={{ marginTop: '10px'}}>Technologies</h1>
              <div className="bars">
                <ul className="skills">
                  <li><span className="bar-expand react-native" /><em>React Native/React</em></li>
                  <li><span className="bar-expand redux" /><em>Redux</em></li>
                  <li><span className="bar-expand jquery" /><em>JavaScript</em></li>
                  <li><span className="bar-expand css" /><em>CSS</em></li>
                  <li><span className="bar-expand html5" /><em>HTML5</em></li>
                  <li><span className="bar-expand python" /><em>Python (Flask & Django)</em></li>
                </ul>
              </div>{/* end skill-bars */}
            </div> {/* main-col end */}
          </div> {/* End skills */}
        </section>
      </React.Fragment>
    )
  }
}