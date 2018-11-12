import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  typography: {
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
      containedSecondary: {
        border: "1px solid #fff",
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
      },
      outlinedSecondary: {
        border: "1px solid #fff",
        "&:hover": {
          border: "1px solid #fff",
          backgroundColor: "#fff",
          color: "#007788"
        }
      }
    }
  }
});
