import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Components
import SectionTitle from "../../components/common/section-title";
import ClientsSlider from "./Clients-slider";

//Import Images
import client1 from "../../assets/images/user/img-1.jpg";
import client2 from "../../assets/images/user/img-2.jpg";
import client3 from "../../assets/images/user/img-3.jpg";
import client4 from "../../assets/images/user/img-4.jpg";
import client5 from "../../assets/images/user/img-5.jpg";

class Clients extends Component {
  state = {
    clients: [
      {
        image: client1,
        name: "Malibu Foto",
        post: "Studio Photo",
        desc: "Peputra Jaya memudahkan kami dalam urusan hukum dan perpajakan. Kualitas kerja dan pelayanan yang diberikan sangat memuaskan kami sebagai klien. Very Recomended",
      },
      {
        image: client2,
        name: "Dapur Cokelat",
        post: "F&B",
        desc: "Sudah 5 tahun kami menggunakan jasa Peputra Jaya dalam mengelola dan melaporkan Pajak SPT Tahunan. Hasil kerja yang diberikan tidak pernah mengecewakan. Terima kasih Peputra Jay",
      },
      {
        image: client3,
        name: "CV Aruna Abadi",
        post: "Kontraktor",
        desc: "Jasa kontraktor yang semakin maju membuat kami semakin sibuk dan membutuhkan bantuan untuk pengurusan Izin Mendirikan Bangunan. Untungnya kami mendapat rekomendasi dari seorang karyawan untuk menggunakan jasa Peputra Jaya. Hasilnya sangat bagus dan tidak mengecewakan",
      },
      {
        image: client4,
        name: "PT Oke Shop",
        post: "Commerce",
        desc: "Sejak menggunakan jasa Peputra Jaya, kami sangat terbantu dalam urusan hukum dan perpajakan. Harga yang diberikan sesuai dengan kualitas kerja yang sangat bagus. Worth it pokoknya",
      },
      {
        image: client5,
        name: "PT Takadeli Indonesia",
        post: "Sektor Privat",
        desc: "Berkat bantuan dari Peputra Jaya usaha kami menjadi terbantu, diantaranya dalam pengurusan akta pendirian PT dan pengurusan Izin Mendirikan Bangunan (IMB). Terima kasih Peputra Jaya, semoga semakin maju dan menjadi nomor 1 sebagai konsultan hukum dan pajak.",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="clients">
          <Container>
            <SectionTitle
              title1="Klien "
              title2="Kami"
              desc="Banyak klien yang telah terbantu dan puas terhadap pelayanan kami."
            />
            <Row>
              <Col lg={4}>
                <h3 className="font-weight-normal mt-3 line-height-1_4">
                  Kata mereka tentang{" "}
                  <span className="font-weight-medium text-warning">
                    pelayanan kami{" "}
                  </span>
                </h3>
                <div className="testi-border my-4"></div>
                <p className="text-muted">
                  Simak testimoni klien tentang pelayanan kami yang memudahkan
                  pekerjaan mereka
                </p>
              </Col>
              <Col lg={8}>
                <ClientsSlider clients={this.state.clients} />
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Clients;
