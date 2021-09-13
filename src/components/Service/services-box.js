import React, { Component } from "react";
import { Col } from "reactstrap";
import one from "../../assets/images/tax.svg";
import two from "../../assets/images/code.svg";
import three from "../../assets/images/letter.svg";
import four from "../../assets/images/wallet.svg";
import five from "../../assets/images/shield.svg";
import six from "../../assets/images/contract.svg";
import seven from "../../assets/images/alter.svg";
import eight from "../../assets/images/balance.svg";
import nine from "../../assets/images/extend.svg";
import ten from "../../assets/images/permission.svg";
import eleven from "../../assets/images/patent.svg";
import twelve from "../../assets/images/ellipsis.svg";

class ServiceBox extends Component {
  renderImage = (key) => {
    switch (key) {
      case 0:
        return <img src={one} alt={key} width={50} />;
      case 1:
        return <img src={two} alt={key} width={50} />;
      case 2:
        return <img src={three} alt={key} width={50} />;
      case 3:
        return <img src={four} alt={key} width={50} />;
      case 4:
        return <img src={five} alt={key} width={50} />;
      case 5:
        return <img src={six} alt={key} width={50} />;
      case 6:
        return <img src={seven} alt={key} width={50} />;
      case 7:
        return <img src={eight} alt={key} width={50} />;
      case 8:
        return <img src={nine} alt={key} width={50} />;
      case 9:
        return <img src={ten} alt={key} width={50} />;
      case 10:
        return <img src={eleven} alt={key} width={50} />;
      default:
        return <img src={twelve} alt={key} width={50} />;
    }
  };
  render() {
    return (
      <React.Fragment>
        {this.props.services.map((service, key) => (
          <Col key={key} lg={4} md={6}>
            <div className="service-box service-dark">
              <div className="mb-5">{this.renderImage(key)}</div>
              <h5 className="service-title text-dark font-weight-normal pt-1 mb-4">
                {service.title}
              </h5>
              <p className="text-muted service-subtitle mb-4">
                {service.desc}
                {service?.readMore && (
                  <a
                    href={service.readMore}
                    className="text-warning service-subtitle mb-4 force-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    {service?.readMoreDesc}
                  </a>
                )}
              </p>
              {/* <Link to="#" className="read-more-icon"><span className="right-icon">&#8594;</span></Link> */}
            </div>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default ServiceBox;
