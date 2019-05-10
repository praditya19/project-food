import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Checkout() {
  return (
    <React.Fragment>
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Thank you for your order.
        </Typography>
        <Typography variant="subtitle1">
          Nomor pesanan Anda adalah # 2001539. Kami telah mengirim email pesanan
          Anda, Makanan segara di siapkan.
        </Typography>
        <center>
          <img src="http://www.gambaranimasi.org/data/media/298/animasi-bergerak-makanan-dan-minuman-0216.gif" />
        </center>
      </React.Fragment>
    </React.Fragment>
  );
}
