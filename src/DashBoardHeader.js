import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => {
  console.log(theme);
  return {
    dashboardHeader: {
      backgroundColor: "#2c387e",
      color: "white",
      height: "200px",
      margin: "0 auto",
      marginTop: "3%",
      paddingTop: "40px",
      width: "80%"
    }
  };
};

class DashBoardHeader extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <header>
        <Paper className={classes.dashboardHeader}>
          <Typography variant="display2" color="inherit" gutterBottom />
        </Paper>
      </header>
    );
  }
}

export default withStyles(styles)(DashBoardHeader);
