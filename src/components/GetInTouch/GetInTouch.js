import React, { Component } from "react";
import { Container, Row, Col, Label, Button, FormGroup } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

//Import Section Title
import SectionTitle from "../common/section-title";

const mailName = "sabiagency.info@gmail.com";

class GetInTouch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "",
      message: "",
    };
  }
  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            <SectionTitle
              title1="Kamis siap membantu "
              title2="anda"
              desc="Percayakan urusan perizinan dokumen anda di bidang hukum dan perpajakan kepada kami.
                            Silahkan isi form berikut untuk mendapatkan bantuan kami."
            />

            <Row>
              <Col lg={4}>
                <div className="contact-address">
                  <h4 className="text-dark mb-4">Info Kontak</h4>
                  <p className="text-muted f-15">
                    Anda dapat menghubungi kontak dan alamat berikut untuk
                    konsultasi dan pengajuan bantuan secara langsung
                  </p>
                  {/* <p className="text-muted f-15 mb-4">Et harum quidem rerum facilis est et expedita sit distinctio at libero.</p> */}
                </div>
                <Row>
                  <Col md={12}>
                    <div className="contact-address">
                      <h5 className="text-dark mb-3 f-16">Kontak dan Alamat</h5>
                      <p className="text-muted f-15">0822-6850-8166 (Mobile)</p>
                      <p className="text-muted f-15">
                        0822-6850-8166 (WhatsApp)
                      </p>
                      <p className="text-muted f-15">
                        Alamat : Jl. Daru – Daru Raya, Perumahan Duta Insani
                        Blok. D, No. 15 Tenayan Raya - Pekanbaru
                      </p>
                    </div>
                  </Col>
                  {/* <Col md={6}>
                                        <div className="contact-address">
                                            <h5 className="text-dark mb-3 f-16">Address - B</h5>
                                            <p className="text-muted f-15">1121 Bombardier Way Southfield, MI 48075</p>
                                        </div>
                                    </Col> */}
                </Row>
              </Col>

              <Col lg={{ size: 7, offset: 1 }}>
                <div className="custom-form mt-4 mt-lg-0">
                  <div id="message"></div>
                  <AvForm name="contact-form" id="contact-form">
                    <Row>
                      {/* <Col lg={6}>
                        <FormGroup className="app-label">
                          <Label for="name">Nama</Label>
                          <AvField
                            name="name"
                            id="name"
                            type="text"
                            className="form-control"
                            placeholder="Your name..."
                            errorMessage="Enter Your Name.."
                            validate={{ required: { value: true } }}
                          />
                        </FormGroup>
                      </Col> */}
                      {/* <Col lg={6}>
                        <FormGroup className="app-label">
                          <Label for="email">Email address</Label>
                          <AvField
                            name="email"
                            id="email"
                            type="email"
                            className="form-control"
                            placeholder="Your email..."
                            errorMessage="Enter Your email..."
                            validate={{
                              required: { value: true },
                              email: { value: true },
                            }}
                          />
                        </FormGroup>
                      </Col> */}
                      <Col lg={12}>
                        <FormGroup className="app-label">
                          <Label for="subject">Subjek</Label>
                          <AvField
                            name="subject"
                            id="subject"
                            type="text"
                            className="form-control"
                            placeholder="Enter Subject.."
                            errorMessage="Enter Your Subject"
                            value={this.state.subject}
                            onChange={(e) =>
                              this.setState({
                                subject: e.target.value,
                              })
                            }
                            validate={{
                              required: { value: true },
                            }}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg={12}>
                        <FormGroup className="app-label">
                          <Label for="comments">
                            Apa yang bisa kami bantu?
                          </Label>
                          <textarea
                            name="comments"
                            id="comments"
                            rows="3"
                            value={this.state.message}
                            className="form-control"
                            placeholder="Enter message.."
                            onChange={(e) =>
                              this.setState({
                                message: e.target.value,
                              })
                            }
                          ></textarea>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <Button
                          type="submit"
                          id="submit"
                          name="send"
                          color="warning"
                          onClick={() =>
                            window.open(
                              `mailto:${mailName}?subject=${this.state.subject}&body=${this.state.message}'`
                            )
                          }
                        >
                          Kirim Pesan <i className="mdi mdi-telegram ml-2"></i>
                        </Button>
                        <div id="simple-msg"></div>
                      </Col>
                    </Row>
                  </AvForm>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default GetInTouch;
