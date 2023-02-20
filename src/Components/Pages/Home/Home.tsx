import { Button, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import homeHeader1 from "../../../Assets/images/homeHeader1.png";
import homeHeader2 from "../../../Assets/images/homeHeader2.png";
import homeHeader3 from "../../../Assets/images/homeHeader3.png";
import mono from "../../../Assets/Icons/mono.png";
import "./Home.css";
import { chooseOkoders } from "../../../Data/ChooseOkoders";
import chooseImage from "../../../Assets/images/homeChooseImage.png";
import Accordion from "../../Modals/Accordion";
import android from "../../../Assets/Icons/android.png";
import dotnet from "../../../Assets/Icons/dotnet.png";
import mac from "../../../Assets/Icons/apple.png";
import php from "../../../Assets/Icons/php.png";
import python from "../../../Assets/Icons/python.png";
import wordpress from "../../../Assets/Icons/wordpess.png";
import Carousel from "../../Modals/Carousel";
import Home_userBuild from "../../../Assets/images/Home_userBuild.svg";
import { designStudioService } from "../../../Data/DesignStudioService";
import homeCustomSoftware from "../../../Assets/images/homeCustomSoftware.svg";
import { customSoftwareClients } from "../../../Data/CustomSoftwareClients";
import taskDone from "../../../Assets/Icons/taskDone.png";
import homeTeamImage from "../../../Assets/images/homeTeamImage.svg";
import homeRemoteTeamImage from "../../../Assets/images/homeRemoteTeamImage.png";
import team from "../../../Assets/Icons/team.svg";
import time from "../../../Assets/Icons/time.svg";
import engineer from "../../../Assets/Icons/engineer.svg";
// import homeProfessionalTeam from "../../../Assets/images/homeProfessionalTeam.svg";
import homeProfessionalTeam from "../../../Assets/images/getProfesionalTeam.png";
// import homeTestimonial from "../../../Assets/images/homeTestimonial.svg";
import homeTestimonial from "../../../Assets/images/testomonil.png";
import { testimonials } from "../../../Data/Testimonials";
import { ArrowForwardIos } from "@mui/icons-material";
import { useEffect, useState } from "react";
import linkdin from "../../../Assets/Icons/linkedin.svg";
// import Anil from "../../../Assets/images/Anil.png";
import Anil from "../../../Assets/images/anil3.jpg";
import Rajeev from "../../../Assets/images/Rajeev.png";
import Enquiry from "../../Modals/Enquiry";
import Counter from "../../Modals/Counter";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home({ theme }: { theme: any }) {
  const style = {
    container: {
      padding: "40px 10px",
      width: "100%",
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    } as React.CSSProperties,
    containerForGetProfesionalTeam: {
      padding: "40px 0",
      paddingLeft: "10px",
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
    wrapperForGetProfesionalTeam: {
      padding: "10px",

      paddingRight: 0,
      paddingLeft: "24px",
      maxWidth: "1400px",
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
      gap: "50px",
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
      padding: "40px 0px",
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
    chooseAccordionContainer: {
      display: "flex",
      flexGrow: 1,
      width: "100%",
      // height : "600px"
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
    designStudioItem: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      gap: "20px",
    } as React.CSSProperties,
    designStudioIcon: {
      width: "100px",
      height: "100px",
      backgroundColor: theme.palette.primary.main,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
    } as React.CSSProperties,
    teamPara: {
      display: "flex",
      gap: "20px",
      flexDirection: "column",
      justifyContent: "center",
    } as React.CSSProperties,
    testimonial: {
      display: "flex",
      gap: "05px",
      flexDirection: "column",
      justifyContent: "center",
      paddingBottom: "20px",
    } as React.CSSProperties,
    testimonialNavigation: {
      display: "flex",
      gap: "15px",
      alignItems: "center",
      flexWrap: "wrap",
    } as React.CSSProperties,
    testimonialButton: {
      zIndex: "1",
      backgroundColor: "#092532 !important",
      width: "30px",
      borderRadius: "8px",
      height: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0px",
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
    } as React.CSSProperties,
  };

  const [testimonialIndex, setTestimonialIndex] = useState<number>(0);

  const navigate = useNavigate();

  const carouselItems = [android, dotnet, mac, php, python, wordpress];

  const [selectedHeader, setSelectedHeader] = useState<string>("custom");

  // const interval = setInterval(()=>{
  //   setSelectedHeader(selectedHeader === "custom" ? "outsource" : selectedHeader === "outsource" ? "design" : "custom")
  // }, 5000)

  useEffect(() => {
    return () => {
      // clearInterval(interval)
    };
  }, []);

  return (
    <>
      <Toolbar
        style={{ backgroundColor: theme.backgroundColor.mainGradient1 }}
      />
      <Box
        style={style.container}
        sx={{
          overflow: "hidden",
          backgroundImage: `linear-gradient(${theme.backgroundColor.mainGradient1}, ${theme.backgroundColor.mainGradient2})`,
        }}
      >
        <Box style={style.wrapper}>
          <Box style={style.mainPara}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                paddingRight: "30px",
                height: "300px",
              }}
            >
              {selectedHeader === "design" && (
                <motion.div
                  initial={{ opacity: 0, y:-300}}
                  animate={{ opacity: 1, y:0 }}
                  exit={{ opacity: 0, y:-300 }}
                >
                  <Typography variant="h2">
                    <span style={{ fontWeight: "300", fontSize: "26px" }}>
                      Okoders
                    </span>
                    <br />
                    <span style={{ fontWeight: "700", fontSize: "48px" }}>
                      Design Studio
                    </span>
                    <br />
                    <span style={{ fontWeight: "300", fontSize: "52px" }}>
                      Builds Custom Experiences
                    </span>
                  </Typography>
                </motion.div>
              )}
              {selectedHeader === "custom" && (
                <motion.div
                  initial={{ opacity: 0, y:-300}}
                  animate={{ opacity: 1, y:0 }}
                  exit={{ opacity: 0, y:-300 }}
                >
                  <Typography variant="h2">
                    <span style={{ fontWeight: "300", fontSize: "26px" }}>
                      Okoders
                    </span>
                    <br />
                    <span style={{ fontWeight: "700", fontSize: "48px" }}>
                      Custom Software
                    </span>
                    <br />
                    <span style={{ fontWeight: "300", fontSize: "52px" }}>
                      Service That Leads The Way
                    </span>
                  </Typography>
                </motion.div>
              )}
              {selectedHeader === "outsource" && (
                <motion.div
                  initial={{ opacity: 0, y:-300}}
                  animate={{ opacity: 1, y:0 }}
                  exit={{ opacity: 0, y:-300 }}
                >
                  <Typography variant="h2">
                    <span style={{ fontWeight: "300", fontSize: "26px" }}>
                      Okoders
                    </span>
                    <br />
                    <span style={{ fontWeight: "700", fontSize: "48px" }}>
                      Outsourcing
                    </span>
                    <br />
                    <span style={{ fontWeight: "300", fontSize: "52px" }}>
                      Employ Top Industry Talent
                    </span>
                  </Typography>
                </motion.div>
              )}
            </Box>
            <Box
              style={style.mainBox}
              sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
            >
              <Button
                onClick={() => setSelectedHeader("custom")}
                style={style.mainButton}
                variant="outlined"
              >
                <Typography
                  variant="button"
                  style={{ lineHeight: 1, textAlign: "left" }}
                  color="primary"
                >
                  CUSTOM
                  <br />
                  <span style={{ fontWeight: "700", fontSize: "22px" }}>
                    SOFTWARE
                  </span>
                </Typography>
              </Button>
              <Button
                onClick={() => setSelectedHeader("outsource")}
                style={style.mainButton}
                variant="outlined"
              >
                <Typography
                  variant="button"
                  style={{ lineHeight: 1, textAlign: "left" }}
                  color="primary"
                >
                  <span style={{ fontWeight: "700", fontSize: "22px" }}>
                    OUTSOURCING
                  </span>
                </Typography>
              </Button>
              <Button
                onClick={() => setSelectedHeader("design")}
                style={style.mainButton}
                variant="outlined"
              >
                <Typography
                  variant="button"
                  style={{ lineHeight: 1, textAlign: "left" }}
                  color="primary"
                >
                  DESIGN
                  <br />
                  <span style={{ fontWeight: "700", fontSize: "22px" }}>
                    STUDIO
                  </span>
                </Typography>
              </Button>
            </Box>
            <Typography
              onClick={() =>
                navigate(
                  selectedHeader === "design"
                    ? "designstudio"
                    : selectedHeader === "custom"
                    ? "customsoftware"
                    : "outsourcing"
                )
              }
              variant="subtitle2"
              color="secondary"
              fontWeight="500"
              sx={{ cursor: "pointer", textDecoration: "underline" }}
            >
              Know More
            </Typography>
          </Box>
          <Box sx={{display:{xs:"none", sm:"none", md:"flex"}}} style={style.mainCategory}>
            <img onMouseEnter={()=>setSelectedHeader("custom")} src={homeHeader2} width="auto" style={{height:"450px",transition: "all ease .2s", transform:`scale(${selectedHeader === "custom" ? 1.2 : selectedHeader === "design" || selectedHeader === "outsource" ? 1 : 0.9})`}} alt="Custom Software"/>
            <img onMouseEnter={()=>setSelectedHeader("outsource")} src={homeHeader3} width="auto" style={{height:"450px",transition: "all ease .2s", transform:`scale(${selectedHeader === "outsource" ? 1.2  : 1.1})`}} alt="Outsourcing"/>
            <img onMouseEnter={()=>setSelectedHeader("design")} src={homeHeader1} width="auto" style={{height:"450px",transition: "all ease .2s", transform:`scale(${selectedHeader === "custom" ? 0.9 : selectedHeader === "design" ? 1.2 : 0.9})`}} alt="Design Studio"/>
          </Box>
        </Box>
      </Box>
      <Box style={style.container}>
        <Box style={style.wrapper}>
          <Box style={style.uniWrapper}>
            <img src={mono} alt="Mono" width="180px" />
            <Box style={style.headerAbout}>
              <Typography color="primary" variant="h3">
                Lets Bring Your{" "}
                <span style={{ fontWeight: "700" }}>Ideas To Life</span>
              </Typography>
              <Typography
                color="primary"
                variant="body1"
                style={{ maxWidth: "750px" }}
              >
                Okoders is a digital transformation company. We deliver
                innovative global solutions for customers across the globe in
                different sectors such Healthcare, Life Sciences, Real estate,
                Smart home, Automotive, Electric Vehicles, Video on demand and
                eCommerce
              </Typography>
              <Button
                onClick={() => navigate("about")}
                style={style.headerAboutButton}
                variant="contained"
              >
                <Typography variant="button" color="white" fontWeight="700">
                  About Us
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box style={style.container}>
        <Box style={style.wrapper}>
          <Counter theme={theme} />
        </Box>
      </Box>
      <Box style={style.container}>
        <Box style={style.wrapper}>
          <Box style={style.uniWrapper} sx={{ flexDirection: "column" }}>
            <Typography style={{ width: "100%" }} variant="h3">
              Why <span style={{ fontWeight: "700" }}>Choose</span> Okoders ?
            </Typography>
            <Box style={style.chooseAccordionContainer}>
              <Box style={style.chooseAccordion}>
                <Accordion DATA={chooseOkoders} />
              </Box>
              <Box
                sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
                style={style.chooseImage}
              >
                <img
                  src={chooseImage}
                  alt="choose"
                  width="90%"
                  style={{ height: "auto" }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        style={style.container}
        sx={{
          backgroundImage: `linear-gradient(${theme.backgroundColor.mainGradient2}, ${theme.backgroundColor.mainGradient1})`,
        }}
      >
        <Box style={style.wrapper}>
          <Box style={style.uniWrapper} sx={{ flexDirection: "column" }}>
            <Typography variant="h3">
              Hire Experts in <span style={{ fontWeight: "700" }}>Domain</span>{" "}
              Like
            </Typography>
            <Box
              style={{
                width: "100%",
                margin: "0px 0px 100px 0px",
              }}
            >
              <Carousel carouselItems={carouselItems} />
            </Box>
            <Typography variant="h1">
              Design for <span style={{ fontWeight: "700" }}>User, Build</span>{" "}
              To Scale
            </Typography>
            <Typography
              fontWeight="400"
              sx={{
                width: { xs: "100%", sm: "80%", md: "80%" },
                textAlign: { xs: "left", sm: "center", md: "center" },
              }}
              variant="subtitle2"
            >
              We thrive at the intersection of design and business, and craft
              beautiful and functional experiences that can be launched quickly.
            </Typography>
            <Button
              onClick={() => navigate("designstudio")}
              style={style.headerAboutButton}
              variant="contained"
            >
              <Typography variant="button" color="white" fontWeight="400">
                Know More
              </Typography>
            </Button>
            <img src={Home_userBuild} alt="User Build" width="90%" />
          </Box>
        </Box>
      </Box>
      <Box
        style={style.container}
        sx={{
          backgroundImage: `linear-gradient(${theme.backgroundColor.mainGradient1}, ${theme.backgroundColor.purple})`,
        }}
      >
        <Box style={style.wrapper}>
          <Box style={style.uniWrapper} sx={{ flexDirection: "column" }}>
            <Typography
              sx={{
                width: { xs: "100%", sm: "70%", md: "60%" },
                textAlign: { xs: "left", sm: "center", md: "center" },
              }}
              variant="h1"
            >
              Our <span style={{ fontWeight: "700" }}>Design Flow</span>{" "}
              Services That Lead The Way
            </Typography>
            <Typography
              fontWeight="400"
              sx={{
                width: { xs: "100%", sm: "90%", md: "80%" },
                textAlign: { xs: "left", sm: "center", md: "center" },
              }}
              variant="subtitle2"
            >
              In the connected world, we assist brands and companies in gaining
              a competitive advantage.
            </Typography>
            <Grid
              textAlign="center"
              container
              sx={{ width: { xs: "100%", sm: "70%", md: "60%" } }}
              spacing={4}
            >
              {designStudioService.map((item, index) => {
                return (
                  <Grid
                    style={style.designStudioItem}
                    xs={12}
                    sm={6}
                    md={6}
                    key={index}
                    item
                  >
                    <Box style={style.designStudioIcon}>
                      <img src={item.icon} alt="Service Icon" width="36px" />
                    </Box>
                    <Typography variant="body1" fontWeight="500">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" fontWeight="400">
                      {item.description}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Box>
      <Box
        style={style.container}
        sx={{
          backgroundImage: `linear-gradient(90deg, ${theme.backgroundColor.yelgre1}, ${theme.backgroundColor.yelgre2})`,
        }}
      >
        <Box style={style.wrapper}>
          <Box style={style.uniWrapper} sx={{ flexDirection: "column" }}>
            <Typography
              sx={{
                width: { xs: "100%", sm: "70%", md: "80%" },
                textAlign: { xs: "left", sm: "center", md: "center" },
              }}
              variant="h1"
            >
              Custom <span style={{ fontWeight: "700" }}>Software</span>{" "}
              Development
            </Typography>
            <Typography
              fontWeight="400"
              sx={{
                width: { xs: "100%", sm: "90%", md: "80%" },
                textAlign: { xs: "left", sm: "center", md: "center" },
              }}
              variant="subtitle2"
            >
              Okoders cater to any of your technology solutions with an agile
              approach and seamless deployment. We sell solutions to your
              complexities and not mere products.
            </Typography>
            <Button
              onClick={() => navigate("customsoftware")}
              style={style.headerAboutButton}
              sx={{ marginBottom: { xs: "30px", sm: "50px", md: "70px" } }}
              variant="contained"
            >
              <Typography variant="button" color="white" fontWeight="400">
                Know More
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        style={style.container}
        sx={{ position: "relative", padding: "0px 10px 40px 0px !important" }}
      >
        <Box style={style.wrapper}>
          <Box
            style={style.uniWrapper}
            sx={{ flexDirection: "column", gap: "0px !important" }}
          >
            <Box
              className="homeCustomSoftwareImage"
              style={{ textAlign: "center" }}
              sx={{
                width: { xs: "100%", sm: "90%", md: "80%" },
                position: "absolute",
                top: { xs: "-50px", sm: "-75px", md: "-100px" },
              }}
            >
              <img
                src={homeCustomSoftware}
                alt="Custom Software"
                width="100%"
              />
            </Box>
            <Box
              style={{
                gap: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
              sx={{ width: { xs: "100%", sm: "70%", md: "60%" } }}
            >
              {customSoftwareClients.map((item, index) => {
                return (
                  <img
                    src={item.icon}
                    alt={item.name}
                    key={index}
                    style={{ maxWidth: "130px", maxHeight: "80px" }}
                  />
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box style={style.container}>
        <Box style={style.wrapper}>
          <Grid container spacing={3}>
            <Grid style={style.teamPara} item xs={12} sm={6} md={6} lg={6}>
              <Typography variant="h4">
                We are a <span style={{ fontWeight: "700" }}>Great Team</span>{" "}
                of Developers
              </Typography>
              <Typography
                style={{ maxWidth: "500px" }}
                color={theme.textColor.body}
                variant="caption"
              >
                Okoders builds custom software that helps your business
                processes more efficiently to improve customer experience and
                generate more profit.
              </Typography>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  marginBottom: "10px",
                }}
              >
                <img src={taskDone} alt="taskDone" width="20px" />
                <Typography color="primary" variant="caption">
                  Custom Software development
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  marginBottom: "10px",
                }}
              >
                <img src={taskDone} alt="taskDone" width="20px" />
                <Typography color="primary" variant="caption">
                  Working with images and videos
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  marginBottom: "10px",
                }}
              >
                <img src={taskDone} alt="taskDone" width="20px" />
                <Typography color="primary" variant="caption">
                  With all the required features
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <img src={homeTeamImage} alt="Team" width="100%" />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        style={style.container}
        sx={{
          backgroundImage: `linear-gradient(${theme.backgroundColor.yellow}, ${theme.backgroundColor.pink}, ${theme.backgroundColor.white})`,
        }}
      >
        <Box style={style.wrapper}>
          <Box style={style.uniWrapper} sx={{ flexDirection: "column" }}>
            <Typography
              sx={{
                width: { xs: "100%", sm: "70%", md: "80%" },
                textAlign: { xs: "left", sm: "center", md: "center" },
              }}
              variant="h1"
            >
              Utilize Okoders To{" "}
              <span style={{ fontWeight: "700" }}>Create Remote</span>{" "}
              Engineering Teams
            </Typography>
            <Button
              onClick={() => navigate("outsourcing")}
              style={style.headerAboutButton}
              variant="contained"
            >
              <Typography variant="button" color="white" fontWeight="400">
                Know More
              </Typography>
            </Button>
            <img
              src={homeRemoteTeamImage}
              alt="Build Remote Team"
              width="80%"
            />
            <Typography
              style={{ marginTop: "50px" }}
              textAlign="center"
              variant="h4"
            >
              Why Okoders <span style={{ fontWeight: "700" }}>Hiring</span>{" "}
              Services
            </Typography>
            <Grid
              sx={{ width: { xs: "100%", sm: "70%", md: "80%" } }}
              container
              spacing={3}
            >
              <Grid style={style.designStudioItem} item xs={12} sm={4} md={4}>
                <img
                  width="60px"
                  style={{ display: "block" }}
                  src={team}
                  alt="team"
                />
                <Typography color="primary" variant="caption">
                  After 3 days, hire a team of engineers
                </Typography>
              </Grid>
              <Grid style={style.designStudioItem} item xs={12} sm={4} md={4}>
                <img
                  width="60px"
                  style={{ display: "block" }}
                  src={time}
                  alt="time"
                />
                <Typography color="primary" variant="caption">
                  Save more than 200 hours of time by finding the appropriate
                  talent.
                </Typography>
              </Grid>
              <Grid style={style.designStudioItem} item xs={12} sm={4} md={4}>
                <img
                  width="60px"
                  style={{ display: "block" }}
                  src={engineer}
                  alt="engineer"
                />
                <Typography color="primary" variant="caption">
                  Create remote engineering teams with the top 10% of IT talent.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Box style={style.containerForGetProfesionalTeam}>
        <Box style={style.wrapperForGetProfesionalTeam}>
          <Grid container spacing={3}>
            <Grid style={style.teamPara} item xs={12} sm={6} md={6}>
              <Typography variant="h1">
                Get a <span style={{ fontWeight: "700" }}>Professional</span>{" "}
                Team
              </Typography>
              <Typography color="primary" variant="body2">
                Okoders is your key to hiring the best talent and scaling fast
                while keeping a check on your budget. With us, your company
                doesn't have to invest its precious time in talent hunting,
                reviewing and retaining the talent. We are the best staff
                augmentation company dedicated to building and managing remote
                software development teams across the world in the most
                cost-effective way.
              </Typography>
            </Grid>
            <Grid style={{ textAlign: "end" }} item xs={12} sm={6} md={6}>
              <img src={homeProfessionalTeam} alt="Team" width="90%" />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        style={style.container}
        sx={{
          backgroundColor: "#F6FAFF",
          padding: "0px 30px !important",
          marginBottom: "40px",
        }}
      >
        <Box style={style.wrapper} sx={{ padding: "0px 10px !important" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6}>
              <img src={homeTestimonial} alt="Team" width="90%" />
            </Grid>
            <Grid style={style.testimonial} item xs={12} sm={6} md={6}>
              <Typography variant="subtitle2" fontWeight="500" color="primary">
                Testimonials
              </Typography>
              {testimonials.map((item, index) => {
                return (
                  index === testimonialIndex && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Box
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "20px",
                          margin: "40px 0px",
                        }}
                      >
                        <Typography
                          variant="h4"
                          color="primary"
                          fontWeight="700"
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          color="primary"
                          fontWeight="400"
                        >
                          {item.para}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        color="primary"
                        fontWeight="700"
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="primary"
                        fontWeight="400"
                      >
                        {item.position} at: {item.company}
                      </Typography>
                    </motion.div>
                  )
                );
              })}
              <Box style={style.testimonialNavigation}>
                <IconButton
                  onClick={() =>
                    setTestimonialIndex((prev) =>
                      prev === 0 ? testimonials.length - 1 : prev - 1
                    )
                  }
                  sx={{
                    ...style.testimonialButton,
                    transform: "rotate(180deg)",
                  }}
                  className="custom-right-arrow"
                >
                  <ArrowForwardIos sx={{ color: "white", fontSize: "15px" }} />
                </IconButton>
                <IconButton
                  onClick={() =>
                    setTestimonialIndex((prev) =>
                      prev === testimonials.length - 1 ? 0 : prev + 1
                    )
                  }
                  sx={{ ...style.testimonialButton }}
                  className="custom-right-arrow"
                >
                  <ArrowForwardIos sx={{ color: "white", fontSize: "15px" }} />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
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
            <Typography variant="h3">
              Professional and Friendly is{" "}
              <span style={{ fontWeight: "700" }}>Our Team</span>
            </Typography>
            <Box style={style.professionalTeam}>
              <Box style={style.professionalTeamContainer}>
                <img
                  style={style.professionalTeamImageContainer}
                  src={Anil}
                  alt="Anil"
                  width="170px"
                />
                <Typography variant="subtitle2" fontWeight="bold">
                  Anil Sadana
                </Typography>
                <Typography variant="body1" fontWeight="400">
                  Founder
                </Typography>
                <a href="https://www.linkedin.com/in/anil-sdana-a15039224/">
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
                <img src={linkdin} alt="Linkdin" width="80px" />
              </Box>
            </Box>
            <Button
              onClick={() => navigate("career")}
              style={style.headerAboutButton}
              variant="contained"
            >
              <Typography variant="button" color="white" fontWeight="400">
                Join Our Team
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
      <Enquiry theme={theme} />
    </>
  );
}

export default Home;
