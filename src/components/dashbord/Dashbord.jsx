import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function Dashbord(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid style={{ marginLeft: 20 }}>
          <Paper style={{ height: 300 }} className={classes.paper}>
            <img
              style={{ width: 350, height: 200 }}
              src="https://i1.wp.com/www.maxmanroe.com/wp-content/uploads/2015/04/Go-Foodd.jpg?resize=560%2C293&ssl=1"
            />
            <br />
            <br />
            <Link to="/dashrestaurant">
              <button
                style={{
                  height: 50,
                  color: "#fff",
                  width: 200,
                  fontSize: 20,
                  borderRadius: 5,
                  backgroundColor: "#15ef4c"
                }}
              >
                Lihat Sekarang
              </button>
            </Link>
          </Paper>
        </Grid>
        <Grid style={{ marginLeft: 20 }}>
          <Paper style={{ height: 300 }} className={classes.paper}>
            <img
              style={{ width: 350, height: 200 }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz74TJcNdpL5RH9jCI4oKrz3xQ7ga3kBRyVm-KvfHxevrw4kbR"
            />
            <br />
            <br />
            <Link to="/dashrestaurant">
              <button
                style={{
                  height: 50,
                  color: "#fff",
                  width: 200,
                  fontSize: 20,
                  borderRadius: 5,
                  backgroundColor: "#15ef4c"
                }}
              >
                Lihat Sekarang
              </button>
            </Link>
          </Paper>
        </Grid>
        <Grid style={{ marginLeft: 20 }}>
          <Paper style={{ height: 300 }} className={classes.paper}>
            <img
              style={{ width: 350, height: 200 }}
              src="http://cdn2.tstatic.net/kaltim/foto/bank/images/ilustrasi-go-car_20170206_151443.jpg"
            />
            <br />
            <br />
            <Link to="/dashrestaurant">
              <button
                style={{
                  height: 50,
                  color: "#fff",
                  width: 200,
                  fontSize: 20,
                  borderRadius: 5,
                  backgroundColor: "#15ef4c"
                }}
              >
                Lihat Sekarang
              </button>
            </Link>
          </Paper>
        </Grid>

        <Grid style={{ marginLeft: 20 }}>
          <Paper style={{ height: 300 }} className={classes.paper}>
            <img
              style={{ width: 350, height: 200 }}
              src="https://res.cloudinary.com/ruparupa-com/image/upload/w_600,h_274/v1541643596/category-go-send-image.png"
            />
            <br />
            <br />
            <Link to="/dashrestaurant">
              <button
                style={{
                  height: 50,
                  color: "#fff",
                  width: 200,
                  fontSize: 20,
                  borderRadius: 5,
                  backgroundColor: "#15ef4c"
                }}
              >
                Lihat Sekarang
              </button>
            </Link>
          </Paper>
        </Grid>
        <Grid style={{ marginLeft: 20 }}>
          <Paper style={{ height: 300 }} className={classes.paper}>
            <img
              style={{ width: 350, height: 200 }}
              src="https://statik.tempo.co/data/2016/10/06/id_545081/545081_620.jpg"
            />
            <br />
            <br />
            <Link to="/dashrestaurant">
              <button
                style={{
                  height: 50,
                  color: "#fff",
                  width: 200,
                  fontSize: 20,
                  borderRadius: 5,
                  backgroundColor: "#15ef4c"
                }}
              >
                Lihat Sekarang
              </button>
            </Link>
          </Paper>
        </Grid>
        <Grid style={{ marginLeft: 20 }}>
          <Paper style={{ height: 300 }} className={classes.paper}>
            <img
              style={{ width: 350, height: 200 }}
              src="https://pbs.twimg.com/media/C21sDzZUsAA1-Tj.jpg"
            />
            <br />
            <br />
            <Link to="/dashrestaurant">
              <button
                style={{
                  height: 50,
                  color: "#fff",
                  width: 200,
                  fontSize: 20,
                  borderRadius: 5,
                  backgroundColor: "#15ef4c"
                }}
              >
                Lihat Sekarang
              </button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Dashbord.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashbord);
