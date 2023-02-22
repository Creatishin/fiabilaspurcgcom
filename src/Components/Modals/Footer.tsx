import { Box, Grid, Typography } from "@mui/material";
import React from "react";
// import logo from "../../Assets/Icons/fullWhiteLogo.png";
import logo from "../../Assets/Icons/FIALOGO.png";
import { companyDetail } from "../../config";
import { useNavigate } from "react-router-dom";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Link } from "react-router-dom";

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
            <img src={logo} alt="Okoders" width="145px" />
            <Typography style={style.detailsText} variant="body2" color="white">
              Okoders is an award winning Custom Software Development Company based in
              Gurugram, India.
            </Typography>
            <Box style={style.detailsEmail}>
              <Typography
                onClick={() =>
                  (window.location.href = "mailto: " + companyDetail.email)
                }
                style={style.infoText}
                sx={{ fontSize: "16px" }}
                variant="body2"
                color="white"
              >
                {companyDetail.email}
              </Typography>
            </Box>
            <Typography
              onClick={() =>
                (window.location.href = "tel://" + companyDetail.contact)
              }
              style={style.infoText}
              sx={{ fontSize: "16px" }}
              variant="body2"
              color="white"
            >
              <span style={{ fontWeight: "600" }}>Call Us: </span>
              {companyDetail.contact}
            </Typography>
            <Typography
              onClick={() =>
                (window.location.href = "https://goo.gl/maps/sQyx2zkoPqSx3GoN6")
              }
              style={style.infoText}
              sx={{ fontSize: "16px" }}
              variant="body2"
              color="white"
            >
              <span style={{ fontWeight: "600" }}>Address: </span>
              {companyDetail.address}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={3} style={style.whoWeAre}>
            <Typography variant="body2" fontWeight="600" color="white">
              Useful Links
            </Typography>
            <Typography
              onClick={() => navigate("customsoftware")}
              sx={style.linkText}
              variant="body2"
              color="white"
            >
              Custom Software
            </Typography>
            <Typography
              onClick={() => navigate("outsourcing")}
              sx={style.linkText}
              variant="body2"
              color="white"
            >
              Outsourcing
            </Typography>
            <Typography
              onClick={() => navigate("designstudio")}
              sx={style.linkText}
              variant="body2"
              color="white"
            >
              Design Studio
            </Typography>

            <Typography
              onClick={() => navigate("career")}
              sx={style.linkText}
              variant="body2"
              color="white"
            >
              Join Our Team
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
            <Typography sx={style.linkText} variant="body2" color="white">
              News
            </Typography>
            <Typography sx={style.linkText} variant="body2" color="white">
              Testimonials
            </Typography>
            <Typography
              onClick={() => navigate("contactus")}
              sx={style.linkText}
              variant="body2"
              color="white"
            >
              Contact Us
            </Typography>
          </Grid>
        </Grid>
        <Box style={style.policyNsocial}>
          <Box
            style={style.policy}
            sx={{
              justifyContent: { xs: "center", sm: "center", md: "flex-start" },
            }}
          >
            <Typography
            component={Link}
            to="/privacypolicy"
              style={style.linkText__privacy}
              // variant="body2"
              color="white"
            >
              Privacy Policy
            </Typography>
            <Typography
             component={Link}
             to="/termandcondition"
              style={style.linkText__privacy}
              // variant="body2"
              color="white"
            >
              Terms
            </Typography>

            <Typography
              style={style.linkText__privacy}
              // variant="body2"
              color="white"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CopyrightIcon style={{ fontSize: "16px" }} /> 2023 OKoders. All
              rights reserved.
            </Typography>
          </Box>
          <Box style={style.love}>
            <Typography variant="body2" color="white">
              Made with ❤️ by okoders
            </Typography>
          </Box>
          <Box
            style={style.social}
            sx={{
              justifyContent: { xs: "center", sm: "center", md: "flex-end" },
            }}
          >
            {/* <img
              style={style.socialIcon}
              src={twitter}
              alt="Twitter"
              height="18px"
            /> */}
            <a
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              href="https://www.linkedin.com/company/okoderstech/mycompany/ "
            >
            </a>
            {/* 
            <img
              style={style.socialIcon}
              src={facebook}
              alt="facebook"
              height="18px"
            /> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
