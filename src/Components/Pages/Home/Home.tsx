import { Box, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import frame1 from '../../../Assets/Home/Frame1.png'
import frame2 from '../../../Assets/Home/Frame-11.png'
import homeSection2 from '../../../Assets/Home/home_section2.png'
import doc from '../../../Assets/Home/document-examiner.jpg'
import finger from '../../../Assets/Home/Forensic-Fingerprint-Analysis.jpg'
import crime from '../../../Assets/Home/crime.jpeg'
import legalAdvice from '../../../Assets/Home/legalAdvice.jpg'
import { ArrowForwardIos, ArrowRightAltOutlined, ContentPasteSearchOutlined, FingerprintOutlined, GavelOutlined, MinorCrashOutlined, NotStartedOutlined, OnlinePredictionOutlined } from '@mui/icons-material'
import { motion } from "framer-motion";
import { testimonials } from '../../../Data/Testimonials'
import testinomial from '../../../Assets/Home/testinomial.png'
import Enquiry from '../../Modals/Enquiry'

function Home({theme}:{theme:any}) {

  const style = {
    mainContainer : {
      display : "flex",
      justifyContent: "center",
      padding: "0px 0px",
      alignItems: "center"
    } as React.CSSProperties,
    container: {
      width: "100%",
      maxWidth: "1300px",
      padding: "50px 30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    } as React.CSSProperties,
    headerContainer: {
      display: "flex",
      width: "100%",
      gap: "40px",
      flexDirection: "column"
    } as React.CSSProperties,
    knowMore : {
      fontWeight: 700,
      border: `2px solid ${theme.palette.secondary.main}`,
      padding: "10px 40px",
      borderRadius: "30px",
      cursor: "pointer",
      width:"fit-content"
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
  }

  const [testimonialIndex, setTestimonialIndex] = useState<number>(0);

  return (
    <>
    <Toolbar style={{height:"70px", backgroundColor:theme.palette.primary.main}}/>
    <Box style={style.mainContainer} sx={{backgroundColor:theme.palette.primary.main, position:"relative", overflow:"hidden"}}>
      <Box style={style.container} sx={{zIndex:3}}>
        <Box style={style.headerContainer} sx={{padding:"100px 0px"}}>
          <Box style={{marginLeft:"40px", width:"4px", height:"80px", borderRadius:"1px", backgroundColor:theme.palette.secondary.main}}/>
          <Box>
            <Typography variant='h2' color="white" fontWeight="700">Justice via</Typography>
            <Typography variant='h2' color="secondary" fontWeight="700">Scientific Investigation</Typography>
          </Box>
          <Box>
            <Typography variant='caption' color="rgba(255,255,255,.7)" fontWeight="500">Our unique team of Investigators specializes</Typography><br/>
            <Typography variant='caption' color="rgba(255,255,255,.7)" fontWeight="500">in finding answers of every unsolved mystries</Typography>
          </Box>
          <Box
              className="getQuoteClass"
              style={style.knowMore}
            >
              <Typography
                variant="caption"
                color="white"
                fontWeight="500"
              >
                Know More
              </Typography>
          </Box>
        </Box>
      </Box>
      <Typography style={{position:"absolute", zIndex:1, top:0, left:0, fontSize:"250px"}}  color="rgba(255,255,255,.01)" fontWeight="700">Forensic</Typography>
      <Typography style={{position:"absolute", zIndex:1, bottom:0, right:0, fontSize:"250px"}}  color="rgba(255,255,255,.01)" fontWeight="700">Agency</Typography>
      
      <img style={{position:"absolute", zIndex:2, top:"50%", right:0, transform:"translate(0%,-30%)"}} src={frame1} alt="Clock"/>
      <img style={{position:"absolute", zIndex:2, top:"55%", right:"25%"}} src={frame2} alt="Clock"/>
    </Box>
    <Box style={style.mainContainer}>
      <Box style={style.container}>
        <Grid container spacing={3}>
          <Grid style={{display:"flex", justifyContent:"center", flexDirection:"column", gap:"30px"}} item xs={12} sm={6}>
            <Typography variant="h2" fontWeight="500">
              Investigation Agency You Can <span style={{color:theme.palette.secondary.main}}>Trust</span>
            </Typography>
            <Typography variant="caption" color={theme.textColor.para}>
              Our forensic investigation agency specializes in the professional investigation of each unique types of cases. Our team constantly tries to learn new technologies that we are not afraid to implement in investigation, making them modern and high-tech.
            </Typography>
            <Typography mt={5} variant='caption' color={theme.textColor.para} width="100%" textAlign="right">
              <span style={{fontWeight:"700"}}>Mr. Dipendra Barmate</span>, Director
            </Typography>
          </Grid>
          <Grid textAlign="center" item xs={12} sm={6}>
            <img width="80%" src={homeSection2} alt="HomeSection2"></img> 
          </Grid>
        </Grid>
      </Box>
    </Box>
    <Box style={style.mainContainer} sx={{position:"relative"}}>
      <Typography textAlign="center" sx={{display:{sx:"none", sm:"block"}}} color="white" style={{position:"absolute", textShadow:"0px 0px 20px rgba(0,0,0,0.05)"}} fontSize="15vw" fontWeight="800">STATISTICS</Typography>
      <Box style={style.container}>
        <Grid zIndex={1} container style={{display:"flex", justifyContent:"center"}}>
          <Grid item xs={12} textAlign="center">
            <Typography variant="h2" color="secondary" fontWeight="700">Statistics</Typography>
          </Grid>
          <Grid textAlign="center" style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"20px"}}  item xs={6} sm={3}>
            <Typography variant='h2' fontWeight="400">
              30<span style={{color:theme.palette.secondary.main}}>+</span>
            </Typography>
            <Typography variant='caption' fontWeight="700">
              Professionals Team
            </Typography>
          </Grid>
          <Grid textAlign="center" style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"20px"}}  item xs={6} sm={3}>
          <Typography variant='h2' fontWeight="400">
              180<span style={{color:theme.palette.secondary.main}}>+</span>
            </Typography>
            <Typography variant='caption' fontWeight="700">
              Satisfied customers
            </Typography>
          </Grid>
          <Grid textAlign="center" style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"20px"}} item xs={6} sm={3}>
          <Typography  variant='h2' fontWeight="400">
              85<span style={{color:theme.palette.secondary.main}}>+</span>
            </Typography>
            <Typography  variant='caption' fontWeight="700">
              Cases Solved
            </Typography>
          </Grid>
          <Grid textAlign="center" style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"20px"}}  item xs={6} sm={3}>
          <Typography variant='h2' fontWeight="400">
              1<span style={{color:theme.palette.secondary.main}}>+</span>
            </Typography>
            <Typography  variant='caption' fontWeight="700">
              Years of experience
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
    <Box style={style.mainContainer}>
      <Grid my={10} container>
        <Grid p={1} item xs={6} sm={3} sx={{height:{xs:"200px", sm:"250px", md:"300px", borderRadius:"20px"}}}>
          <Box sx={{overflow:"hidden", borderRadius:"20px",width:"100%", height:'100%',backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundImage:`url(${doc})`, display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Box width="100%" height="100%" sx={{backgroundColor:"rgb(255 36 15 / 60%)", display:"flex", justifyContent:"center", alignItems:"center", opacity:{xs:1, sm:1, md:0}, transition:"all ease .3s", "&:hover" : {opacity:1}}}>
              <Typography textAlign="center" variant="subtitle2" color="white" fontWeight="700">Document Examination</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid p={1} item xs={6} sm={3} sx={{height:{xs:"200px", sm:"250px", md:"300px", borderRadius:"20px"}}}>
          <Box sx={{overflow:"hidden", borderRadius:"20px",width:"100%", height:'100%',backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundImage:`url(${finger})`, display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Box width="100%" height="100%" sx={{backgroundColor:"rgb(255 36 15 / 60%)", display:"flex", justifyContent:"center", alignItems:"center", opacity:{xs:1, sm:1, md:0}, transition:"all ease .3s", "&:hover" : {opacity:1}}}>
              <Typography textAlign="center" variant="subtitle2" color="white" fontWeight="700">Fingerprint Analysis</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid p={1} item xs={6} sm={3} sx={{height:{xs:"200px", sm:"250px", md:"300px", borderRadius:"20px"}}}>
          <Box sx={{overflow:"hidden", borderRadius:"20px",width:"100%", height:'100%',backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundImage:`url(${crime})`, display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Box width="100%" height="100%" sx={{backgroundColor:"rgb(255 36 15 / 60%)", display:"flex", justifyContent:"center", alignItems:"center", opacity:{xs:1, sm:1, md:0}, transition:"all ease .3s", "&:hover" : {opacity:1}}}>
              <Typography textAlign="center" variant="subtitle2" color="white" fontWeight="700">Crime Scene Investigation</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid p={1} item xs={6} sm={3} sx={{height:{xs:"200px", sm:"250px", md:"300px", borderRadius:"20px"}}}>
          <Box sx={{overflow:"hidden", borderRadius:"20px",width:"100%", height:'100%',backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundImage:`url(${legalAdvice})`, display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Box width="100%" height="100%" sx={{backgroundColor:"rgb(255 36 15 / 60%)", display:"flex", justifyContent:"center", alignItems:"center", opacity:{xs:1, sm:1, md:0}, transition:"all ease .3s", "&:hover" : {opacity:1}}}>
              <Typography textAlign="center" variant="subtitle2" color="white" fontWeight="700">Legal Advice</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
    <Box style={style.mainContainer} sx={{backgroundColor:theme.palette.primary.main}}>
      <Box style={style.container} sx={{position:'relative'}}>
        <Typography zIndex={1} textAlign="center" sx={{ bottom:0, display:{sx:"none", sm:"block"}}} color="primary" style={{position:"absolute", textShadow:"0px 0px 20px rgba(255,255,255,.05)"}} fontSize="16vw" fontWeight="800">SERVIVES</Typography>
        <Grid zIndex={2} container rowGap={3}>
          <Grid item xs={12} sm={6} md={6} p={3} style={{display:"flex", justifyContent:"center", alignItems:"flex-start"}}>
            <Box>
              <Typography color="white" mb={4} variant="h2" fontWeight="500">
                Full Range of Forensic Investigation <span style={{color:theme.palette.secondary.main}}>Services</span>
              </Typography>
              <Typography variant="caption" color="#f5f5f5">
                We offer professional investigation services at affordable rates to help you with your cases!
              </Typography>
              <Box
                mt={4}
                className="getQuoteClass"
                style={style.knowMore}
              >
                <Typography
                  variant="caption"
                  fontWeight="500"
                  color="white"
                >
                  View all services
                </Typography>
            </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} md={3} p={3} style={{display:"flex", justifyContent:"center", alignItems:"flex-start"}}>
            <Box>
              <IconButton sx={{ color:"#f5f5f5",border:`1px solid ${theme.palette.secondary.main}`, padding:"20px","&:hover": { color:theme.palette.secondary.main}}}>
                <ContentPasteSearchOutlined sx={{ fontSize:"30px"}}/>
              </IconButton>
              <Typography my={2} variant="body2" color="white" fontWeight="500">Document Examination</Typography>
              <Typography mb={2} component={Box} variant="caption" color="#f5f5f5">
                We provide complete solution for Forensic handwriting examination related matters.
              </Typography>
              <Button endIcon={<ArrowRightAltOutlined/>} variant="text" sx={{cursor:"pointer",color:"white", fontWeight:"500", "&:hover": {color:theme.palette.secondary.main}}}>
                Raise Enquiry
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} md={3} p={3} style={{display:"flex", justifyContent:"center", alignItems:"flex-start"}}>
            <Box>
              <IconButton sx={{ color:"#f5f5f5",border:`1px solid ${theme.palette.secondary.main}`, padding:"20px","&:hover": { color:theme.palette.secondary.main}}}>
                <FingerprintOutlined sx={{ fontSize:"30px"}}/>
              </IconButton>
              <Typography my={2} variant="body2" color="white" fontWeight="500">Fingerprint Analysis</Typography>
              <Typography mb={2} component={Box} variant="caption" color="#f5f5f5">
                We provide complete solutions in fingerprint examination related matters.
              </Typography>
              <Button endIcon={<ArrowRightAltOutlined/>} variant="text" sx={{cursor:"pointer",color:"white", fontWeight:"500", "&:hover": {color:theme.palette.secondary.main}}}>
                Raise Enquiry
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} md={3} p={3} style={{display:"flex", justifyContent:"center", alignItems:"flex-start"}}>
            <Box>
              <IconButton sx={{ color:"#f5f5f5",border:`1px solid ${theme.palette.secondary.main}`, padding:"20px","&:hover": { color:theme.palette.secondary.main}}}>
                <MinorCrashOutlined sx={{ fontSize:"30px"}}/>
              </IconButton>
              <Typography my={2} variant="body2" color="white" fontWeight="500">Crime Scene Investigation</Typography>
              <Typography mb={2} component={Box} variant="caption" color="#f5f5f5">
              Our Forensic experts solve and investigate cases related to the crime scene.
              </Typography>
              <Button endIcon={<ArrowRightAltOutlined/>} variant="text" sx={{cursor:"pointer",color:"white", fontWeight:"500", "&:hover": {color:theme.palette.secondary.main}}}>
                Raise Enquiry
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} md={3} p={3} style={{display:"flex", justifyContent:"center", alignItems:"flex-start"}}>
            <Box>
              <IconButton sx={{ color:"#f5f5f5",border:`1px solid ${theme.palette.secondary.main}`, padding:"20px","&:hover": { color:theme.palette.secondary.main}}}>
                <GavelOutlined sx={{ fontSize:"30px"}}/>
              </IconButton>
              <Typography my={2} variant="body2" color="white" fontWeight="500">Legal Advice</Typography>
              <Typography mb={2} component={Box} variant="caption" color="#f5f5f5">
              We have a best team of legal experts who provide legal assistance required by an individual/Organization.
              </Typography>
              <Button endIcon={<ArrowRightAltOutlined/>} variant="text" sx={{cursor:"pointer",color:"white", fontWeight:"500", "&:hover": {color:theme.palette.secondary.main}}}>
                Raise Enquiry
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} md={3} p={3} style={{display:"flex", justifyContent:"center", alignItems:"flex-start"}}>
            <Box>
              <IconButton sx={{ color:"#f5f5f5",border:`1px solid ${theme.palette.secondary.main}`, padding:"20px","&:hover": { color:theme.palette.secondary.main}}}>
                <NotStartedOutlined sx={{ fontSize:"30px"}}/>
              </IconButton>
              <Typography my={2} variant="body2" color="white" fontWeight="500">Audio-Video Forensics</Typography>
              <Typography mb={2} component={Box} variant="caption" color="#f5f5f5">
              We provide complete solution of Audio and Video verification which can be obtained from a Criminal legal proceedings.
              </Typography>
              <Button endIcon={<ArrowRightAltOutlined/>} variant="text" sx={{cursor:"pointer",color:"white", fontWeight:"500", "&:hover": {color:theme.palette.secondary.main}}}>
                Raise Enquiry
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} md={3} p={3} style={{display:"flex", justifyContent:"center", alignItems:"flex-start"}}>
            <Box>
              <IconButton sx={{color:"#f5f5f5",border:`1px solid ${theme.palette.secondary.main}`, padding:"20px","&:hover": { color:theme.palette.secondary.main}}}>
                <OnlinePredictionOutlined sx={{ fontSize:"30px"}}/>
              </IconButton>
              <Typography my={2} variant="body2" color="white" fontWeight="500">Cyber Forensics</Typography>
              <Typography mb={2} component={Box} variant="caption" color="#f5f5f5">
                We provide complete solution for Cyber crime related matters.
              </Typography>
              <Button  endIcon={<ArrowRightAltOutlined/>} variant="text" sx={{cursor:"pointer",color:"white", fontWeight:"500", "&:hover": {color:theme.palette.secondary.main}}}>
                Raise Enquiry
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
    <Box style={style.mainContainer}>
      <Box style={style.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <img src={testinomial} alt="Team" width="90%" />
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
    <Enquiry theme={theme} />
    </>
  )
}

export default Home