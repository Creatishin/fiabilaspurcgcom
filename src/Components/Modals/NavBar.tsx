import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import FIALogo from "../../Assets/Icons/FIALOGO.png";
import { Menu } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import "./Modals.css"

function NavBar({ theme }: { theme: any }) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const style = {
    mainContainer: {
      display: "flex",
      justifyContent: "center",
      boxSizing: "border-box",
      backdropFilter: "blur(5px)",
      transition: "all 2s ease !important",
      borderBottom: "1px solid rgba(255,255,255,.5)"
    } as React.CSSProperties,
    container: {
      width: "100%",
      height: "100%",
      maxWidth: "1300px",
      display: "flex",
      padding: "0px 30px",
    } as React.CSSProperties,
    logoContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    } as React.CSSProperties,
    logoImage: {
      width: "200px",
      cursor: "pointer",
    } as React.CSSProperties,
    navigationContainer: {
      gap: "30px",
    } as React.CSSProperties,
    navigationText: {
      color:'white',
      cursor: "pointer",
      borderBottom: `3px solid transparent`,
      textDecoration: "none",
      transform: "scale(1)",
      transition: "all .3s ease",
      "&:hover": {
        color: theme.palette.secondary.main,
        borderBottom: `3px solid ${theme.palette.secondary.main} !important`,
      } as React.CSSProperties,
      "&:active": {
        scale: 0.9,
        color:"white",
        transform: "scale(.9)",
      } as React.CSSProperties,
    } as React.CSSProperties,
    contactContainer: {
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
    } as React.CSSProperties,
    getQuote : {
      fontWeight: 700,
      border: `2px solid ${theme.palette.secondary.main}`,
      padding: "10px 40px",
      borderRadius: "30px",
      cursor: "pointer",
    } as React.CSSProperties
  };

  const Navigate = useNavigate();

  const { pathname }: { pathname: string } = useLocation();
  const currentPath: string = pathname.split("/")[1];

  return (
    <AppBar
      elevation={0}
      style={{ background: "rgba(22, 24, 35,.95)", zIndex: 3000 }}
    >
      <Toolbar
        style={style.mainContainer}
        sx={{
          padding: {
            xs: "10px 0px 10px 0px",
            sm: "10px 0px 10px 0px",
            md: "90px 30px 30px 30px",
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
              src={FIALogo}
              alt="Logo"
            />
            <IconButton
              onClick={() => setOpenMenu((prev) => !prev)}
              sx={{ display: { xs: "block", sm: "block", md: "none" } }}
            >
              <Menu style={{color:'white'}} />
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
                Navigate("");
              }}
              style={{
                color: currentPath === ""
                ? theme.palette.secondary.main
                : "white",
                borderBottom: `3px solid ${
                  currentPath === ""
                    ? theme.palette.secondary.main
                    : "transparent"
                }`,
              }}
              sx={style.navigationText}
              variant="caption"
              color="primary"
            >
              Home
            </Typography>
            <Typography
              onClick={() => {
                setOpenMenu((prev) => !prev);
                Navigate("about");
              }}
              style={{
                color: currentPath === "about"
                ? theme.palette.secondary.main
                : "white",
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
            <Typography
              onClick={() => {
                setOpenMenu((prev) => !prev);
                Navigate("services");
              }}
              style={{
                color: currentPath === "services"
                ? theme.palette.secondary.main
                : "white",
                borderBottom: `3px solid ${
                  currentPath === "services"
                    ? theme.palette.secondary.main
                    : "transparent"
                }`,
              }}
              sx={style.navigationText}
              variant="caption"
              color="primary"
            >
              Services
            </Typography>
            <Typography
              onClick={() => {
                setOpenMenu((prev) => !prev);
                Navigate("blogs");
              }}
              style={{
                color: currentPath === "blogs"
                ? theme.palette.secondary.main
                : "white",
                borderBottom: `3px solid ${
                  currentPath === "blogs"
                    ? theme.palette.secondary.main
                    : "transparent"
                }`,
              }}
              sx={style.navigationText}
              variant="caption"
              color="primary"
            >
              Blogs
            </Typography>
            <Typography
              onClick={() => {
                setOpenMenu((prev) => !prev);
                Navigate("contacts");
              }}
              style={{
                color: currentPath === "contacts"
                ? theme.palette.secondary.main
                : "white",
                borderBottom: `3px solid ${
                  currentPath === "contacts"
                    ? theme.palette.secondary.main
                    : "transparent"
                }`,
              }}
              sx={style.navigationText}
              variant="caption"
              color="primary"
            >
              Contacts
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
              justifyContent: { xs: "center", sm: "center", md: "center" },
              alignItems: { xs: "center", sm: "center", md: "center" },
            }}
          >
            <Typography
              onClick={() => {
                setOpenMenu((prev) => !prev);
                Navigate("");
              }}
              style={{
                color: currentPath === ""
                ? theme.palette.secondary.main
                : "white",
                borderBottom: `3px solid ${
                  currentPath === ""
                    ? theme.palette.secondary.main
                    : "transparent"
                }`,
              }}
              sx={style.navigationText}
              variant="caption"
              color="primary"
            >
              Home
            </Typography>
            <Typography
              onClick={() => {
                setOpenMenu((prev) => !prev);
                Navigate("about");
              }}
              style={{
                color: currentPath === "about"
                ? theme.palette.secondary.main
                : "white",
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
            <Typography
              onClick={() => {
                setOpenMenu((prev) => !prev);
                Navigate("services");
              }}
              style={{
                color: currentPath === "services"
                ? theme.palette.secondary.main
                : "white",
                borderBottom: `3px solid ${
                  currentPath === "services"
                    ? theme.palette.secondary.main
                    : "transparent"
                }`,
              }}
              sx={style.navigationText}
              variant="caption"
              color="primary"
            >
              Services
            </Typography>
            <Typography
              onClick={() => {
                setOpenMenu((prev) => !prev);
                Navigate("blogs");
              }}
              style={{
                color: currentPath === "blogs"
                ? theme.palette.secondary.main
                : "white",
                borderBottom: `3px solid ${
                  currentPath === "blogs"
                    ? theme.palette.secondary.main
                    : "transparent"
                }`,
              }}
              sx={style.navigationText}
              variant="caption"
              color="primary"
            >
              Blogs
            </Typography>
            <Typography
              onClick={() => {
                setOpenMenu((prev) => !prev);
                Navigate("contacts");
              }}
              style={{
                color: currentPath === "contacts"
                ? theme.palette.secondary.main
                : "white",
                borderBottom: `3px solid ${
                  currentPath === "contacts"
                    ? theme.palette.secondary.main
                    : "transparent"
                }`,
              }}
              sx={style.navigationText}
              variant="caption"
              color="primary"
            >
              Contacts
            </Typography>
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
                Navigate("quote");
              }}
              className="getQuoteClass"
              style={style.getQuote}
            >
              <Typography
                variant="caption"
                color="white"
                fontWeight="500"
              >
                Get a quote
              </Typography>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
