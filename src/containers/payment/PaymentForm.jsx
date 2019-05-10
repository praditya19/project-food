import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Pembayaran
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="NamaBank" label="Nama Bank" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="NomorKartuATM"
            label="Nomor Kartu ATM"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="TanggalKadarluasa"
            label="Tanggal
          Kadarluasa"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="Nomor Handphone"
            label="Nomor Handphone"
            helperText="Di isi dengan nomor yang aktif"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Ingat data harus sesuai"
          />
        </Grid>
      </Grid>
      <Button
        component={Link}
        to="/checkout"
        style={{
          marginLeft: 50,
          height: 50,
          color: "#fff",
          width: 200,
          fontSize: 20,
          borderRadius: 5,
          backgroundColor: "#15ef4c"
        }}
      >
        Next
      </Button>
    </React.Fragment>
  );
}
