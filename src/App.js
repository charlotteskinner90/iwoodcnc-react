import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Gallery from './components/gallery/gallery';
import Testimonials from  './components/testimonials/testimonials';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';
import resumeData from './components/header/resumeData';
import Services from './components/services/services';
import Materials from './components/materials/materials';
import { ToastContainer } from 'react-toastify';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToastContainer newestOnTop />
        <Header resumeData={resumeData} />
        <About />
        <Gallery />
        <Services />
        <Materials />
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default App;
