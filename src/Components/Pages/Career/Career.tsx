import { Box, Button, Divider, Toolbar, Typography } from "@mui/material";
import React from "react";
import character1 from "../../../Assets/images/character-1.svg";
import character2 from "../../../Assets/images/character-2.svg";
import character3 from "../../../Assets/images/character-3.svg";
import { member } from "../../../Data/Member";
// import okodersTeam from "../../../Assets/images/okodersTeam.png";
import okodersTeam from "../../../Assets/images/groupIMage.png";
import ImageGrid from "../../Modals/ImageGrid";
import { imageList } from "../../../Data/ImageList";
import careerMain from "../../../Assets/images/careerMain.png";
import { openings } from "../../../Data/Openings";
import { useNavigate } from "react-router-dom";

function Career({ theme }: { theme: any }) {
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
      gap: "30px",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      boxSizing: "border-box",
      justifyContent: "space-between",
    } as React.CSSProperties,
    uniWrapper: {
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      gap: "40px",
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
    headerHRButton: {
      backgroundColor: "white",
      borderRadius: "12px",
      padding: "0px 40px",
      width: "fit-content",
      textDecoration: "none",
      textTransform: "none",
      height: "60px",
    } as React.CSSProperties,
    headerImageContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "30px",
      flexWrap: "wrap",
    } as React.CSSProperties,
    memberContainer: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: "20px",
      overflowX: "scroll",
    } as React.CSSProperties,
    memberItem: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      marginBottom: "20px",
    } as React.CSSProperties,
    memberImage: {
      backgroundSize: "cover",
      backgroundPositionX: "center",
      backgroundRepeat: "no-repeat",
      mixBlendMode: "luminosity",
    } as React.CSSProperties,
    headerApplyButton: {
      borderRadius: "12px",
      padding: "0px 40px",
      width: "fit-content",
      textDecoration: "none",
      textTransform: "none",
      height: "60px",
    } as React.CSSProperties,
  };

  const navigate = useNavigate();

  return (
    <>
      <Toolbar
        style={{ backgroundColor: theme.backgroundColor.mainGradient1 }}
      />
      <Box
        style={style.container}
        sx={{
          backgroundImage: `linear-gradient(${theme.backgroundColor.mainGradient1}, ${theme.backgroundColor.mainGradient2})`,
        }}
      >
        <Box style={style.wrapper}>
          <Box style={style.uniWrapper} sx={{ flexDirection: "column" }}>
            <Typography
              maxWidth="750px"
              textAlign="center"
              variant="h2"
              color="primary"
            >
              We’re the Okoders You Need in{" "}
              <span style={{ fontWeight: "700" }}>Your Career</span>
            </Typography>
            <Typography
              maxWidth="1000px"
              fontWeight="400"
              variant="subtitle2"
              color="primary"
              textAlign="center"
            >
              To be the company our customers want us to be, it takes an
              eclectic group of passionate operators. Get to know the people
              leading the way at Untitled.
            </Typography>
            <Button
              onClick={() => navigate("#exploreMore")}
              style={style.headerAboutButton}
              variant="contained"
            >
              <Typography variant="button" color="white" fontWeight="700">
                Join Our Team
              </Typography>
            </Button>
            <Box style={style.headerImageContainer}>
              <Box>
                <img src={character1} alt="character1" width="250px" />
              </Box>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <img src={character2} alt="character1" width="250px" />
              </Box>
              <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                <img src={character3} alt="character1" width="250px" />
              </Box>
            </Box>
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: "70px", sm: "110px", md: "140px" } }}
              textAlign="center"
              color="primary"
            >
              Your Career's Next Level Can Create{" "}
              <span style={{ fontWeight: "700" }}>Next Level</span> Impact
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        style={style.container}
        sx={{ backgroundColor: theme.palette.primary.main }}
      >
        <Box style={style.wrapper}>
          <Typography
            padding="40px 0px"
            variant="h2"
            maxWidth="550px"
            color="white"
          >
            Know Key <span style={{ fontWeight: "700" }}>Member</span> of Our
            Team
          </Typography>
        </Box>
      </Box>
      <Box
        style={style.container}
        sx={{ backgroundColor: "#0F303F", paddingRight: "0px !important" }}
      >
        <Box style={style.wrapper} sx={{ paddingRight: "0px !important" }}>
          <Box style={style.memberContainer}>
            {member.map((item, index) => {
              return (
                <Box key={index} style={style.memberItem}>
                  <Box
                    sx={{
                      width: { xs: "300px", sm: "350px", md: "400px" },
                      height: "350px",
                      backgroundImage: `url(${item.image})`,
                    }}
                    style={style.memberImage}
                  ></Box>
                  <Box>
                    <Typography variant="subtitle1" color="white">
                      {item.name}
                    </Typography>
                    <Typography variant="body1" fontWeight="700" color="white">
                      {item.role}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
      <Box style={{ position: "relative", backgroundColor: "#F6FAFF" }}>
        <img
          src={okodersTeam}
          alt="Okoders Team"
          width="100%"
          height="auto"
          style={{ mixBlendMode: "luminosity" }}
        />
        <Box
          sx={{ bottom: { xs: "20px", sm: "30px", md: "70px" } }}
          style={{
            position: "absolute",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "15px", sm: "35px", md: "60px" },
              borderRadius: { xs: "10px", sm: "20px", md: "25px" },
            }}
            style={{
              padding: "15px",
              backgroundColor: "rgba(15, 48, 63, 0.85)",
            }}
            variant="h1"
            color="white"
            textAlign="center"
            width="50%"
          >
            Life @{" "}
            <span style={{ fontWeight: "700" }}>
              <span style={{ color: theme.palette.secondary.main }}>O</span>
              koders
            </span>{" "}
          </Typography>
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
              sm: "10px 0px 200px 0px !important",
              md: "10px 0px 400px 0px !important",
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
        <img
          style={{ zIndex: 50, position: "absolute", bottom: " 0px" }}
          src={careerMain}
          alt="Career"
          width="100%"
          height="auto"
        />
      </Box>
      <Box style={style.container}>
        <Box style={style.wrapper}>
          <Box style={style.uniWrapper} sx={{ flexDirection: "column" }}>
            <Typography variant="h2" textAlign="center">
              Explore
              <br />
              New <span style={{ fontWeight: 700 }}>Opportunities</span>
            </Typography>
            <Box
              style={{
                width: "250px",
                height: "4px",
                backgroundColor: theme.palette.primary.main,
                borderRadius: "2px",
              }}
            ></Box>
            <Box id="exploreMore" style={{ margin: "80px 0px" }}>
              {openings.map((item, key) => {
                return (
                  <Box key={key}>
                    <Box
                      style={{
                        gap: "50px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        margin: "80px 0px",
                        flexWrap: "wrap",
                      }}
                    >
                      <Box
                        sx={{ maxWidth: { xs: "100%", sm: "70%", md: "70%" } }}
                      >
                        <Typography
                          variant="subtitle1"
                          color="#2F2F2F"
                          fontWeight="700"
                        >
                          {item.position}
                        </Typography>
                        <Typography
                          style={{ marginBottom: "30px", display: "block" }}
                          variant="caption"
                          color="#2F2F2F"
                          fontWeight="400"
                        >
                          Exp: {item.experience} |{" "}
                          <span style={{ color: theme.palette.secondary.main }}>
                            {item.type}
                          </span>
                        </Typography>
                        <Typography
                          variant="caption"
                          color="#808080"
                          fontWeight="400"
                        >
                          {item.requirements}
                        </Typography>
                      </Box>
                      <Button
                        onClick={() => navigate(`/career/${key}`)}
                        style={style.headerApplyButton}
                        variant="outlined"
                      >
                        <Typography variant="button" fontWeight="700">
                          Know More
                        </Typography>
                      </Button>
                    </Box>
                    <Divider />
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box style={style.container} sx={{ backgroundColor: "#0C3A4F" }}>
        <Box style={style.wrapper}>
          <Typography
            maxWidth="500px"
            variant="h4"
            color="white"
            fontWeight="400"
          >
            Want To Get In Touch With{" "}
            <span style={{ fontWeight: "700" }}>HR Directly?</span>
          </Typography>
          <Button style={style.headerHRButton} variant="contained">
            <Typography variant="button" fontWeight="700">
              Send Email
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Career;
