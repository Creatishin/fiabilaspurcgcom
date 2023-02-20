import {
  AppBar,
  Box,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import OkodersLogo from "../../Assets/Icons/fullLogo.png";
import phoneIcon from "../../Assets/Icons/call.svg";
// import phoneIcon from "../../Assets/Icons/phoneIcon.png";
// import facebook from "../../Assets/Icons/facebook.png";
import facebook from "../../Assets/Icons/fa-facebook-square.svg";
// import linkedin from "../../Assets/Icons/linkedin.png";
import linkedin from "../../Assets/Icons/mdi_linkedin.svg";
// import twitter from "../../Assets/Icons/twitter.png";
import twitter from "../../Assets/Icons/fa-twitter.svg";
import { Menu } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

function NavBar({ theme }: { theme: any }) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  const isInView = useInView(ref1, { once: false });

  const style = {
    mainContainer: {
      display: "flex",
      justifyContent: "center",
      boxSizing: "border-box",
      backdropFilter: "blur(5px)",
      transition: "all 2s ease !important",
    } as React.CSSProperties,
    container: {
      width: "100%",
      height: "100%",
      maxWidth: "1300px",
      display: "flex",
      padding: "0px 20px",
    } as React.CSSProperties,
    logoContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    } as React.CSSProperties,
    logoImage: {
      width: "125px",
      cursor: "pointer",
    } as React.CSSProperties,
    navigationContainer: {
      gap: "30px",
    } as React.CSSProperties,
    navigationText: {
      cursor: "pointer",
      borderBottom: `3px solid transparent`,
      textDecoration: "none",
      transform: "scale(1)",
      transition: "all .3s ease",
      "&:hover": {
        borderBottom: `3px solid ${theme.palette.secondary.main} !important`,
      } as React.CSSProperties,
      "&:active": {
        scale: 0.9,
        transform: "scale(.9)",
      } as React.CSSProperties,
    } as React.CSSProperties,
    contactContainer: {
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
    } as React.CSSProperties,
    contactCall: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "7px",
      cursor: "pointer",
    } as React.CSSProperties,
    contactDivider: {
      height: "22px",
      width: "1px",
      margin: "0px 5px",
      backgroundColor: `${theme.palette.primary.main}`,
    } as React.CSSProperties,
    contactSocial: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      gap: "16px",
    } as React.CSSProperties,
    socialNavigation: {
      padding: "4px",
    } as React.CSSProperties,
    socialIcon: {
      cursor: "pointer",
    } as React.CSSProperties,
    animator1: {
      transform: isInView ? "none" : "translateX(100px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) .1s",
    } as React.CSSProperties,
    animator2: {
      transform: isInView ? "none" : "translateX(100px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) .2s",
    } as React.CSSProperties,
    animator3: {
      transform: isInView ? "none" : "translateX(100px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) .3s",
    } as React.CSSProperties,
    animator4: {
      transform: isInView ? "none" : "translateX(100px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) .4s",
    } as React.CSSProperties,
    animator5: {
      transform: isInView ? "none" : "translateX(100px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) .5s",
    } as React.CSSProperties,
  };

  const Navigate = useNavigate();

  const { pathname }: { pathname: string } = useLocation();
  const currentPath: string = pathname.split("/")[1];

  return (
    <AppBar
      elevation={0}
      style={{ background: "rgba(256, 256, 256, 0.55)", zIndex: 3000 }}
    >
      <Toolbar
        style={style.mainContainer}
        sx={{
          padding: {
            xs: "10px 0px 10px 0px",
            sm: "10px 0px 10px 0px",
            md: "50px 30px 20px 30px",
          },
          height: {
            xs: openMenu ? "100vh" : "auto",
            sm: openMenu ? "100vh" : "auto",
            md: "auto",
          },
        }}
      >
        <Box
          style={style.container}
          sx={{
            flexDirection: { xs: "column", sm: "column", md: "row" },
            justifyContent: {
              xs: "space-between",
              sm: "space-between",
              md: "space-between",
            },
            alignItems: { xs: "center", sm: "center", md: "center" },
          }}
        >
          <Box
            style={style.logoContainer}
            sx={{ width: { xs: "100%", sm: "100%", md: "auto" } }}
          >
            <img
              onClick={() => {
                Navigate("/");
                setOpenMenu(false);
              }}
              style={style.logoImage}
              src={OkodersLogo}
              alt="Logo"
            />
            <IconButton
              onClick={() => setOpenMenu((prev) => !prev)}
              sx={{ display: { xs: "block", sm: "block", md: "none" } }}
            >
              <Menu />
            </IconButton>
          </Box>
          <Box
            style={style.navigationContainer}
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              padding: { xs: "50px 0px", sm: "50px 0px", md: "0px" },
              width: { xs: "100%", sm: "100%", md: "auto" },
              flex: "1",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              justifyContent: { xs: "start", sm: "start", md: "center" },
              alignItems: { xs: "flex-end", sm: "flex-end", md: "center" },
            }}
          >
            <Typography
              onClick={() => {
                setOpenMenu((prev) => !prev);
                Navigate("customsoftware");
              }}
              style={{
                borderBottom: `3px solid ${
                  currentPath === "customsoftware"
                    ? theme.palette.secondary.main
                    : "transparent"
                }`,
              }}
              sx={style.navigationText}
              variant="caption"
              color="primary"
            >
              Custom Software
            </Typography>
            <Typography
              onClick={() => {
                setOpenMenu((prev) => !prev);
                Navigate("outsourcing");
              }}
              style={{
                borderBottom: `3px solid ${
                  currentPath === "outsourcing"
                    ? theme.palette.secondary.main
                    : "transparent"
                }`,
              }}
              sx={style.navigationText}
              variant="caption"
              color="primary"
            >
              Outsourcing
            </Typography>
            <Typography
              onClick={() => {
                setOpenMenu((prev) => !prev);
                Navigate("designstudio");
              }}
              style={{
                borderBottom: `3px solid ${
                  currentPath === "designstudio"
                    ? theme.palette.secondary.main
                    : "transparent"
                }`,
              }}
              sx={style.navigationText}
              variant="caption"
              color="primary"
            >
              Design Studio
            </Typography>

            <Typography
              onClick={() => {
                setOpenMenu((prev) => !prev);
                Navigate("career");
              }}
              style={{
                borderBottom: `3px solid ${
                  currentPath === "career"
                    ? theme.palette.secondary.main
                    : "transparent"
                }`,
              }}
              sx={style.navigationText}
              variant="caption"
              color="primary"
            >
              Career
            </Typography>
            <Typography
              onClick={() => {
                setOpenMenu((prev) => !prev);
                Navigate("about");
              }}
              style={{
                borderBottom: `3px solid ${
                  currentPath === "about"
                    ? theme.palette.secondary.main
                    : "transparent"
                }`,
              }}
              sx={style.navigationText}
              variant="caption"
              color="primary"
            >
              About
            </Typography>
          </Box>
          <Box
            style={style.navigationContainer}
            sx={{
              display: {
                xs: openMenu ? "flex" : "none",
                sm: openMenu ? "flex" : "none",
                md: "none",
              },
              padding: { xs: "50px 0px", sm: "50px 0px", md: "0px" },
              width: { xs: "100%", sm: "100%", md: "auto" },
              flex: "1",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              justifyContent: { xs: "start", sm: "start", md: "center" },
              alignItems: { xs: "flex-end", sm: "flex-end", md: "center" },
            }}
          >
            {/* <motion.a ref={ref1} style={style.animator1}>
              <Typography
                style={{
                  borderBottom: `3px solid ${
                    currentPath === "designstudio"
                      ? theme.palette.secondary.main
                      : "transparent"
                  }`,
                }}
                onClick={() => {
                  setOpenMenu((prev) => !prev);
                  Navigate("designstudio");
                }}
                sx={style.navigationText}
                variant="caption"
                color="primary"
              >
                Design Studio
              </Typography>
            </motion.a> */}
            <motion.a ref={ref2} style={style.animator2}>
              <Typography
                style={{
                  borderBottom: `3px solid ${
                    currentPath === "customsoftware"
                      ? theme.palette.secondary.main
                      : "transparent"
                  }`,
                }}
                onClick={() => {
                  setOpenMenu((prev) => !prev);
                  Navigate("customsoftware");
                }}
                sx={style.navigationText}
                variant="caption"
                color="primary"
              >
                Custom Software
              </Typography>
            </motion.a>
            <motion.a ref={ref3} style={style.animator3}>
              <Typography
                style={{
                  borderBottom: `3px solid ${
                    currentPath === "outsourcing"
                      ? theme.palette.secondary.main
                      : "transparent"
                  }`,
                }}
                onClick={() => {
                  setOpenMenu((prev) => !prev);
                  Navigate("outsourcing");
                }}
                sx={style.navigationText}
                variant="caption"
                color="primary"
              >
                Outsourcing
              </Typography>
            </motion.a>
            <motion.a ref={ref1} style={style.animator1}>
              <Typography
                style={{
                  borderBottom: `3px solid ${
                    currentPath === "designstudio"
                      ? theme.palette.secondary.main
                      : "transparent"
                  }`,
                }}
                onClick={() => {
                  setOpenMenu((prev) => !prev);
                  Navigate("designstudio");
                }}
                sx={style.navigationText}
                variant="caption"
                color="primary"
              >
                Design Studio
              </Typography>
            </motion.a>
            <motion.a ref={ref4} style={style.animator4}>
              <Typography
                style={{
                  borderBottom: `3px solid ${
                    currentPath === "career"
                      ? theme.palette.secondary.main
                      : "transparent"
                  }`,
                }}
                onClick={() => {
                  setOpenMenu((prev) => !prev);
                  Navigate("career");
                }}
                sx={style.navigationText}
                variant="caption"
                color="primary"
              >
                Career
              </Typography>
            </motion.a>
            <motion.a ref={ref5} style={style.animator5}>
              <Typography
                style={{
                  borderBottom: `3px solid ${
                    currentPath === "about"
                      ? theme.palette.secondary.main
                      : "transparent"
                  }`,
                }}
                onClick={() => {
                  setOpenMenu((prev) => !prev);
                  Navigate("about");
                }}
                sx={style.navigationText}
                variant="caption"
                color="primary"
              >
                About
              </Typography>
            </motion.a>
          </Box>
          <Box
            style={style.contactContainer}
            sx={{
              display: {
                xs: openMenu ? "flex" : "none",
                sm: openMenu ? "flex" : "none",
                md: "flex",
              },
              paddingBottom: { xs: "100px", sm: "100px", md: "0px" },
            }}
          >
            <Box
              onClick={() => {
                setOpenMenu(false);
                Navigate("contactus");
              }}
              style={style.contactCall}
            >
              <img src={phoneIcon} alt="Phone Icon" />
              <Typography
                sx={{
                  ml: "4px",
                  borderBottom: `3px solid ${
                    currentPath === "contactus"
                      ? theme.palette.secondary.main
                      : "transparent"
                  }`,
                }}
                variant="caption"
                color="primary"
              >
                Contact Us
              </Typography>
            </Box>
            <Divider style={style.contactDivider} orientation="vertical" />
            <Box sx={style.contactSocial}>
              {/* <img
                style={style.socialIcon}
                src={twitter}
                // height="16px"
                alt="Twitter Icon"
              /> */}
              <a
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                href="https://www.linkedin.com/company/okoderstech/mycompany/"
              >
                <img
                  style={style.socialIcon}
                  src={linkedin}
                  height="24px"
                  alt="Linkedin Icon"
                />
              </a>

              {/* <img
                style={style.socialIcon}
                src={facebook}
                // height="16px"
                alt="Facebook Icon"
              /> */}
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
