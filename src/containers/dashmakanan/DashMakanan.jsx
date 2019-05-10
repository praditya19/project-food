import React, { Component } from "react";
import Header from "../../components/header/Header";
import CardMakanan from "../../components/card-makanan/cardMakanan";
import restorant from "../../utils/database";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
class DashMakanan extends Component {
  componentWillMount() {
    const data = restorant.find(item => item.id === this.props.match.params.id);
    const datafood = data.food;
    this.setState({
      fillfood: datafood
    });
    console.log(datafood);
    const addQty = data.food.forEach(o => {
      o.qty = 0;
    });
    console.log(addQty);

    console.log(this.state.fillfood);
  }
  componentDidMount() {
    console.log(this.state.fillfood);
  }

  tambah = id => {
    const { fillfood, orderan } = this.state;
    const fillOrder = orderan.find(item => item.id === id);
    const fillFoods = fillfood.find(item => item.id === id);
    this.addPrice(fillFoods.harga);
    fillfood.map(o => {
      if (o.id === fillFoods.id) {
        const updateIntern = (o.qty = fillFoods.qty + 1);
      }
    });

    if (fillOrder === undefined) {
      const update = {
        ...fillFoods,
        qty: 1,
        price: fillFoods.harga
      };
      this.setState({
        orderan: [...orderan, update]
      });

      return;
    }
    if (fillFoods.id === fillOrder.id) {
      const update = {
        ...fillOrder,
        qty: fillOrder.qty + 1,
        price: fillOrder.price + fillOrder.harga
      };
      this.setState({
        orderan: orderan.map(o => (o.id === fillOrder.id ? update : o))
      });
      return;
    }
  };
  kurang = id => {
    const { orderan, fillfood } = this.state;
    const fillOrder = orderan.find(item => item.id === id);
    const fillFods = fillfood.find(item => item.id === id);
    if (fillFods.qty === 0) {
      return;
    } else {
      if (fillOrder.qty === 1) {
        const updateFoods = { ...fillFods, qty: fillFods.qty - 1 };
        this.setState({
          fillfood: fillfood.map(o => (o.id === fillFods.id ? updateFoods : o))
        });
        const filterOrder = orderan.filter(item => item.id !== id);
        this.setState({
          orderan: filterOrder
        });
      } else {
        const updateOrders = {
          ...fillOrder,
          qty: fillOrder.qty - 1,
          price: fillOrder.price - fillOrder.harga
        };
        const updateFoods = { ...fillFods, qty: fillFods.qty - 1 };
        this.setState({
          fillfood: fillfood.map(o => (o.id === fillFods.id ? updateFoods : o)),
          orderan: orderan.map(o => (o.id === fillOrder.id ? updateOrders : o))
        });
      }
      this.kurangPrice(fillFods.harga);
    }
  };
  addPrice = harga => {
    this.setState({
      total: this.state.total + harga
    });
  };

  kurangPrice = harga => {
    this.setState({
      total: this.state.total - harga
    });
  };

  state = {
    fillfood: [],
    orderan: [],
    total: 0
  };

  render() {
    return (
      <div>
        <Header />
        {""}
        <Grid container spacing={24}>
          {this.state.fillfood.map(foods => {
            return (
              <Grid item xs={24} sm={6}>
                <br />
                <CardMakanan
                  nama={foods.nama}
                  gambar={foods.gambar}
                  harga={foods.harga}
                  qty={foods.qty}
                  kurang={() => this.kurang(foods.id)}
                  tambah={() => this.tambah(foods.id)}
                />{" "}
              </Grid>
            );
          })}
        </Grid>
        <div>
          {this.state.orderan.map(orders => (
            <ul>
              <h5>{orders.nama}</h5>
              <h5>{orders.qty}</h5>
            </ul>
          ))}
          <h5 style={{ marginLeft: 400, height: 100 }}>
            Total : {this.state.total}{" "}
          </h5>
        </div>

        <Button
          component={Link}
          to="/alamat"
          style={{
            marginLeft: 300,
            height: 50,
            color: "#fff",
            width: 200,
            fontSize: 20,
            borderRadius: 5,
            backgroundColor: "#15ef4c"
          }}
        >
          {" "}
          Bayar Sekarang
        </Button>
      </div>
    );
  }
}

export default DashMakanan;
