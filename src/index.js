import React from "react";
import ReactDOM from "react-dom";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import deepPurple from "@material-ui/core/colors/purple";
import blue from "@material-ui/core/colors/blue";
import "./styles.css";

import TopNav from "./TopNav";
import App from "./App";
import DashBoard from "./DashBoard";
import DashBoardHeader from "./DashBoardHeader";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: deepPurple
  }
});

function Main() {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <TopNav />
        <DashBoardHeader />
        <DashBoard />
      </div>
    </MuiThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
