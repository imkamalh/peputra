import React, { Component } from "react";
import { Container } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import FeatureBox from "./feature-box";

//Import Images
import feature1 from "../../assets/images/features/img-1.png";
import feature2 from "../../assets/images/features/img-2.png";
import feature3 from "../../assets/images/features/img-3.png";

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        {
          id: 1,
          img: feature1,
          icon: "mdi  mdi-laptop-mac",
          title: "Konsultasi Gratis",
          desc: "Konsultasikan dokumen perizinan yang anda butuhkan secara gratis. Berlaku hanya untuk sekali konsultasi.",
          link: "/",
        },
        {
          id: 2,
          img: feature2,
          icon: "mdi  mdi-account-group",
          title: "Hasil pekerjaan sesuai keinginan client",
          desc: "Kami berkomitmen untuk selalu memberikan hasil kerja terbaik yang sesuai dengan keinginan client. Kepuasan client prioritas utama bagi kami.",
          link: "/",
        },
        {
          id: 3,
          img: feature3,
          icon: "mdi  mdi-chart-bell-curve",
          title: "Rahasia perusahaan client terjaga",
          desc: "Seluruh informasi yang berkaitan dengan rahasia perusahaan client 100% aman dan selalu kami jaga.",
          link: "/",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section" id="features">
          <Container>
            <SectionTitle
              title1="Mengapa klien memilih "
              title2="kami?"
              desc="Peputra Jaya merupakan konsultan hukum dan pajak di Pekanbaru yang telah berpengalaman sejak tahun 2004 dan telah berbadan hukum. Kami memiliki tim yang selalu mengutamakan kualitas kerja terbaik demi kepuasan klien."
            />

            <FeatureBox features={this.state.features} />
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Features;
