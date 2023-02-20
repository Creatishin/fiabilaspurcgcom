import {
  Box,
  Button,
  Grid,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import outsourseHeader from "../../../Assets/images/outsourseHeader.png";
import { outSourceTeam } from "../../../Data/Team";
import Counter from "../../Modals/Counter";
import Enquiry from "../../Modals/Enquiry";
import native from "../../../Assets/Icons/native.png";
import shopify from "../../../Assets/Icons/shopify.png";
import salesforce from "../../../Assets/Icons/salesforce.png";
import ruby from "../../../Assets/Icons/ruby.png";
import react from "../../../Assets/Icons/react.png";
import woo from "../../../Assets/Icons/woo.png";
import { hiringServices } from "../../../Data/HiringServices";
import Evaluation from "../../../Assets/images/Evaluation.svg";
import GoToTop from "../../GotoTop";
import '../Home/Home.css'

function Outsourcing({ theme }: { theme: any }) {
  const style = {
    container: {
      padding: "40px 10px",
      width: "100%",
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    } as React.CSSProperties,
    wrapper: {
      padding: "10px",
      maxWidth: "1300px",
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
    } as React.CSSProperties,
    uniWrapper: {
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      gap: "80px",
      padding: "50px 0px",
    } as React.CSSProperties,
    getStartedContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "20px",
      padding: "10px",
      backgroundColor: "white",
      border: "1px solid #BFBFBF",
      borderRadius: "12px",
      maxWidth: "600px",
      width: "90%",
    } as React.CSSProperties,
    textField: {
      border: "0px",
    } as React.CSSProperties,
    inputProps: {
      sx: {
        ".MuiOutlinedInput-notchedOutline.Mui-error": {
          border: "1px solid #FF0000",
        },
        ".MuiOutlinedInput-notchedOutline.Mui-focused": {
          border: "0",
        },
        ".MuiOutlinedInput-notchedOutline": {
          border: "0",
          color: "red",
        },
        "&:hover": {
          ".MuiOutlinedInput-notchedOutline": {
            border: "0",
          },
        },
      },
      style: {
        color: theme.palette.primary.main,
        fontSize: "18px",
        fontWeight: "400",
      },
    },
    inputLableProps: {
      sx: {
        ".MuiFormLabel-asterisk": {
          color: "red",
        },
        ".css-1sefnqk-MuiFormLabel-root-MuiInputLabel-root": {
          top: "0px !important",
        },
      },
      style: {
        color: "#AAAAAA",
        fontSize: "18px",
        fontWeight: "400",
      },
    },
    headerAboutButton: {
      backgroundColor: theme.palette.primary.main,
      borderRadius: "12px",
      padding: "0px 40px",
      width: "fit-content",
      textDecoration: "none",
      textTransform: "none",
      height: "60px",
    } as React.CSSProperties,
    techStackContainer: {
      display: "flex",
      maxWidth: "1000px",
      flexWrap: "wrap",
      width: "90%",
      alignItems: "stretch",
      justifyContent: "center",
    } as React.CSSProperties,
    logoContainer: {
      gap: "20px",
      margin: "20px 0px",
      width: "100%",
      display: "flex",
      alignItems: "stretch",
      justifyContent: "flex-start",
    } as React.CSSProperties,
    logoItem: {
      height: "80px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      backgroundColor: "white",
      width: "33.3%",
    } as React.CSSProperties,
    logoEmptyItem: {
      height: "100px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      width: "33.3%",
    } as React.CSSProperties,
    servicesContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: "30px",
      flexWrap: "wrap",
    } as React.CSSProperties,
    topChoice: {
      boxSizing: "border-box",
      padding: "30px",
      border: "20px",
      borderRadius: "15px",
      backgroundColor: "white",
    } as React.CSSProperties,
  };
  return (
    <>
      <Toolbar style={{ backgroundColor: "rgba(254, 248, 227, .35)" }} />
      <Box
        style={style.container}
        sx={{
          paddingBottom: "0px !important",
          backgroundImage: `linear-gradient(180deg, rgba(254, 248, 227, .35), rgba(255, 203, 203, .35))`,
        }}
      >
        <Box style={style.wrapper} sx={{ paddingBottom: "0px !important" }}>
          <Box style={style.uniWrapper} sx={{ flexDirection: "column" }}>
            <Typography
              maxWidth="900px"
              textAlign="center"
              variant="h2"
              color="primary"
            >
              <span style={{ color: theme.palette.secondary.main }}>O</span>
              koders Provides Full Solution to Build{" "}
              <span style={{ fontWeight: "700" }}>Ecommerce</span> Platform
            </Typography>
            <Box style={style.getStartedContainer}>
              <TextField
                style={style.textField}
                required
                variant="outlined"
                label="Email Id"
                type="email"
                InputProps={style.inputProps}
                InputLabelProps={style.inputLableProps}
              />
              <Button style={style.headerAboutButton} variant="contained">
                <Typography variant="button" color="white" fontWeight="400">
                  Get Started
                </Typography>
              </Button>
            </Box>
            <img
              src={outsourseHeader}
              alt="CustomHeader"
              width="90%"
              style={{ maxWidth: "900px" }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        style={style.container}
        sx={{
          paddingBottom: "40px !important",
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Box style={style.wrapper} sx={{ paddingBottom: "10px !important" }}>
          <Box style={style.uniWrapper} sx={{ flexDirection: "column" }}>
            <Grid container spacing="30px">
              <Grid item xs={12} sm={7} md={6}>
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Typography variant="h2" color="white">
                    Technologies{" "}
                    <span style={{ fontWeight: "700" }}>Experts</span> We
                    provides in Outsourcing Domains
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={5} md={6}>
                <Typography variant="subtitle2" color="white">
                  Ecommerce Experts:
                </Typography>
                <Box style={style.logoContainer}>
                  <Box style={style.logoItem}>
                    <img
                      style={{ maxWidth: "80%", maxHeight: "90%" }}
                      src={woo}
                      alt="woo"
                      height="auto"
                    />
                  </Box>
                  <Box style={style.logoItem}>
                    <img
                      style={{ maxWidth: "80%", maxHeight: "90%" }}
                      src={shopify}
                      alt="shopify"
                      height="auto"
                    />
                  </Box>
                  <Box style={style.logoEmptyItem}></Box>
                </Box>
                <Typography variant="subtitle2" color="white">
                  CRM Experts:
                </Typography>
                <Box style={style.logoContainer}>
                  <Box style={style.logoItem}>
                    <img
                      style={{ maxWidth: "80%", maxHeight: "90%" }}
                      src={salesforce}
                      alt="salesforce"
                      height="auto"
                    />
                  </Box>
                  <Box style={style.logoEmptyItem}></Box>
                  <Box style={style.logoEmptyItem}></Box>
                </Box>
                <Typography variant="subtitle2" color="white">
                  Development Experts:
                </Typography>
                <Box style={style.logoContainer}>
                  <Box style={style.logoItem}>
                    <img
                      style={{ maxWidth: "80%", maxHeight: "90%" }}
                      src={react}
                      alt="react"
                      height="auto"
                    />
                  </Box>
                  <Box style={style.logoItem}>
                    <img
                      style={{ maxWidth: "80%", maxHeight: "90%" }}
                      src={ruby}
                      alt="ruby"
                      height="auto"
                    />
                  </Box>
                  <Box style={style.logoItem}>
                    <img
                      style={{ maxWidth: "80%", maxHeight: "90%" }}
                      src={native}
                      alt="mative"
                      height="auto"
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Counter theme={theme} textColor="white" />
          </Box>
        </Box>
      </Box>
      <Box style={style.container}>
        <Box style={style.wrapper}>
          <Box style={style.uniWrapper} sx={{ flexDirection: "column" }}>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Typography
                style={{ textAlign: "center" }}
                sx={{ width: { xs: "100%", sm: "80%", md: "80%" } }}
                variant="h1"
              >
                Decide on the top choices after{" "}
                <span style={{ fontWeight: "700" }}>analysis.</span>
              </Typography>
              <Typography
                fontWeight="400"
                sx={{
                  width: { xs: "100%", sm: "80%", md: "80%" },
                  textAlign: "center",
                }}
                variant="subtitle2"
              >
                With Okoders simple-to-read output reports, you can keep track
                of the findings as they come in and identify your strongest
                prospects.
              </Typography>
            </Box>
            <Box style={{ width: "100%" }}>
              <Grid container>
                <Grid p={2} item xs={12} sm={6} md={6}>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                      }}
                      className="choiceContainer"
                      style={style.topChoice}
                    >
                      <Typography
                        fontWeight="700" pb={2}
                        variant="body1" maxWidth="60%"
                      >
                        Instantaneous Evaluation Outcomes
                      </Typography>
                      <Typography
                        fontWeight="400"
                        mt={2}
                        variant="caption"
                      >
                        Review the status of each and every evaluation at a
                        glance.
                      </Typography>
                    </Box>
                    <Box
                      sx={{ width: "100%" }}
                      className="choiceContainer"
                      style={style.topChoice}
                    >
                      <Typography maxWidth="60%" fontWeight="700" pb={2} variant="body1">
                        Instantly compare your candidates
                      </Typography>
                      <Typography
                        fontWeight="400"
                        mt={2}
                        variant="caption"
                        color="#808080"
                      >
                        When you click on an evaluation, you can instantly see
                        how your applicants are rated.
                      </Typography>
                    </Box>
                    <Box
                      sx={{ width: "100%" }}
                      className="choiceContainer"
                      style={style.topChoice}
                    >
                      <Typography maxWidth="60%" fontWeight="700" pb={2} variant="body1">
                        Detailed applicant evaluation
                      </Typography>
                      <Typography
                        fontWeight="400"
                        mt={2}
                        variant="caption"
                        color="#808080"
                      >
                        Discover every aspect of your applicants by reading
                        through their in-depth reports and viewing their unique
                        videos.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid p={2} item xs={12} sm={6} md={6}>
                  <Box
                    style={{
                      height: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                    }}
                  >
                    <img
                      src={Evaluation}
                      alt="Evaluation"
                      height="100%"
                      style={{ maxWidth: "80%" }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box style={style.container}>
        <Box style={style.wrapper}>
          <Box style={style.uniWrapper} sx={{ flexDirection: "column" }}>
            <Typography variant="h2" color="primary" textAlign="center">
              Why <span style={{ fontWeight: "700" }}>Hiring</span> Okoders
              Services?
            </Typography>
            <Box style={style.servicesContainer}>
              {hiringServices.map((item, key) => {
                return (
                  <Box
                    key={key}
                    style={{
                      maxWidth: "250px",
                      flexDirection: "column",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <Box
                      style={{
                        height: "70px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={item.icon}
                        alt={item.name}
                        width="90%"
                        height="auto"
                        style={{ maxHeight: "100%" }}
                      />
                    </Box>
                    <Box style={{ textAlign: "center" }}>
                      <Typography
                        variant="body2"
                        mb={1}
                        fontWeight="700"
                        textAlign="center"
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        variant="caption"
                        fontWeight="400"
                        color="#808080"
                        textAlign="center"
                      >
                        {item.para}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <Box style={style.container}>
        <Box style={style.wrapper}>
          <Box style={style.uniWrapper} sx={{ flexDirection: "column" }}>
            <Box>
              <Typography variant="h2" color="primary" textAlign="center">
                Professional and Creative<br/>
                <span style={{ fontWeight: "700" }}>Team</span>
              </Typography>
            </Box>
            <Box
              style={{
                paddingBottom: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: "30px",
              }}
            >
              {outSourceTeam.map((item, index) => {
                return (
                  <Box
                    style={{
                      display: "flex",
                      gap: "20px",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      width:"300px"
                    }}
                    key={index}
                  >
                    <Box
                      style={{
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: "50%",
                        width: "215px",
                        height: "215px",
                      }}
                    >
                      <img src={item.image} alt={item.name} width="100%" />
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        textAlign="center"
                        variant="subtitle1"
                        color="primary"
                        fontWeight="700"
                        lineHeight="35px"
                        fontSize="28px"
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        textAlign="center"
                        variant="caption"
                        color="primary"
                        fontWeight="400"
                      >
                        {item.role}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box> */}
      <Enquiry theme={theme} />
      <GoToTop />
    </>
  );
}

export default Outsourcing;
