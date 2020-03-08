/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import Swiper from 'react-id-swiper';
import './styles.css';


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '40px',
    borderRadius: '10px',
    maxWidth: '900px',
  }
}

const params = {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
}

const chairImages = [
  "chair1.jpg",
  "chair2.jpg",
  "chair3.jpg"
]

const cornerImages = [
  "corner1.jpg",
  "corner2.jpg"
]

const tableImages = [
  "table1.jpg",
  "table2.jpg",
  "table3.jpg"
]

export default class Gallery extends Component {
  state = {
    openFirst: false,
    openSecond: false,
    openThird: false,
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { openFirst, openSecond, openThird } = this.state;
    return (
      <React.Fragment>
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Gallery</h1>
              <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
                <div className="columns portfolio-item">
                  <div className="overlay-item">
                    <a onClick={() => this.setState({ openFirst: true })}>
                      <img src={`images/${tableImages[0]}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Description of piece made from 18mm birch ply. Designed, built &amp; delivered</h5>
                        </div>
                      </div>
                    </a>
                    <Modal styles={{ modal: styles.container}} closeIconSize={20} open={openFirst} onClose={() => this.setState({ openFirst: false })} center>
                      <Swiper {...params}>
                      {tableImages.map((table, index) => (
                        <img key={`table_${index}`} src={`images/${table}`} className="item-img img-small"/>
                      ))}
                      </Swiper>
                      <h6 style={{ textAlign: 'center', marginTop: '20px'}}>Description of piece made from 18mm birch ply. Designed, built &amp; delivered</h6>
                    </Modal>
                  </div>
                </div>

                <div className="columns portfolio-item">
                  <div className="overlay-item">
                    <a onClick={() => this.setState({ openSecond: true })}>
                      <img src={`images/${chairImages[0]}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Description of piece made from 18mm birch ply. Designed, built &amp; delivered</h5>
                        </div>
                      </div>
                    </a>
                    <Modal styles={{ modal: styles.container}} closeIconSize={20} open={openSecond} onClose={() => this.setState({ openSecond: false })} center>
                      <Swiper {...params}>
                      {chairImages.map((chair, index) => (
                        <img key={`chair_${index}`} src={`images/${chair}`} className="item-img img-small"/>
                      ))}
                      </Swiper>
                      <h6 style={{ textAlign: 'center', marginTop: '20px'}}>Description of piece made from 18mm birch ply. Designed, built &amp; delivered</h6>
                    </Modal>
                  </div>
                </div>

                <div className="columns portfolio-item">
                  <div className="overlay-item">
                    <a onClick={() => this.setState({ openThird: true })}>
                      <img src={`images/${cornerImages[0]}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Description of piece made from 18mm birch ply. Designed, built &amp; delivered</h5>
                        </div>
                      </div>
                    </a>
                    <Modal styles={{ modal: styles.container}} closeIconSize={20} open={openThird} onClose={() => this.setState({ openThird: false })} center>
                      <Swiper {...params}>
                      {cornerImages.map((corner, index) => (
                        <img key={`corner_${index}`} src={`images/${corner}`} className="item-img img-small"/>
                      ))}
                      </Swiper>
                      <h6 style={{ textAlign: 'center', marginTop: '20px'}}>Description of piece made from 18mm birch ply. Designed, built &amp; delivered</h6>
                    </Modal>
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