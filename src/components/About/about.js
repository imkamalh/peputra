import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

const missionList = [
  "memberikan solusi dan informasi yang cepat dan tepat",
  "membantu mempersiapkan kebutuhan client di bidang legalitas usaha, guna menunjang kelancaran aktivitas perusahaan",
  "memiliki loyalitas tinggi dan mampu menjaga kerahasiaan perusahaan client",
  "kualitas dan profesionalisme yang tinggi",
  "berkomitmen tinggi dalam setiap pelayanan",
];

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="about">
          <Container>
            <SectionTitle
              title1="Tentang "
              title2="Kami"
              desc="Kami PEPUTRA JAYA CV. RIDYNA adalah perusahaan layanan yang bergerak di bidang Jasa Urus Izin Usaha/ Jasa Perizinan baik Perusahaan Kecil, Menengah, maupun Besar, baik Perusahaan Berbadan Hukum, Perorangan, dan Perusahaan Lokal."
              alignLeft
            />

            <Row>
              <Col md={4}>
                <h2 className="font-weight-light line-height-1_6 text-dark mb-4">
                  Kami memberi solusi terbaik untuk perusahaan anda
                </h2>
              </Col>
              <Col md={{ size: 7, offset: 1 }}>
                <Row>
                  <Col md={6}>
                    <h6 className="text-dark font-weight-light f-20 mb-3">
                      Misi kami
                    </h6>
                    {missionList.map((val, i) => {
                      return (
                        <p key={i} className="text-muted font-weight-light">
                          {"- "}
                          {val}
                        </p>
                      );
                    })}
                  </Col>
                  <Col md={6}>
                    <h6 className="text-dark font-weight-light f-20 mb-3">
                      Visi kami
                    </h6>
                    <p className="text-muted font-weight-light">
                      Kami memiliki visi untuk menjadi yang terbaik, terdepan,
                      terpercaya dalam bidang Jasa Pengurusan Perizinan Usaha,
                      baik perusahaan berbadan hukum, perorangan dan perusahaan
                      lokal.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default About;
