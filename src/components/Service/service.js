import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import ServiceBox from "./services-box";

const whatsAppLink =
  "https://api.whatsapp.com/send?phone=6282172575501&text=Halo%20Peputra,%20Saya%20mau%20%20konsultasi%20gratis%20tentang%20pajak%20dan%20hukum%20bisa?";

class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          icon: "pe-7s-headphones service-icon",
          title: "Akta Pendirian CV/PT/Koperasi",
          desc: "Segera urus akta pendirian usaha anda. Percayakan pada kami.",
        },
        {
          icon: "pe-7s-tools service-icon",
          title: "Nomor Induk Berusaha",
          desc: "Dapatkan nomor identitas usaha anda. Jangan bingung, kami siap membantu.",
        },
        {
          icon: "pe-7s-display1 service-icon",
          title: "Pengurusan NPWP, PKP dan Pengurusan Pajak Bulanan",
          desc: "Lindungi bisnismu dari masalah hukum akibat kelalaian dalam pengurusan dokumen pajak. Dengan pengalaman selama 15 tahun, percayakan hal tersebut pada kami.",
        },
        {
          icon: "pe-7s-cup service-icon",
          title: "Pajak Spt Tahunan/Masa",
          desc: "Lakukan pembayaran SPT tahunan agar anda terhindar dari masalah. Tidak punya waktu mengurusnya? Serahkan kepada kami.",
        },
        {
          icon: "pe-7s-light service-icon",
          title: "Izin Industri, Dinas Kesehatan dan Sertifikat Halal MUI",
          desc: "Segeralah urus perizinan usaha anda yang bergerak di sektor pangan/obat-obatan. Anda cukup duduk santai, biar kami yang mengurus izin tersebut untuk anda.",
        },
        {
          icon: "pe-7s-graph1 service-icon",
          title: "Akte kelahiran / Akte kawin",
          desc: "Jangan menunda-nunda pembuatan dokumen anda dan keluarga. Tidak punya waktu? Kami siap menolong anda hingga dokumen tersebut selesai.",
        },
        {
          icon: "pe-7s-graph1 service-icon",
          title: "Ganti nama, adopsi, Pisah WNI",
          desc: "Urus dokumen anda sekarang juga agar tidak terjadi masalah di kemudian hari. Percayakan hal tersebut kepada kami, kami siap membantu anda sepenuh hati.",
        },
        {
          icon: "pe-7s-graph1 service-icon",
          title: "IMB",
          desc: "Jangan abaikan perizinan dalam mendirikan bangunan agar terhindar dari masalah hukum. Butuh bantuan? hubungi kami segera untuk mendapatkan pelayanan terbaik.",
        },
        {
          icon: "pe-7s-graph1 service-icon",
          title: "Perpanjang STNK dan BPKB",
          desc: "Selalu ingat masa berakhir berlakunya STNK dan BPKB anda, jangan biarkan masa berlakunya habis. Kami siap membantu anda memperpanjang dokumen tersebut.",
        },
        {
          icon: "pe-7s-graph1 service-icon",
          title: "Mutasi/ KIR/ Izin Usaha Trayek",
          desc: "Jangan abaikan izin kendaraan anda untuk jasa angkutan yang anda miliki agar terhindar dari masalah hukum. Percayakan kepada kami untuk mengurus perizinan tersebut.",
        },
        {
          icon: "pe-7s-graph1 service-icon",
          title: "Hak Paten",
          desc: "Lindungi hasil penemuan/karya anda agar tidak dicuri orang dengan mendaftarkan hak patennya. Tenang saja, kami siap menolong anda mendaftarkan hak paten tersebut.",
        },
        {
          icon: "pe-7s-graph1 service-icon",
          title: "Dan lain-lain",
          desc: "masih banyak pelayanan lain yang kami berikan di bidang hukum dan pajak. Info lebih lanjut hubungi kami",
          readMoreDesc: "disini",
          readMore: whatsAppLink,
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section" id="services">
          <Container>
            <SectionTitle
              title1="Layanan "
              title2="Kami"
              desc="Kami menawarkan beberapa layanan konsultasi hukum dan pajak yang dapat membantu perusahaan anda"
            />

            <Row>
              <ServiceBox services={this.state.services} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Service;
