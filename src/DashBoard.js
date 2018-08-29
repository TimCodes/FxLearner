import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  demo: {
    height: "100%",
    padding: "10%",
    paddingTop: "3%"
  },
  paper: {
    height: "100%",
    color: theme.palette.text.secondary
  },
  gridItem: {
    flexBasis: "100%",
    marginBottom: "2%"
  },
  card: {
    textAlign: "center",
    height: "140px",
    padding: 0
  },
  cardHeader: {
    backgroundImage: "linear-gradient(to right, #35baf6,cyan)",
    backgroundImage: "linear-gradient(to right, #482880, #6573c3)",
    height: "80px"
  }
});

class DashBoard extends React.Component {
  state = {
    direction: "row",
    justify: "center",
    alignItems: "center"
  };

  render() {
    const { classes } = this.props;
    const { alignItems, direction, justify } = this.state;
    return (
      <Grid
        container
        spacing={16}
        className={classes.demo}
        alignItems={alignItems}
        direction={direction}
        justify={justify}
      >
        {[0, 1, 2].map(value => (
          <Grid
            key={value}
            item
            className={classes.gridItem}
            style={{ height: `${String(150)}px` }}
          >
            <Card className={classes.card}>
              <Typography className={classes.cardHeader} color="textSecondary">
                Word of the Day
              </Typography>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" />

                <Typography variant="headline" component="h2" />
                <Typography className={classes.pos} color="textSecondary">
                  adjective
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default withStyles(styles)(DashBoard);
