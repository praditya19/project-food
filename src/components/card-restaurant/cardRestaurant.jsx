import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
};

class cardRestaurant extends React.Component {
  render() {
    const { classes } = this.props;
    const { id, nama, lokasi, gambar } = this.props.item;
    return (
      <div style={{ padding: 50 }}>
        <Grid container spacing={24}>
          <Grid item xs={24} sm={24}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={gambar}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <h1>{nama}</h1>
                    <h6>{lokasi}</h6>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    marginLeft: 30
                  }}
                  component={Link}
                  to={`/dashrestaurant/${id}`}
                >
                  Pesan Sekarang
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

cardRestaurant.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(cardRestaurant);
