import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Particles from "react-particles-js";
import img from "../../assets/images/hero-6-bg.jpg";

const whatsAppLink =
  "https://api.whatsapp.com/send?phone=6282172575501&text=Halo%20Peputra,%20Saya%20mau%20%20konsultasi%20gratis%20tentang%20pajak%20dan%20hukum%20bisa?";

class Section extends Component {
  whatsAppRedirect = () => {
    window.open(whatsAppLink);
  };
  render() {
    return (
      <React.Fragment>
        <section
          className="hero-6-bg position-relative vh-100 d-flex align-items-center"
          style={{ background: `url(${img}) center center no-repeat` }}
          id="home"
        >
          <div className="bg-overlay op-75">
            <Particles
              style={{ position: "absolute" }}
              params={{
                particles: {
                  number: {
                    value: 55,
                  },
                  size: {
                    value: 4,
                  },
                },
                interactivity: {
                  events: {
                    onhover: {
                      enable: true,
                      mode: "repulse",
                    },
                  },
                },
                move: {
                  radius: 1,
                },
              }}
            />
          </div>
          <Container>
            <Row className="justify-content-center">
              <Col lg={6}>
                <div className="hero-6-title-content text-center">
                  <div className="hero-6-title-icon mb-4">
                    <i className="mdi mdi-axis-arrow mdi-spin text-white h2"></i>
                  </div>
                  <h1 className="text-white hero-4-title font-weight-light line-height-1_4 mb-4">
                    Konsultan Hukum dan Pajak Terbaik di Pekanbaru
                  </h1>
                  <p className="text-white-70">
                    Peputra Jaya merupakan konsultan hukum dan pajak terbaik di
                    Pekanbaru yang berpengalaman lebih dari 15 tahun. Kepuasan
                    klien merupakan prioritas utama kami dalam bekerja.
                  </p>
                  <Button
                    color="warning"
                    className="mt-4"
                    onClick={this.whatsAppRedirect}
                  >
                    Konsultasi Gratis via Whatsapp{" "}
                    <span className="ml-2 right-icon">&#8594;</span>
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
