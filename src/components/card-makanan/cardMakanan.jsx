import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 350
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  playIcon: {
    height: 38,
    width: 38
  }
});

class cardMakanan extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    const { id, nama, harga, gambar } = this.props;
    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.cover}
          image={gambar}
          title="Live from space album cover"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {nama}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              <p>Harga : Rp.{harga}</p>
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <Button
              onClick={this.props.kurang}
              variant="contained"
              color="primary"
            >
              -
            </Button>
            <h1>{this.props.qty}</h1>
            <Button
              onClick={this.props.tambah}
              variant="contained"
              color="primary"
            >
              +
            </Button>
          </div>
        </div>
      </Card>
    );
  }
}

cardMakanan.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(cardMakanan);
