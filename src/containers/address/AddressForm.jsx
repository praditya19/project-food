import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Alamat Pengiriman
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Nama Depan"
            name="Nama Depan"
            label="Nama Depan"
            fullWidth
            autoComplete="Nama Depan"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Nama Belakang"
            name="Nama Belakang"
            label="Nama Belakang"
            fullWidth
            autoComplete="Nama Belakang"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Alamat"
            name="Alamat"
            label="Alamat"
            fullWidth
            autoComplete="Alamat"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Kota"
            name="Kota"
            label="Kota"
            fullWidth
            autoComplete="Kota"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="Negara" name="Negara" label="Negara" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Kode Pos"
            name="Kode Pos"
            label="Kode Pos"
            fullWidth
            autoComplete="Kode Pos"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Gunakan alamat ini untuk perincian pembayaran"
          />
        </Grid>
      </Grid>
      <Button
        component={Link}
        to="/pembayaran"
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

export default AddressForm;
