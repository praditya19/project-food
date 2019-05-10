import React, { Component } from "react";
import Header from "../../components/header/Header";
import restorant from "../../utils/database";
import CardRestaurant from "../../components/card-restaurant/cardRestaurant";
import { Row, Col } from "reactstrap";

class DashRestaurant extends Component {
  state = {
    base: []
  };
  componentDidMount() {
    this.setState({
      base: restorant
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Row>
          {this.state.base.map(item => {
            return (
              <Col sm>
                {" "}
                <CardRestaurant item={item} />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default DashRestaurant;
