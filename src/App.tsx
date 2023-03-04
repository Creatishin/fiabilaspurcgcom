import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Footer from "./Components/Modals/Footer";
import Header from "./Components/Modals/Header";
import NavBar from "./Components/Modals/NavBar";
import SuspenseLoading from "./Components/Modals/SuspenseLoading";
import ScrollToTop from "./Components/ScrollToTop";
import About from "./Components/Pages/About/About";
import Services from "./Components/Pages/Services/Services";
import Service from "./Components/Pages/Services/Service";
import Contact from "./Components/Pages/Contact/Contact";
import Quote from "./Components/Pages/Quote/Quote";
import { Provider } from 'react-redux'
import store from './Store'
const Home = React.lazy(() => import("./Components/Pages/Home/Home"))


declare module "@mui/material/styles" {
  interface ThemeOptions {
    textColor?: {
      heading?: string;
      para?: string;
      body?: string;
      placeHolder?: string;
      grad1?: string;
      grad2?: string;
    };
    backgroundColor?: {
      header?: string;
      navBar?: string;
      charcoal?: string;
      yellowRed?: string;
      designStudio1?: string;
      designStudio2?: string;
      orange1?: string;
      orange2?: string;
      green1?: string;
      green2?: string;
      yelgre1?: string;
      yelgre2?: string;
      yelgre3?: string;
      yelgre4?: string;
      mainGradient1?: string;
      mainGradient2?: string;
      fieldBorder?: string;
      yellow?: string;
      pink?: string;
      white?: string;
      purple?: string;
      linear1?: string;
      linear2?: string;
    };
    gapping?: {
      pagePadding?: string;
      pageMargin?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#161823",
    },
    secondary: {
      main: "#f35344",
    },
    error: {
      main: "#FF0000",
    },
  },
  textColor: {
    heading: "#143C46",
    para: "#777777",
    body: "#808080",
    placeHolder: "#AAAAAA",
    grad1: "#043BFF",
    grad2: "#45D92D",
  },
  backgroundColor: {
    header: "#21242e",
    navBar: "#E1F0FF",
    charcoal: "#143C46",
    yellowRed: "#FDC448",
    designStudio1: "rgba(188, 231, 255, 0.67)",
    designStudio2: "rgba(134, 96, 242, 0.61)",
    orange1: "#FEF8E3",
    orange2: "#FFCBCB",
    green1: "#14CC97",
    green2: "#ADFFE7",
    yelgre1: "rgba(255, 236, 167, 1)",
    yelgre2: "rgba(167, 216, 222, 1)",
    yelgre3: "rgba(255, 236, 167, .15)",
    yelgre4: "rgba(167, 216, 222, .15)",
    mainGradient1: "rgba(225, 240, 255, 1)",
    mainGradient2: "rgba(255, 255, 255, 0)",
    fieldBorder: "#D1D1D1",
    yellow: "rgba(254, 248, 227, 1)",
    pink: "rgba(255, 203, 203, 1)",
    white: "rgba(255, 255, 255, 1)",
    purple: "rgba(237, 215, 251, 0.56)",
    linear1: "rgba(130, 130, 130, 0)",
    linear2: "rgba(216, 217, 227, 0.34)",
  },
  typography: {
    h1: {
      fontSize: "60px",
      color: "#092532",
      "@media (max-width:600px)": {
        fontSize: "50px",
      },
    },
    h2: {
      fontSize: "48px",
      color: "#092532",
      "@media (max-width:600px)": {
        fontSize: "40px",
      },
    },
    h3: {
      fontSize: "42px",
      color: "#092532",
      "@media (max-width:600px)": {
        fontSize: "36px",
      },
    },
    h4: {
      fontSize: "36px",
      color: "#092532",
      "@media (max-width:600px)": {
        fontSize: "30px",
      },
    },
    h5: {
      fontSize: "12px",
      color: "#092532",
      "@media (max-width:600px)": {
        fontSize: "10px",
      },
    },
    subtitle1: {
      fontSize: "28px",
      color: "#092532",
      "@media (max-width:600px)": {
        fontSize: "22px",
      },
    },
    subtitle2: {
      fontSize: "24px",
      color: "#092532",
      "@media (max-width:600px)": {
        fontSize: "18px",
      },
    },
    body1: {
      fontSize: "20px",
      color: "#092532",
      "@media (max-width:600px)": {
        fontSize: "16px",
      },
    },
    body2: {
      fontSize: "18px",
      color: "#092532",
      "@media (max-width:600px)": {
        fontSize: "14px",
      },
    },
    caption: {
      fontSize: "16px",
      color: "#092532",
      "@media (max-width:600px)": {
        fontSize: "12px",
      },
    },
    button: {
      fontSize: "18px",
      color: "#092532",
      textDecoration: "none",
      textTransform: "none",
      "@media (max-width:600px)": {
        fontSize: "14px",
      },
    },
  },
  gapping: {
    pageMargin: "30px",
    pagePadding: "30px",
  },
});

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Suspense fallback={<SuspenseLoading theme={theme} />}>
          <Provider store={store}>
            {/* <Header theme={theme} />
            <NavBar theme={theme} /> */}
            <ScrollToTop />
            <Routes>
              {/* <Route path="/" element={<Home theme={theme} />} />
              <Route path="about" element={<About theme={theme} />} />
              <Route path="services" element={<Services theme={theme} />} />
              <Route path="services/:id" element={<Service theme={theme} />} />
              <Route path="contacts" element={<Contact theme={theme} />} />
              <Route path="quote" element={<Quote theme={theme} />} /> */}
              <div></div>
            </Routes>
            {/* <Footer theme={theme} /> */}
          </Provider>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
