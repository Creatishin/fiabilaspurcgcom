import React from "react";
import {
  Box,
  Grid,
  Typography,
  Divider,
  IconButton,
  Toolbar,
  Button,
} from "@mui/material";
import PeopleWorkingOffice from "../../Assets/about/diverse-people-working-office.svg";
// import rajeev from "../../Assets/about/Rajeev.svg";
// import anil from "../../Assets/about/Anil.svg";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ConfidentTeam from "../../../Assets/about/businessTeam.png";
import rectangle1 from "../../../Assets/about/rectangle-1.png";
import rectangle2 from "../../../Assets/about/rectangle-2.svg";
import Enquiry from "../../Modals/Enquiry";
// import Anil from "../../../Assets/images/Anil.png";
// import Anil from "../../../Assets/about/anil2.png";
// import Anil from "../../../Assets/images/anil3.jpg";
import Anil from "../../../Assets/images/anilAboutt.jpg";
import Rajeev from "../../../Assets/about/rajeev2.png";
// import Rajeev from "../../../Assets/images/Rajeev.png";
import linkdin from "../../../Assets/Icons/linkedin.svg";
import { useNavigate } from "react-router-dom";
import Counter from "../../Modals/Counter";

function About({ theme }: { theme: any }) {
  const style = {
    container: {
      padding: 0,
      width: "100%",
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    } as React.CSSProperties,
    containerForFounder: {
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
      gap: "20px",
    } as React.CSSProperties,
    mainPara: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "40px",
      flex: 1,
    } as React.CSSProperties,
    mainBox: {
      flexWrap: "wrap",
      gap: "20px",
    } as React.CSSProperties,
    mainButton: {
      borderRadius: "12px",
      padding: "0px 30px",
      width: "fit-content",
      textDecoration: "none",
      textTransform: "none",
      height: "60px",
    } as React.CSSProperties,
    mainCategory: {
      flex: 1,
      alignItems: "center",
      marginLeft: "30px",
      justifyContent: "center",
      gap: "40px",
    } as React.CSSProperties,
    headerAbout: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    } as React.CSSProperties,
    headerAboutButton: {
      backgroundColor: theme.palette.primary.main,
      borderRadius: "12px",
      padding: "0px 40px",
      width: "fit-content",
      textDecoration: "none",
      textTransform: "none",
      height: "60px",
    } as React.CSSProperties,
    employeeNumber: {
      display: "flex",
      padding: "10px",
      alignItems: "center",
      gap: "20px",
      flexGrow: 1,
    } as React.CSSProperties,
    projectNumber: {
      display: "flex",
      padding: "10px",
      alignItems: "center",
      gap: "20px",
      flexGrow: 1,
    } as React.CSSProperties,
    clientNumber: {
      display: "flex",
      padding: "10px",
      alignItems: "center",
      gap: "20px",
      flexGrow: 1,
    } as React.CSSProperties,
    numberText: {
      fontWeight: "700",
      backgroundImage: `linear-gradient(90deg, ${theme.textColor.grad1}, ${theme.textColor.grad2})`,
      backgroundSize: "100%",
    } as React.CSSProperties,
    numberDivider: {
      height: "90px",
      width: "1px",
      margin: "0px 5px",
      backgroundColor: "#C9C9C9",
    } as React.CSSProperties,
    chooseAccordionContainer: {
      display: "flex",
      flexGrow: 1,
      width: "100%",
      height: "600px",
    } as React.CSSProperties,
    chooseAccordion: {
      display: "flex",
      flexGrow: 1,
      width: "50%",
      flexDirection: "column",
      gap: "20px",
    } as React.CSSProperties,
    chooseImage: {
      flexGrow: 1,
      width: "50%",
      gap: "20px",
      justifyContent: "flex-end",
    } as React.CSSProperties,
    professionalTeam: {
      display: "flex",
      flexWrap: "wrap",
      gap: "50px",
      alignItems: "center",
      justifyContent: "center",
    } as React.CSSProperties,
    professionalTeamContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "5px",
    } as React.CSSProperties,
    professionalTeamImageContainer: {
      width: "100%",
      maxWidth: "180px",
      height: "auto",
      maxHeight: "135px",
      // borderRadius: "50%",
      // border: "2px solid #D9D9D9",
    } as React.CSSProperties,
    carousel: {} as React.CSSProperties,
    carouselButton: {} as React.CSSProperties,
    carouselContainer: {} as React.CSSProperties,
    carouselItem: {} as React.CSSProperties,
  };

  const navigate = useNavigate();

  return (
    <>
      <Toolbar
        style={{ backgroundColor: theme.backgroundColor.mainGradient1 }}
      />
      <Box
        style={style.container}
        sx={
          {
            // backgroundImage: `url(${PeopleWorkingOffice})`,
            // height: "70vh",
            // display: "flex",
            // justifyContent: "center",
          }
        }
        // textAlign="center"
      >
        <Box
          textAlign="center"
          sx={{
            display: "flex",
            justifyContent: "center",
            background: `linear-gradient(${theme.backgroundColor.mainGradient1}, ${theme.backgroundColor.mainGradient2})`,
            width: "100vw",
          }}
        >
          <Box pt={8}>
            <Typography variant="h2" style={{ color: "#08323C" }}>
              About <span style={{ color: "#14CC97", fontWeight: 700 }}>O</span>
              koders
            </Typography>
            <Box maxWidth="60vw" pt={3}>
              <Typography
                maxWidth="1000px"
                fontWeight="400"
                variant="subtitle2"
                color="primary"
                textAlign="center"
              >
                For more than 10 years, we’ve helped some of the world’s biggest
                organizations build a competitive advantage through digital.
              </Typography>
            </Box>
            <Box textAlign="center" pt={5} pb={5}>
              <Button
                onClick={() => navigate("#exploreMore")}
                style={style.headerAboutButton}
                variant="contained"
              >
                <Typography variant="button" color="white" fontWeight="700">
                  Get Know More
                </Typography>
              </Button>

              {/* <Typography variant="h6" color="primary">
                Get Know More
              </Typography> */}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box style={style.container}>
        <Box style={style.wrapper}>
          <Counter theme={theme} />
        </Box>
      </Box>

      {/* <Box style={style.container}>
        <Box style={style.wrapper}>
          <Box
            sx={{
              justifyContent: {
                xs: "flex-start",
                sm: "flex-start",
                md: "center",
              },
            }}
            style={style.employeeNumber}
          >
            <Typography
              className="numberText"
              variant="h1"
              style={style.numberText}
            >
              150+
            </Typography>
            <Typography style={{ maxWidth: "180px" }} variant="body1">
              Employees in Team
            </Typography>
          </Box>
          <Divider
            sx={{ display: { xs: "none", sm: "none", md: "block" } }}
            style={style.numberDivider}
            orientation="vertical"
          ></Divider>
          <Box
            sx={{
              justifyContent: {
                xs: "flex-start",
                sm: "flex-start",
                md: "center",
              },
            }}
            style={style.projectNumber}
          >
            <Typography
              className="numberText"
              variant="h1"
              style={style.numberText}
            >
              850+
            </Typography>
            <Typography style={{ width: "min-content" }} variant="body1">
              Project Completed
            </Typography>
          </Box>
          <Divider
            sx={{ display: { xs: "none", sm: "none", md: "block" } }}
            style={style.numberDivider}
            orientation="vertical"
          ></Divider>
          <Box
            sx={{
              justifyContent: {
                xs: "flex-start",
                sm: "flex-start",
                md: "center",
              },
            }}
            style={style.clientNumber}
          >
            <Typography
              className="numberText"
              variant="h1"
              style={style.numberText}
            >
              221+
            </Typography>
            <Typography style={{ maxWidth: "180px" }} variant="body1">
              Satisfied Client in 32 Countryes
            </Typography>
          </Box>
        </Box>
      </Box> */}
      <Box p={5} style={{ display: "flex", justifyContent: "center" }}>
        <Box
          p={3}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "rgba(237, 246, 255, 0.85)",
            borderRadius: "41px",
            maxWidth: "1080px",
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Box>
                <img
                  src={Anil}
                  alt=""
                  style={{
                    // height: "auto",
                    maxWidth: "400px",
                    width: "100%",
                  }}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box pl={3} textAlign="center">
                <Box textAlign="center">
                  <Typography style={{ color: "", fontSize: "28px" }}>
                    “Digital business transformation is a holistic approach to
                    changing the way an organization thinks, organizes, operates
                    and behaves.”
                  </Typography>
                  <Box pt={3}>
                    <Typography
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#092532",
                      }}
                      variant="h6"
                    >
                      Anil Sadana
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#092532",
                      }}
                    >
                      Founder
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{ padding: "50px 10px" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h1"
            maxWidth="900px"
            fontWeight="400"
            textAlign="center"
            color="primary"
            // style={{ color: "#08323C" }}
          >
            We’re changing the way{" "}
            <span style={{ fontWeight: 700 }}> people think</span> of getting
            their apps developed.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ padding: "40px 10px" }}>
        <Grid container>
          <Grid item xs={12} sm={5}>
            <Box pt={4} sx={{ paddingBottom: "113px" }}>
              <img src={rectangle1} alt="label" />
              <img src={rectangle2} alt="label" />
            </Box>
            <Box>
              <img
                src={ConfidentTeam}
                alt=""
                style={{ height: "auto", maxWidth: "600px", width: "100%" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Box sx={{ background: "#092532", color: "#fff", padding: "24px" }}>
              <Box mb={2} sx={{ color: "#fff" }}>
                <Typography
                  style={{
                    fontSize: "32px",
                    fontWeight: 700,
                    color: "inherit",
                  }}
                >
                  {" "}
                  <span style={{ color: "#14CC97" }}>O</span>ur Purpose
                </Typography>
              </Box>
              <Box sx={{ color: "#fff" }}>
                <Typography
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    lineHeight: "34.5px",
                  }}
                  variant="h4"
                  color="inherit"
                >
                  We help people thrive in the brave pursuit of next
                </Typography>
              </Box>

              <Box pt={4} pb={3} sx={{ color: "#fff" }}>
                <Typography style={{ color: "#fff" }}>
                  At Okoders, we help companies and the public sector keep up
                  with the pace of technological, societal and cultural
                  change—all while meeting the ever-evolving demands and
                  expectations of their customers. How? By elevating customer
                  experiences, modernizing organizations and unlocking value
                  through technology and data. By setting bold but achievable
                  visions for digital transformation, we empower our business
                  partners with true speed and agility.
                </Typography>
              </Box>
            </Box>

            <Box p={3} pt={0} sx={{ background: "#092532", color: "#fff" }}>
              <Box sx={{ color: "#fff" }}>
                <Typography
                  style={{
                    fontSize: "32px",
                    fontWeight: 700,
                    color: "inherit",
                  }}
                >
                  {" "}
                  <span style={{ color: "#14CC97" }}>O</span>ur Values
                </Typography>
              </Box>

              <Box pt={2}>
                <Typography style={{ color: "#fff" }}>
                  Okoders is dedicated to diversity, equity and inclusion. Our
                  experience has shown us that progress is rarely found along
                  the known paths, so we make openness, collaboration, learning
                  and unlearning some of our greatest priorities.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box style={style.containerForFounder}>
        <Box style={style.wrapper}>
          <Box
            style={style.uniWrapper}
            sx={{
              flexDirection: "column",
              width: { xs: "100%", sm: "70%", md: "80%" },
            }}
          >
            <Typography variant="h3">
              Meet Our
              <span style={{ fontWeight: "700" }}> Founders</span>
            </Typography>
            <Box style={style.professionalTeam}>
              <Box style={style.professionalTeamContainer}>
                <img
                  style={style.professionalTeamImageContainer}
                  src={Anil}
                  alt="Anil"
                  width="180px"
                />
                <Typography variant="subtitle2" fontWeight="bold">
                  Anil Sadana
                </Typography>
                <Typography variant="body1" fontWeight="400">
                  Founder
                </Typography>
                <a href="https://www.linkedin.com/company/okoderstech/mycompany/">
                  <img src={linkdin} alt="Linkdin" width="80px" />
                </a>
              </Box>
              <Box style={style.professionalTeamContainer}>
                <img
                  style={style.professionalTeamImageContainer}
                  src={Rajeev}
                  alt="Rajeev"
                  width="170px"
                />
                <Typography variant="subtitle2" fontWeight="bold">
                  Rajeev Tyagi
                </Typography>
                <Typography variant="body1" fontWeight="400">
                  Founder
                </Typography>
                <a href="#">
                  <img src={linkdin} alt="Linkdin" width="80px" />
                </a>
              </Box>
            </Box>
            {/* <Button
              onClick={() => navigate("career")}
              style={style.headerAboutButton}
              variant="contained"
            >
              <Typography variant="button" color="white" fontWeight="400">
                Join Our Team
              </Typography>
            </Button> */}
          </Box>
        </Box>
      </Box>

      <Enquiry theme={theme} />
    </>
  );
}

export default About;
