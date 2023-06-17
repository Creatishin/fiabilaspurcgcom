import { Box, Grid, Typography, Link } from "@mui/material";
import React from "react";
import logo from "../../Assets/Icons/FIALOGO.png";
import { useNavigate } from "react-router-dom";
//@ts-ignore
import Bro from '../../Assets/Files/Broucher.pdf';

function Footer({ theme }: { theme: any }) {
  const style = {
    mainContainer: {
      zIndex: 3000,
      backgroundColor: theme.palette.primary.main,
      padding: "50px 10px 20px 10px",
      display: "flex",
      justifyContent: "center",
    } as React.CSSProperties,
    container: {
      width: "100%",
      maxWidth: "1300px",
      padding: "0px 20px",
    } as React.CSSProperties,
    detailNlink: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
    } as React.CSSProperties,
    details: {
      display: "flex",
      flexDirection: "column",
      gap: "25px",
      marginBottom: "20px",
    } as React.CSSProperties,
    detailsText: {
      maxWidth: "500px",
    } as React.CSSProperties,
    infoText: {
      cursor: "pointer",
      maxWidth: "400px",
    } as React.CSSProperties,
    detailsEmail: {
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    } as React.CSSProperties,
    links: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      gap: "25px",
      padding: "10px",
    } as React.CSSProperties,
    linkText: {
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: 400,
      color:'white',
      textTransform:"none"
    } as React.CSSProperties,
    linkText__privacy: {
      cursor: "pointer",
      fontSize: "12px",
      fontWeight: 400,
    } as React.CSSProperties,

    whoWeAre: {
      display: "flex",
      flexDirection: "column",
      gap: "25px",
      padding: "10px",
    } as React.CSSProperties,
    policyNsocial: {
      display: "flex",
      alignItems: "center",
      marginTop: "24px",
      marginBottom: "10px",
      flexWrap: "wrap",
      gap: "10px",
    } as React.CSSProperties,
    policy: {
      flexGrow: 1,
      display: "flex",
      alignItems: "center",
      gap: "25px",
    } as React.CSSProperties,
    love: {
      flexGrow: 1,
      textAlign: "center",
      opacity: 0.4,
    } as React.CSSProperties,
    social: {
      flexGrow: 1,
      display: "flex",
      alignItems: "center",
      gap: "25px",
    } as React.CSSProperties,
    socialIcon: {
      cursor: "pointer",
    } as React.CSSProperties,
  };

  const navigate = useNavigate();

  return (
    <Box style={style.mainContainer}>
      <Box style={style.container}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} style={style.details}>
            <img src={logo} alt="Okoders" width="90%" style={{maxWidth:"300px"}} />
            <Typography style={style.detailsText} variant="body2" color="white">
            We are a team of Qualified Forensic Consultant, where everyone have the best solution of investigations in the field of Handwriting & Questioned Documents, Finger Print, Scene of Crime etc.
            </Typography>
            
          </Grid>
          <Grid item xs={6} sm={6} md={3} style={style.whoWeAre}>
            <Typography variant="body2" fontWeight="600" color="white">
              Who We Are
            </Typography>
            <Typography
              onClick={() => navigate("about")}
              sx={style.linkText}
              variant="body2"
              color="white"
            >
              About Us
            </Typography>
            <Typography
              onClick={() => navigate("services")}
              sx={style.linkText}
              variant="body2"
              color="white"
            >
              Services
            </Typography>
            <Typography sx={style.linkText} variant="body2" color="white">
              Blogs
            </Typography>
            <Typography
              onClick={() => navigate("contacts")}
              sx={style.linkText}
              variant="body2"
              color="white"
            >
              Contact Us
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={3} style={style.whoWeAre}>
            <Typography variant="body2" fontWeight="600" color="white">
              Downloads
            </Typography>
            <Link
              href={Bro}
              sx={style.linkText}
              target="_blank"
              rel="noreferrer"
              variant="body2"
              download="Forensic Investigation Agency"
            >
              Brochure
            </Link>
          </Grid>
        </Grid>
        <Box style={style.policyNsocial}>
          <Box style={style.love}>
            <Typography variant="body2" color="white">
              Made with ❤️ by creatish
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
