import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class SectionTitle extends Component {
  render() {
    return (
      <React.Fragment>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div
              className={
                this.props.alignLeft
                  ? "title text-left mb-5 pb-5"
                  : "title text-center mb-5"
              }
            >
              <h3 className="font-weight-normal text-dark">
                <span className="text-warning">{this.props.title1}</span>
                <span>{this.props.title2}</span>
              </h3>
              <p className="text-muted">{this.props.desc}</p>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default SectionTitle;
