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
      root: {
        letterSpacing: "0.2rem"
      },
      contained: {
        boxShadow: "none"
      },
      // containedPrimary: {
      //   border: "1px solid #000",
      //   backgroundColor: "#000",
      //   color: "#fff",
      //   boxShadow: "none",
      //   "&:hover": {
      //     border: "1px solid #007788",
      //     backgroundColor: "rgba(0,0,0,0)",
      //     color: "#007788"
      //   }
      // },
      // containedSecondary: {
      //   border: "1px solid #fff",
      //   boxShadow: "none",
      //   color: "#004a5a",
      //   "&:hover": {
      //     border: "1px solid #4ca5b7",
      //     backgroundColor: "rgba(0,0,0,0)",
      //     color: "#4ca5b7"
      //   }
      // },
      outlinedPrimary: {
        border: "1px solid #000",
        color: "#000",
        "&:hover": {
          border: "1px solid #007788",
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
