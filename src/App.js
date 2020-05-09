import React from "react";
import theme from "./theme";
import { MuiThemeProvider } from "@material-ui/core";
import LayoutContainer from "./components/Layout/LayoutContainer";

const App = () => (
  <MuiThemeProvider theme={theme}>
    <LayoutContainer />
  </MuiThemeProvider>
);

export default App;
