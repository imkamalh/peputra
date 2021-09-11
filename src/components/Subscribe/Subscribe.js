import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "reactstrap";

//Import Images
import icon1 from "../../assets/images/icon/1.png";
import icon2 from "../../assets/images/icon/2.png";
import icon3 from "../../assets/images/icon/3.png";

const mailName = "sabiagency.info@gmail.com";
const subject = "Daftar - Peputra Jaya Newsletter";
const message = "Saya ingin daftar Peputra Jaya Newsletter";

class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <Container>
            <Row className="justify-content-center">
              <Col lg={7}>
                <Row>
                  <Col xs={4}>
                    <div className="subscribe-icon">
                      <img
                        src={icon1}
                        alt=""
                        className="img-fluid mx-auto d-block"
                      />
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className="subscribe-icon">
                      <img
                        src={icon2}
                        alt=""
                        className="img-fluid mx-auto d-block"
                      />
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className="">
                      <img
                        src={icon3}
                        alt=""
                        className="img-fluid mx-auto d-block"
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col lg={6}>
                <div className="text-center mt-5 mb-4">
                  <h6 className="text-muted font-weight-normal">
                    Daftarkan email anda{" "}
                    <span className="d-block mt-2">
                      untuk update terbaru mengenai kami
                    </span>
                  </h6>
                </div>
                <div className="text-center subscribe-form mt-4">
                  <Form action="#">
                    <input
                      type="text"
                      placeholder="Alamat email anda..."
                      value={this.state.email}
                      onChange={(e) => {
                        e.preventDefault();
                        this.setState({
                          email: e.target.value,
                        });
                      }}
                    />
                    <Button
                      type="submit"
                      color="warning"
                      onClick={() =>
                        window.open(
                          `mailto:${mailName}?subject=${subject}&body=${message}'`
                        )
                      }
                    >
                      Daftar
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Subscribe;
