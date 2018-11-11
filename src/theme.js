import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ["Montserrat", "sans - serif"],
    useNextVariants: true
  },
  palette: {
    primary: {
      light: "#4ca5b7",
      main: "#007788",
      dark: "#004a5a",
      contrastText: "#ffffff"
    },
    secondary: {
      light: "#ffffff",
      main: "#ffffff",
      dark: "#cccccc",
      contrastText: "#000000"
    }
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        border: "1px solid #007788",
        boxShadow: "none",
        "&:hover": {
          backgroundColor: "rgba(0,0,0,0)",
          color: "#007788"
        }
      },
      outlinedPrimary: {
        border: "1px solid #007788",
        "&:hover": {
          backgroundColor: "#007788",
          color: "#fff"
        }
      }
    }
  }
});
