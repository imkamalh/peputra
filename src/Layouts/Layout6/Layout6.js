import React, { Component, Suspense } from "react";
import "react-whatsapp-widget/dist/index.css";
import WhatsAppWidget from "react-whatsapp-widget";
// const WhatsApp = React.lazy(() => import("react-whatsapp-widget"));

const NavbarPage = React.lazy(() =>
  import("../../components/Navbar/Navbar_Page")
);
const Section = React.lazy(() => import("./Section"));
const Service = React.lazy(() => import("../../components/Service/service"));
const About = React.lazy(() => import("../../components/About/about"));
const Feature = React.lazy(() => import("../../components/Features/feature"));
const Counter = React.lazy(() => import("../../components/Counter/counter"));
const Clients = React.lazy(() => import("../../components/Clients/Clients"));
const GetInTouch = React.lazy(() =>
  import("../../components/GetInTouch/GetInTouch")
);
const Subscribe = React.lazy(() =>
  import("../../components/Subscribe/Subscribe")
);
const Footer = React.lazy(() => import("../../components/Footer/footer"));

const phoneNumber = "6282172575501";
const message = "Halo kami dari Peputra Jaya, ada yang bisa kami bantu ?";
const companyName = "Peputra Jaya";
const sendButton = "Kirim";

class Layout6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 1, idnm: "home", navheading: "Beranda" },
        { id: 2, idnm: "services", navheading: "Layanan" },
        { id: 3, idnm: "about", navheading: "Tentang Kami" },
        { id: 4, idnm: "clients", navheading: "Klien" },
      ],
      pos: document.documentElement.scrollTop,
      imglight: true,
      navClass: "navbar-light",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > this.state.pos) {
      this.setState({ navClass: "navbar-light nav-sticky", imglight: false });
    } else {
      this.setState({ navClass: "navbar-light", imglight: true });
    }
  };

  Loader = () => {
    return (
      <div id="preloader">
        <div id="status">
          <div className="spinner">
            <div className="dot1"></div>
            <div className="dot2"></div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <Suspense fallback={this.Loader()}>
          {/* Importing Navbar */}
          <NavbarPage
            navItems={this.state.navItems}
            navClass={this.state.navClass}
            imglight={this.state.imglight}
            isLight={true}
          />

          {/* Importing section */}
          <Section />

          {/* Importing service */}
          <Service />

          {/* Importing about us */}
          <About />

          {/* Importing feature */}
          <Feature />

          {/* Importing counter */}
          <Counter />

          {/* Importing clients */}
          <Clients />

          {/* Importing get in touch */}
          <GetInTouch />

          {/* Importing subscribe */}
          <Subscribe />

          {/* Importing footer */}
          <Footer />
        </Suspense>
        <div style={style.whatsAppWidget}>
          <WhatsAppWidget
            phoneNumber={phoneNumber}
            message={message}
            companyName={companyName}
            sendButton={sendButton}
          />
        </div>
      </React.Fragment>
    );
  }
}

const style = {
  whatsAppWidget: {
    zIndex: 10,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "sticky",
  },
};

export default Layout6;
