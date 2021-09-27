import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Footer link
import FooterLinks from "./footer-links";

//Import Logo
import logodark from "../../assets/images/peputra-circle.png";

class Footer extends Component {
  state = {
    links: [
      {
        id: 1,
        title: "Services",
        child: [
          { title: "Akta Pendirian CV/PT/Koperasi", link: "/" },
          { title: "NIB", link: "/" },
          {
            title: "Pengurusan NPWP, PKP dan Pengurusan Pajak Bulanan",
            link: "/",
          },
          { title: "Pajak SPT Tahunan / Masa", link: "/" },
          {
            title: "Izin Industri, Dinas Kesehatan dan Sertifikat Halal MUI",
            link: "/",
          },
          { title: "Akte Kelahiran / Akte Kawin", link: "/" },
          { title: "Ganti nama, Adopsi, Pisah WNI", link: "/" },
          { title: "IMB", link: "/" },
          { title: "Perpanjang STNK dan BPKP", link: "/" },
          { title: "Mutasi/ KIR/ Izin Usaha Trayek", link: "/" },
          { title: "Hak Paten", link: "/" },
        ],
      },
      // {
      //   id: 2,
      //   title: "About Us",
      //   child: [
      //     { title: "Contact Us", link: "/" },
      //     { title: "FAQs", link: "/" },
      //     { title: "Blog", link: "/" },
      //     { title: "Privacy Policy", link: "/" },
      //   ],
      // },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <section className="footer">
          <Container>
            <Row>
              <Col lg={4}>
                <div className="mb-4 text-center">
                  <Link to="/">
                    <img
                      src={logodark}
                      alt=""
                      className="logo-dark"
                      width="200"
                    />
                  </Link>
                  <p className="text-muted mt-4 mb-2">info.peputra@gmail.com</p>
                  <h6 className="text-muted font-weight-normal">
                    0821-7257-5501 (Mobile)
                  </h6>
                  <h6 className="text-muted font-weight-normal">
                    0821-7257-5501 (Whatsapp)
                  </h6>
                </div>
              </Col>
              <Col lg={8}>
                <Row>
                  {this.state.links.map((link, key) => (
                    <Col key={key} md={8}>
                      <h6 className="footer-list-title text-dark mb-3">
                        {link.title}
                      </h6>
                      <ul className="list-unstyled company-sub-menu text-muted">
                        {link.child.map((fLink, key) => (
                          <li key={key}>{fLink.title}</li>
                        ))}
                      </ul>
                    </Col>
                  ))}

                  <Col md={4}>
                    <h6 className="footer-list-title text-dark mb-3">
                      Alamat kami
                    </h6>
                    <p className="text-muted f-14">
                      Jl. Daru – Daru Raya, Perumahan Duta Insani Blok. D, No.
                      15 Tenayan Raya - Pekanbaru
                    </p>
                    <h6 className="text-muted pb-2">
                      Email: info.peputra@gmail.com
                    </h6>
                    <ul className="list-unstyled footer-social-list mt-4">
                      <li className="list-inline-item">
                        <a
                          target={"_blank"}
                          rel="noopener noreferrer"
                          href={
                            "https://www.facebook.com/Peputra-Jaya-106458648437225"
                          }
                        >
                          <i className="mdi mdi-facebook"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          target={"_blank"}
                          rel="noopener noreferrer"
                          href={"https://www.instagram.com/peputrajaya/"}
                        >
                          <i className="mdi mdi-instagram"></i>
                        </a>
                      </li>
                      {/* <li className="list-inline-item">
                        <Link to="#">
                          <i className="mdi mdi-linkedin"></i>
                        </Link>
                      </li> */}
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* Render footer links */}
            <FooterLinks />
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Footer;
