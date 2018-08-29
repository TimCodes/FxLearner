import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CssBaseline from "@material-ui/core/CssBaseline";

const styles = theme => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  navBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  login: {
    position: "absolute",
    right: 10,
    marginRight: "5px"
  },
  navLinks: {
    marginRight: "15px",
    padding: "4px"
  },
  headerImage: {
    maxHeight: "3rem",
    [theme.breakpoints.up("lg")]: {
      maxHeight: "80px"
    }
  }
});

function TopNav(props) {
  const { classes } = props;
  const img = <img style={{ marginTop: 10 }} src="https://unsplash.it/40/40" />;
  return (
    <React.Fragment>
      <AppBar position="static" title={img}>
        <Toolbar className={classes.navBar}>
          <Typography
            variant="title"
            color="inherit"
            className={classes.navLinks}
          >
            {/*<img
              className={classes.headerImage}
              src="https://i.imgur.com/NULiVYX.png"
              alt="Logo of Franciscan University of Steubenville"
            /> */}
          </Typography>

          <Typography
            variant="title"
            color="inherit"
            className={classes.navLinks}
          >
            Arcade
          </Typography>
          <Typography
            variant="title"
            color="inherit"
            className={classes.navLinks}
          >
            Compete
          </Typography>
          <Typography
            variant="title"
            color="inherit"
            className={classes.navLinks}
          >
            Learn
          </Typography>
          <Button color="inherit" size="small" className={classes.login}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

TopNav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopNav);
// /    {<!--<MenuIcon />  --> }

/*  <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
*/
