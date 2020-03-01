import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import { Formik } from 'formik';

export default class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = { subject: '', message: '', name: '', email: '' };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(param, event) {
    this.setState({ [param]: event.target.value})
  }
  
  sendMail(contactForm) {
    const { name, email, message } = this.state
    const templateParams = {
      "from_name": name,
      "from_email": email,
      "project_request": message,
    };
    
    emailjs.send('gmail_portfolio','online_resume', templateParams, 'user_A6sfgBTpaPNhTyScId1iJ')
      .then((response) => {
        alert("Thank you for your enquiry. I will be in touch soon.", response);
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        alert("Oops! Something isn't right, please try sending again.", err);
        console.log('FAILED...', err);
      });
  }

  resetForm() {
    this.setState({
      subject: '', message: '', name: '', email: ''
    })
  }

  render() {
    return (
      <React.Fragment>
        <section id="contact">
          <div className="row section-head">
            {/* <div className="two columns header-col"> */}
              <h1 style={{ color: '#000000' }}>Get In Touch.</h1>
            {/* </div> */}
          </div>
          <div className="row">
            <div className="eight columns">
              {/* form */}
              <Formik
                initialValues={this.state}
                onSubmit={async () => {
                  // await this.sendMail()
                  this.resetForm()
                }}
              >
                {({ handleSubmit }) => (
                  <form onSubmit={handleSubmit} id="contactForm" name="contactForm">
                    <fieldset>
                      <div>
                        <label htmlFor="name">Name <span className="required">*</span></label>
                        <input type="text" size={35} id="name" name="name" onChange={this.handleChange.bind(this, 'name')} value={this.state.name} />
                      </div>
                      <div>
                        <label htmlFor="email">Email <span className="required">*</span></label>
                        <input type="text" size={35} id="email" name="email" onChange={this.handleChange.bind(this, 'email')} value={this.state.email} />
                      </div>
                      <div>
                        <label htmlFor="subject">Subject</label>
                        <input type="text" size={35} id="subject" name="subject" onChange={this.handleChange.bind(this, 'subject')} value={this.state.subject} />
                      </div>
                      <div>
                        <label htmlFor="message">Message <span className="required">*</span></label>
                        <textarea cols={50} rows={15} id="message" name="message" onChange={this.handleChange.bind(this, 'message')} value={this.state.message} />
                      </div>
                      <div>
                        <button type="submit" className="submit">Submit</button>
                        <span id="image-loader">
                          <img alt="" src="images/loader.gif" />
                        </span>
                      </div>
                    </fieldset>
                  </form>
                )}
              </Formik>{/* Form End */}
            </div>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  iwoodCNC<br />
                  Brighton <br />
                  UK<br />
                  <span>01234567890</span>
                </p>
              </div>
            </aside>
          </div>
        </section>
      </React.Fragment>
    )
  }
}