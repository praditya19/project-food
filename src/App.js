import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/home/Home";
import DashRestaurant from "./containers/dashrestaurant/DashRestaurant";
import DashMakanan from "./containers/dashmakanan/DashMakanan";
import AddressForm from "./containers/address/AddressForm";
import PaymentForm from "./containers/payment/PaymentForm";
import Checkout from "./containers/checkout/Checkout";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashrestaurant" exact component={DashRestaurant} />
        <Route path="/dashrestaurant/:id" component={DashMakanan} />
        <Route path="/alamat" component={AddressForm} />
        <Route path="/pembayaran" component={PaymentForm} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </div>
  );
}

export default App;
