import React, { Component } from "react";
import Header from "../../components/header/Header";
import Dashboard from "../../components/dashbord/Dashbord";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Dashboard />
      </div>
    );
  }
}

export default Home;
