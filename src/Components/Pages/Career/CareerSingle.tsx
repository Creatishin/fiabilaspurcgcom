import { Box, Button, Grid, Toolbar, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import header from '../../../Assets/images/careersingleheader.png';
import { openings } from '../../../Data/Openings';
import Openings from '../../../Interfaces/Openings';
import taskDoneBlue from '../../../Assets/Icons/taskDoneBlue.svg';

function CareerSingle({theme}:{theme:any}) {

  const style = {
    container : {
        padding : "40px 10px",
        width : "100%",
        boxSizing : "border-box",
        display : "flex",
        alignItems : "center",
        justifyContent : "center"
    } as React.CSSProperties,
    wrapper : {
        padding : "10px",
        maxWidth : "1300px",
        width : "100%",
        gap : "30px",
        display : "flex",
        flexWrap : "wrap",
        alignItems: "center",
        boxSizing : "border-box",
        justifyContent : "center"
    } as React.CSSProperties,
    uniWrapper : {
        width : "100%",
        display : "flex",
        flexWrap : "wrap",
        justifyContent : "center",
        alignItems : "center",
        gap : "40px"
    } as React.CSSProperties,
    headerContainer : {
      width : "100%",
      padding : "80px 20px",
      borderRadius : "15px",
      backgroundImage : `url(${header})`,
      backgroundSize : "cover",
      backgroundPosition : "center",
      backgroundRepeat : "no-repeat",
      display : "flex",
      flexDirection : "column",
      textAlign : "center",
      justifyContent : "center",
      gap:"10px"
    } as React.CSSProperties,
    responsibilitiesContainer : {
      display : "flex",
      flexDirection : "column",
      gap : "30px",
    } as React.CSSProperties,
    leftContainer : {
      display : "flex",
      flexDirection : "column",
      gap : "40px",
    } as React.CSSProperties,
    headerHRButton : {
        backgroundColor : "white",
        borderRadius : "12px",
        padding : "0px 40px",
        width : "fit-content",
        textDecoration : "none",
        textTransform : "none",
        height : "60px"
    } as React.CSSProperties,
    ctaContainer : {
      boxSizing : "border-box",
      width:"100%",
      padding:"35px",
      borderRadius : "15px",
      backgroundColor : "#F6F6F6",
      display:"flex",
      flexDirection : "column",
      justifyContent : "space-between",
      alignItems : "flex-start",
      gap : "30px"
    } as React.CSSProperties,
    headerAboutButton : {
      backgroundColor : theme.palette.primary.main,
      borderRadius : "12px",
      padding : "0px 40px",
      width : "fit-content",
      textDecoration : "none",
      textTransform : "none",
      height : "60px"
  } as React.CSSProperties,
  }

  const { openingID } = useParams<string>();
  
  const selectedOpening : Openings = openingID ? openings[+openingID] : openings[0];

  return (
    <>
    <Toolbar style={{backgroundImage: "white"}} />
    <Box style={style.container}>
      <Box style={style.wrapper}>
        <Box style={style.uniWrapper}>
          <Box style={style.headerContainer}>
            <Typography variant='h2' color="white" fontWeight="700" textAlign="center">{selectedOpening.position}</Typography>
            <Typography variant='caption' fontWeight="400" color="white" textAlign="center">{selectedOpening.location} | {selectedOpening.type}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
    <Box style={style.container}>
      <Box style={style.wrapper}>
        <Box style={style.uniWrapper} sx={{maxWidth:"1000px !important"}}>
          <Grid container gap="30px">
            <Grid  item xs={12} sm={8} md={7}>
              <Box style={style.leftContainer}>
                <Box style={style.responsibilitiesContainer}>
                  <Typography variant="h4" fontWeight="700">
                    Job Responsibilities
                  </Typography>
                  <Typography variant="caption" color="#808080" fontWeight="400">
                    { selectedOpening.responsibilities }
                  </Typography>
                  <Box>
                    {
                      selectedOpening.responsibilitiesKey?.map((item, key) => {
                        return(
                          <Box key={key} style={{display:"flex", alignItems:"center", gap:"15px", marginBottom:"15px"}}>
                            <img src={taskDoneBlue} alt="taskDone" width="30px"/>
                            <Typography color="#808080" variant='body2'>{item}</Typography>
                          </Box>
                        )
                      })
                    }
                  </Box>
                  <Typography variant="caption" color="#808080" fontWeight="400">
                    { selectedOpening.responsibilitiesNotes }
                  </Typography>
                </Box>
                <img src={selectedOpening.image} alt={selectedOpening.position} style={{borderRadius:"15px"}} width="100%" height="auto" />
                <Box style={style.responsibilitiesContainer}>
                  <Typography variant="h4" fontWeight="700">
                    Job Requirements
                  </Typography>
                  <Typography variant="caption" color="#808080" fontWeight="400">
                    { selectedOpening.requirements }
                  </Typography>
                  <Box>
                    {
                      selectedOpening.requirementsKey?.map((item, key) => {
                        return(
                          <Box key={key} style={{display:"flex", alignItems:"center", gap:"15px", marginBottom:"15px"}}>
                            <img src={taskDoneBlue} alt="taskDone" width="30px"/>
                            <Typography color="#808080" variant='body2'>{item}</Typography>
                          </Box>
                        )
                      })
                    }
                  </Box>
                  <Typography variant="caption" color="#808080" fontWeight="400">
                    { selectedOpening.requirementsNotes }
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3} md={4}>
              <Box style={style.ctaContainer}>
                <Typography variant='body1' fontWeight="600">Apply Today</Typography>
                <Typography color="#808080" variant='body2'></Typography>
                <Button style={style.headerAboutButton} variant="contained"><Typography variant='button' fontWeight="500" color="white" >Apply Now</Typography></Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
    <Box style={style.container} sx={{backgroundColor:"#0C3A4F"}}>
        <Box style={style.wrapper} sx={{justifyContent:"space-between !important"}}>
            <Typography maxWidth="500px" variant="h4" color="white" fontWeight="400">Want To Get In Touch With <span style={{fontWeight:"700"}}>HR Directly?</span></Typography>
            <Button style={style.headerHRButton} variant="contained"><Typography variant='button' fontWeight="700" >Send Email</Typography></Button>
        </Box>
    </Box>
    </>
  )
}

export default CareerSingle