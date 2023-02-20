import {
  Box,
  Button,
  Grid,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import customHeader from "../../../Assets/images/customHeader.svg";
import { diverseIndustry } from "../../../Data/DiverseIndustry";
import { team } from "../../../Data/Team";
import { techStacks } from "../../../Data/TechStacks";
import Counter from "../../Modals/Counter";
import Enquiry from "../../Modals/Enquiry";
import customDarkImage from "../../../Assets/images/customDarkImage.png";
import GoToTop from "../../GotoTop";

function CustomSoftware({ theme }: { theme: any }) {
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
  };
  return (
    <>
      <Toolbar
        style={{
          backgroundImage: `linear-gradient(90deg, ${theme.backgroundColor.yelgre3}, ${theme.backgroundColor.yelgre4})`,
        }}
      />
      <Box
        style={style.container}
        sx={{
          paddingBottom: "0px !important",
          backgroundImage: `linear-gradient(90deg, ${theme.backgroundColor.yelgre3}, ${theme.backgroundColor.yelgre4})`,
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
              koders Custom <span style={{ fontWeight: "700" }}>
                Software
              </span>{" "}
              Development Services
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
              src={customHeader}
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
          paddingBottom: "0px !important",
          backgroundColor: theme.palette.primary.main,
          position: "relative",
        }}
      >
        <Box style={style.wrapper} sx={{ paddingBottom: "0px !important" }}>
          <img
            src={customDarkImage}
            alt="Custom Dark"
            width="70%"
            style={{
              mixBlendMode: "lighten",
              opacity: 0.7,
              zIndex: 1000,
              position: "absolute",
              top: "0px",
              right: "0px",
            }}
          />
          <Box
            style={style.uniWrapper}
            sx={{ flexDirection: "column", zIndex: 2000 }}
          >
            <Box style={{ width: "100%", margin: "80px 0px" }}>
              <Typography
                textAlign="left"
                maxWidth="500px"
                fontWeight="400"
                variant="h3"
                color="white"
              >
                Software{" "}
                <span style={{ fontWeight: "700" }}>
                  Development & Engineering
                </span>{" "}
                Services
              </Typography>
            </Box>
            <Counter theme={theme} textColor="white" />
            <Box>
              <Typography variant="h1" color="white" textAlign="center">
                Provide <span style={{ fontWeight: "700" }}>Tech</span>{" "}
                Solutions
              </Typography>
              <Typography
                maxWidth="1000px"
                fontWeight="400"
                variant="subtitle2"
                color="white"
                textAlign="center"
              >
                We deliver robust, scalable, and reliable software product
                solutions to clients across the globe driven by the top 1% of
                software engineering talent in India
              </Typography>
            </Box>
            <Box>
              <Box
                sx={{
                  display: { xs: "none", sm: "none", md: "flex" },
                  gap: { xs: "15px", sm: "25px", md: "30px" },
                  justifyContent: "center",
                  alignItems: "stretch",
                  width: "100%",
                  maxWidth: "1100px",
                }}
              >
                <Box
                  style={{
                    borderRadius: "24px",
                    backgroundColor: "#ffa047",
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                  }}
                >
                  <Box
                    style={{
                      height: "250px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <Typography
                      padding="10px"
                      variant="subtitle2"
                      color="primary"
                      textAlign="center"
                    >
                      Financial Management
                    </Typography>
                  </Box>
                  <Box
                    style={{
                      height: "250px",
                      borderRadius: "24px",
                      backgroundColor: "#fdc449",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <Typography
                      padding="10px"
                      variant="subtitle2"
                      color="primary"
                      textAlign="center"
                    >
                      Full Stack
                      <br />
                      Developers
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flex: 2,
                    flexDirection: "column",
                    gap: { xs: "15px", sm: "25px", md: "30px" },
                  }}
                >
                  <Box
                    style={{
                      borderRadius: "24px",
                      backgroundColor: "#123617",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <Box
                      style={{
                        height: "250px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 1,
                      }}
                    >
                      <Typography
                        padding="10px"
                        variant="subtitle2"
                        color="white"
                        textAlign="center"
                      >
                        Workforce Management
                      </Typography>
                    </Box>
                    <Box
                      style={{
                        height: "250px",
                        borderRadius: "24px",
                        backgroundColor: "#95ecff",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 1,
                      }}
                    >
                      <Typography
                        padding="10px"
                        variant="subtitle2"
                        color="primary"
                        textAlign="center"
                      >
                        E-Learning
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    style={{
                      borderRadius: "24px",
                      backgroundColor: "#fdc449",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <Box
                      style={{
                        height: "250px",
                        borderRadius: "24px",
                        backgroundColor: "#fdcedb",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 1,
                      }}
                    >
                      <Typography
                        padding="10px"
                        variant="subtitle2"
                        color="primary"
                        textAlign="center"
                      >
                        Web App Portals
                      </Typography>
                    </Box>
                    <Box
                      style={{
                        height: "250px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 1,
                      }}
                    >
                      <Typography
                        padding="10px"
                        variant="subtitle2"
                        color="primary"
                        textAlign="center"
                      >
                        Mobile App Development IOS & Android
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  style={{
                    borderRadius: "24px",
                    backgroundColor: "#f49f16",
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                  }}
                >
                  <Box
                    style={{
                      height: "250px",
                      borderRadius: "24px",
                      backgroundColor: "#4b0a93",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <Typography
                      padding="10px"
                      variant="subtitle2"
                      color="white"
                      textAlign="center"
                    >
                      Content Management System (CRM)
                    </Typography>
                  </Box>
                  <Box
                    style={{
                      height: "250px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <Typography
                      padding="10px"
                      variant="subtitle2"
                      color="primary"
                      textAlign="center"
                    >
                      Enterprise Resource Planning (ERP)
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: { xs: "flex", sm: "flex", md: "none" },
                  gap: { xs: "15px", sm: "25px", md: "30px" },
                  justifyContent: "center",
                  alignItems: "stretch",
                  width: "100%",
                  maxWidth: "1100px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flex: 2,
                    flexDirection: "column",
                    gap: { xs: "15px", sm: "25px", md: "30px" },
                  }}
                >
                  <Box
                    style={{
                      borderRadius: "24px",
                      backgroundColor: "#ffa047",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <Box
                      style={{
                        height: "250px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 1,
                      }}
                    >
                      <Typography
                        padding="10px"
                        variant="subtitle2"
                        color="white"
                        textAlign="center"
                      >
                        Financial Management
                      </Typography>
                    </Box>
                    <Box
                      style={{
                        height: "250px",
                        borderRadius: "24px",
                        backgroundColor: "#fdc449",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 1,
                      }}
                    >
                      <Typography
                        padding="10px"
                        variant="subtitle2"
                        color="primary"
                        textAlign="center"
                      >
                        Full Stack
                        <br />
                        Developers
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    style={{
                      borderRadius: "24px",
                      backgroundColor: "#123617",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <Box
                      style={{
                        height: "250px",
                        borderRadius: "24px",
                        backgroundColor: "#95ecff",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 1,
                      }}
                    >
                      <Typography
                        padding="10px"
                        variant="subtitle2"
                        color="primary"
                        textAlign="center"
                      >
                        Workforce Management
                      </Typography>
                    </Box>
                    <Box
                      style={{
                        height: "250px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 1,
                      }}
                    >
                      <Typography
                        padding="10px"
                        variant="subtitle2"
                        color="white"
                        textAlign="center"
                      >
                        E-Learning
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    style={{
                      borderRadius: "24px",
                      backgroundColor: "#fdc449",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <Box
                      style={{
                        height: "250px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 1,
                      }}
                    >
                      <Typography
                        padding="10px"
                        variant="subtitle2"
                        color="primary"
                        textAlign="center"
                      >
                        Web App Portals
                      </Typography>
                    </Box>
                    <Box
                      style={{
                        height: "250px",
                        borderRadius: "24px",
                        backgroundColor: "#fdcedb",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 1,
                      }}
                    >
                      <Typography
                        padding="10px"
                        variant="subtitle2"
                        color="primary"
                        textAlign="center"
                      >
                        Mobile App Development IOS & Android
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    style={{
                      borderRadius: "24px",
                      backgroundColor: "#f49f16",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <Box
                      style={{
                        height: "250px",
                        borderRadius: "24px",
                        backgroundColor: "#4b0a93",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 1,
                      }}
                    >
                      <Typography
                        padding="10px"
                        variant="subtitle2"
                        color="white"
                        textAlign="center"
                      >
                        Content Management System (CRM)
                      </Typography>
                    </Box>
                    <Box
                      style={{
                        height: "250px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 1,
                      }}
                    >
                      <Typography
                        padding="10px"
                        variant="subtitle2"
                        color="primary"
                        textAlign="center"
                      >
                        Enterprise Resource Planning (ERP)
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <Typography variant="h1" color="white" textAlign="center">
                Tech <span style={{ fontWeight: "700" }}>Stacks</span>
              </Typography>
              <Typography
                maxWidth="1000px"
                fontWeight="400"
                variant="subtitle2"
                color="white"
                textAlign="center"
              >
                Get what you are looking for to fulfill your software
                development and outsourcing needs at ValueCoders, with our
                expertise on all in-demand technologies & platforms.
              </Typography>
            </Box>
            <Box style={style.techStackContainer}>
              {techStacks.map((item, index) => {
                return (
                  <Box
                    key={index}
                    style={{
                      backgroundColor: item.color,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      paddingTop: "20px",
                      width: "70px",
                      height: "300px",
                    }}
                  >
                    <Box
                      style={{
                        display: "flex",
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={item.icon}
                        alt="logo"
                        width="100%"
                        style={{ maxWidth: "55px", maxHeight: "50px" }}
                      />
                    </Box>
                    <Box
                      style={{
                        paddingTop: "20px",
                        display: "flex",
                        flex: 3,
                        justifyContent: "center",
                        alignItems: "flex-start",
                      }}
                    >
                      <Typography
                        style={{
                          writingMode: "vertical-lr",
                          textOrientation: "sideways",
                        }}
                        variant="subtitle2"
                        fontWeight="700"
                        color="white"
                      >
                        {item.name}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        style={style.container}
        sx={{
          backgroundImage: `linear-gradient(180deg, ${theme.backgroundColor.yelgre3}, ${theme.backgroundColor.yelgre4}, rgba(167, 216, 222, 0))`,
        }}
      >
        <Box style={style.wrapper}>
          <Box style={style.uniWrapper} sx={{ flexDirection: "column" }}>
            <Box>
              <Typography variant="h2" color="primary" textAlign="center">
                We Serve{" "}
                <span style={{ fontWeight: "700" }}>Diverse Industry</span>{" "}
                Verticals
              </Typography>
              <Typography
                maxWidth="900px"
                fontWeight="400"
                variant="body1"
                color="primary"
                textAlign="center"
              >
                Being a TAAS-based start-up we hold expertise in developing
                solutions from diverse verticals like Fintech, IoT, Edutech,
                Logistics and Fleet management Election Tech Tool etc. We hold
                the ability to develop it from scratch!
              </Typography>
            </Box>
            <Grid container rowSpacing="40px" columnSpacing="20px">
              {diverseIndustry.map((item, index) => {
                return (
                  <Grid
                    key={index}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box
                      padding="30px"
                      style={{
                        borderRadius: "25px",
                        gap: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "white",
                        boxShadow: "0px 10px 20px rgba(0,0,0,.10)",
                      }}
                    >
                      <img
                        src={item.icon}
                        style={{ maxWidth: "60px", maxHeight: "60px" }}
                        alt="icon"
                      />
                      <Typography
                        variant="subtitle2"
                        fontWeight="700"
                        color="primary"
                      >
                        {item.name}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
            <Box>
              <Typography variant="h2" color="primary" textAlign="center">
                Professional and Tech Expert is{" "}
                <span style={{ fontWeight: "700" }}>Our Team</span>
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
              {team.map((item, index) => {
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
                        maxHeight:"215px"
                      }}
                    >
                      <img src={item.image} alt={item.name} width="100%"   />
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
      </Box>
      <Enquiry theme={theme} />
      <GoToTop />
    </>
  );
}

export default CustomSoftware;
