import React from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Grid,
  Toolbar,
} from "@mui/material";
import Frame from "../../../Assets/designStdio/frame1.svg";
import Frame2 from "../../../Assets/designStdio/frame2.svg";
import light from "../../../Assets/designStdio/designStudio-light.svg";
import uiux from "../../../Assets/designStdio/uiux.svg";
import Motion from "../../../Assets/designStdio/motion.svg";
import Graphic from "../../../Assets/designStdio/graphicDesign.svg";
import Branding from "../../../Assets/designStdio/branding.svg";
import Rectangle1 from "../../../Assets/designStdio/Rectangle1.svg";
import Rectangle2 from "../../../Assets/designStdio/Rectangle2.svg";
import Rectangle3 from "../../../Assets/designStdio/Rectangle3.svg";
import o1 from "../../../Assets/designStdio/01.svg";
import o2 from "../../../Assets/designStdio/02.svg";
import o3 from "../../../Assets/designStdio/03.svg";
import o4 from "../../../Assets/designStdio/04.svg";
import UnderstandingBrief from "../../../Assets/designStdio/Understanding Brief.svg";
import BrainstormingResearch from "../../../Assets/designStdio/Brainstorming & Research.svg";
import DesignProcess from "../../../Assets/designStdio/Design Process.svg";
import DeliverPayment from "../../../Assets/designStdio/Deliver & Payment.svg";
import yasod from "../../../Assets/designStdio/p1.png";
import Ajinke from "../../../Assets/designStdio/p2.png";
import Mehul from "../../../Assets/designStdio/p3.png";
import ten10lush from "../../../Assets/designStdio/10puls.svg";
import fiveteen10lush from "../../../Assets/designStdio/15plus.svg";
import thirty30lush from "../../../Assets/designStdio/30plus.svg";

// import ImageGrid from "../../Constant/ImageGrid/ImageGrid";
import ImageGrid from "../../Modals/ImageGrid";
import { imageList } from "../../../Data/DesignSudioImageList";

import Enquiry from "../../Modals/Enquiry";
import GoToTop from "../../GotoTop";

function DesignStudio({ theme }: { theme: any }) {
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
    responsiveImage1: {
      maxWidth: "300px",
      width: "100%",
      height: "auto",
      mixBlendMode: "lighten",
    },
    numberText: {
      fontWeight: "700",
      backgroundImage: `linear-gradient(90deg, ${theme.textColor.grad1}, ${theme.textColor.grad2})`,
      backgroundSize: "100%",
    } as React.CSSProperties,
    numberTextLabel: {
      fontSize: "22px",
      fontWeight: 500,
      padding: "12px 0",
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
      width: "140px",
      height: "140px",
      borderRadius: "50%",
      border: "2px solid #D9D9D9",
      background: "#72E0C0",
    } as React.CSSProperties,
  };

  return (
    <>
      <Toolbar
        style={{
          backgroundColor: `rgba(197, 234, 255, 0.41)`,
        }}
      />

      <Box
        style={style.container}
        sx={{
          paddingBottom: "0px !important",
          backgroundImage: `linear-gradient(180deg, rgba(197, 234, 255, 0.41), rgba(237, 215, 251, 0.56))`,
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
              <span style={{ fontWeight: "700" }}>Design Studio</span>
              <br />
              Builds Custom Experiences
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
            <Box
              mt={8}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
              }}
            >
              <img
                src={Frame2}
                alt="CustomHeader"
                width="90%"
                style={{ position: "absolute", top: -80, maxWidth: "900px" }}
              />

              <img
                src={Frame}
                alt="CustomHeader"
                width="90%"
                style={{ maxWidth: "900px" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          background: "#092532",
          color: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          padding: "40px",
        }}
      >
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                height: "500px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h2" color="inherit">
                Bringing <span style={{ fontWeight: 700 }}> Brands</span> To
                Life With Strategy And Design{" "}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={5}>
            <img
              style={{
                mixBlendMode: "lighten",
                maxWidth: "500px",
                width: "100%",
                height: "auto",
              }}
              src={light}
              alt=""
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <Box
              sx={{
                height: "500px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // alignItems: "center",
              }}
            >
              <Box>
                <Typography>
                  <img src={thirty30lush} alt="" />
                </Typography>
                <Typography color="inherit" style={style.numberTextLabel}>
                  Happy Clients
                </Typography>
              </Box>
              <Box>
                <Typography variant="h2" color="inherit">
                  <img src={fiveteen10lush} alt="fivetennPlusg" />
                </Typography>
                <Typography color="inherit" style={style.numberTextLabel}>
                  Year of Experience
                </Typography>
              </Box>
              <Box>
                <Typography color="inherit" variant="h2">
                  <img src={ten10lush} alt="two200Plush" />
                </Typography>
                <Typography color="inherit" style={style.numberTextLabel}>
                  Complete Projects
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box pt={5} textAlign="center">
          <Box
            pb={5}
            textAlign="center"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Typography
              maxWidth="650px"
              textAlign="center"
              variant="h3"
              color="inherit"
            >
              Our <span style={{ fontWeight: "600" }}>Design Studio</span>{" "}
              Services that lead the way
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", }}>
            <Typography
              maxWidth="900px"
              textAlign="center"
              color="inherit"
              pb={5}
            >
             Okoders Design Studio offers expert help for new website launches, revamps, or brand transformation. Our skilled and creative professionals are here to help you achieve your goals and reach new heights of success.
            </Typography>
          </Box>

          <Box pb={5} style={{display:"flex",justifyContent:"center",width:"92vw"}} >
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6} lg={6} >
                <Box>
                  <Box textAlign="center">
                    <img src={uiux} alt="" />
                  </Box>
                  <Box mt={2} mb={3}>
                    <Typography variant="h6">UI/UX Designing</Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography color="inherit" maxWidth="400px">
                      Having a professionally designed website legitimises the
                      intentions of your business.
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} lg={6} >
                <Box>
                  <Box textAlign="center">
                    <img src={Branding} alt="" />
                  </Box>
                  <Box mt={2} mb={3}>
                    <Typography variant="h6">Branding</Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography color="inherit" maxWidth="400px">
                      Powerful branding goes deeper than appearances. It is the
                      holistic way of how you deliver your product.
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              {/* <Grid item xs={12} sm={6}>
                <Box>
                  <Box textAlign="center">
                    <img src={Graphic} alt="" />
                  </Box>
                  <Box mt={2} mb={3}>
                    <Typography variant="h6">Graphic Design</Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography color="inherit" maxWidth="400px">
                      Those who master their digital customer experience today
                      will be the market leaders of tomorrow.
                    </Typography>
                  </Box>
                </Box>
              </Grid> */}

              {/* <Grid item xs={12} sm={6}>
                <Box>
                  <Box textAlign="center">
                    <img src={Motion} alt="" />
                  </Box>
                  <Box mt={2} mb={3}>
                    <Typography variant="h6">Motion Graphics</Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography color="inherit" maxWidth="400px">
                      People connect through stories. Well crafted animated
                      videos are proven to help the audience develop a
                      connection to the brand.
                    </Typography>
                  </Box>
                </Box>
              </Grid> */}
            </Grid>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          color: "#fff",
          background: "#092532",
          backgroundImage: `url(${Rectangle1})`,
          padding: "24px 48px 40px 48px",
        }}
      >
        <Box pb={5} textAlign="center" sx={{ color: "inherit" }}>
          <Typography variant="h3" color="inherit">
            Our <span style={{ fontWeight: 600 }}>Process</span>
          </Typography>{" "}
        </Box>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ overflow: "hidden" }}>
              <Typography variant="h1" color="inherit" flexWrap="wrap">
                <img src={o1} alt="01" />
                <br />
                <img src={UnderstandingBrief} alt="01" />
                {/* <br />
                Understanding Brief */}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography color="inherit">
                We discuss your needs and expectations regarding your solution.
                All inputs from you get converted into a well-defined process
                flow chart by our team.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* <Box
        sx={{
          border: "1px solid blue",
          color: "#fff",
          background: "#092532",
          backgroundImage: `url(${Rectangle1})`,
          padding: "0 48px 40px 48px",
        }}
      >
        <Grid item xs={12} sm={6}>
          <Box>
            <Typography variant="h1" color="inherit">
              02 Brainstorming & Research
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box>
            <Typography color="inherit">
              People connect through stories. Well crafted animated videos are
              proven to help the audience develop a connection to the brand.
            </Typography>
          </Box>
        </Grid>
      </Box> */}

      <Box
        sx={{
          color: "#fff",
          background: "#092532",
          backgroundImage: `url(${Rectangle2})`,
          padding: "0 48px 40px 48px",
        }}
      >
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ overflow: "hidden" }}>
              <Typography variant="h1" color="inherit">
                <img src={o2} alt="02" />
                <br />
                <img src={BrainstormingResearch} alt="BrainstormingResearch" />

                {/* Brainstorming & Research */}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box>
              <Typography color="inherit">
                Every Product or Solution is unique in terms of specific use
                cases. The team of Okoders throws circumferential views to
                better grasp the approach of development. Strong discussions
                beget better results.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          color: "#fff",
          background: "#092532",
          backgroundImage: `url(${Rectangle3})`,
          padding: "0 48px 40px 48px",
        }}
      >
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ overflow: "hidden" }}>
              <Typography color="inherit" variant="h1">
                <img src={o3} alt="03" />
                <br />
                <img src={DesignProcess} alt="DesignProcess" />
                {/* Design Process */}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography color="inherit">
                Okoders and Clients move parallel in the path of development.
                You are updated frequently at every stage. The seeded idea
                starts growing into a full-fledged product under your preview.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          color: "#fff",
          background: "#092532",
          backgroundImage: `url(${Rectangle3})`,
          padding: "0 48px 40px 48px",
        }}
      >
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h1" color="inherit">
              <img src={o4} alt="01" />
              <br />
              <img src={DeliverPayment} alt="DeliverPayment" />
              {/* Deliver & Payment */}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography color="inherit">
                Flawless deployment with total control on the timeline. We don’t
                bind you with any dependencies post deployment.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundImage: `linear-gradient(180deg, rgba(197, 234, 255, 0.41), rgba(237, 215, 251, 0.56), rgba(237, 215, 251, 0))`,
        }}
      >
        <Box
          style={{
            maxWidth: "1300px",
            width: "100%",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            paddingTop: "40px",
          }}
        >
          <Box textAlign="center">
            <Typography variant="h2">
              We <span style={{ fontWeight: 700 }}>Create</span> And Innovate
            </Typography>
            <Box
              pt={2}
              pb={5}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Typography
                maxWidth="600px"
                style={{ fontSize: "18px", fontWeight: 400 }}
              >
                With a proven track record of designing a diverse range of
                projects for clients across industries, you can trust us to
                deliver exceptional results that exceed your expectations.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          style={style.container}
          sx={{
            overflow: "hidden",
            position: "relative",
            flexDirection: "column",
            padding: "40px 0px !important",
          }}
        >
          <Box
            style={style.wrapper}
            sx={{
              zIndex: 100,
              justifyContent: "center !important",
              padding: {
                xs: "10px 0px 70px 0px !important",
                sm: "10px 0px 100px 0px !important",
                md: "10px 0px 8px 0px !important",
              },
              maxWidth: "100% !important",
            }}
          >
            <Box
              style={{
                maxWidth: "1300px",
                padding: "0px 30px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ImageGrid itemData={imageList} />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box style={style.container}>
        <Box style={style.wrapper}>
          <Box
            style={style.uniWrapper}
            sx={{
              flexDirection: "column",
              width: { xs: "100%", sm: "70%", md: "80%" },
            }}
          >
            <Typography variant="h3" maxWidth="600px" textAlign="center">
              Our Professional and{" "}
              <span style={{ fontWeight: 700 }}>Creative</span> Team
            </Typography>
            <Box style={style.professionalTeam}>
            <Box style={style.professionalTeamContainer}>
                <img
                  style={style.professionalTeamImageContainer}
                  src={Ajinke}
                  alt="Mehul"
                  width="170px"
                />
                <Typography variant="subtitle2">Ajinkya Kale</Typography>
                <Typography variant="body2" fontWeight="400">
                  Lead UX/UI Designer
                </Typography>
              </Box>
              <Box style={style.professionalTeamContainer}>
                <img
                  style={style.professionalTeamImageContainer}
                  src={yasod}
                  alt="yasod"
                  width="170px"
                />
                <Typography variant="subtitle2">Yashod Tyagi</Typography>
                <Typography variant="body2" fontWeight="400">
                  Sr. UX/UI Designer
                </Typography>
              </Box>
              <Box style={style.professionalTeamContainer}>
                <img
                  style={style.professionalTeamImageContainer}
                  src={Mehul}
                  alt="Akinke"
                  width="170px"
                />
                <Typography variant="subtitle2">Mehul Chauhani</Typography>
                <Typography variant="body2" fontWeight="400">
                  Sr. UX/UI Designer
                </Typography>
              </Box>
             
            </Box>
          </Box>
        </Box>
      </Box>

      <Enquiry theme={theme} />
      <GoToTop />
    </>
  );
}

export default DesignStudio;
