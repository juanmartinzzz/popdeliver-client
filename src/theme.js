import { createMuiTheme } from "@material-ui/core/styles";

export const red = "rgb(140,26,0)";
export const black = "rgb(70,70,70)";
export const green = "rgb(0,70,10)";
export const golden = "rgb(249,168,37)";

export default createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#f9a825",
    },
  },
  typography: {
    fontSize: 12,
    fontFamily: ["Raleway"].join(","),
  },
});
