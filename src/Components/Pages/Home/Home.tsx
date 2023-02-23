import { Box, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import frame1 from '../../../Assets/Home/Frame1.png'
import frame2 from '../../../Assets/Home/Frame-11.png'
import homeSection2 from '../../../Assets/Home/home_section2.png'
import doc from '../../../Assets/Home/document-examiner.jpg'
import finger from '../../../Assets/Home/Forensic-Fingerprint-Analysis.jpg'
import crime from '../../../Assets/Home/crime.jpeg'
import legalAdvice from '../../../Assets/Home/legalAdvice.jpg'
import { ArrowRightAltOutlined } from '@mui/icons-material'
import { testimonials } from '../../../Data/Testimonials'
import Enquiry from '../../Modals/Enquiry'
import Statics from '../../Modals/Statics'
import Testimonial from '../../Modals/Testimonial'
import services from '../../../Data/Services'
import { useNavigate } from 'react-router-dom'

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
  }

  const navigate = useNavigate()

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
              onClick={()=>navigate("about")}
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
    <Statics theme={theme} />
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
                onClick={()=>navigate("services")}
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
          {
            services.filter((_, index) => index < 6).map((item, index) => {
              return(
                <Grid key={index} item xs={12} sm={3} md={3} p={3} style={{display:"flex", justifyContent:"center", alignItems:"flex-start"}}>
                  <Box>
                    <IconButton onClick={()=>navigate(`services/${item.id}`)} sx={{ color:"#f5f5f5",border:`1px solid ${theme.palette.secondary.main}`, padding:"20px","&:hover": { color:theme.palette.secondary.main}}}>
                      {item.icon}
                    </IconButton>
                    <Typography my={2} variant="body2" color="white" fontWeight="500">{item.title}</Typography>
                    <Typography mb={2} component={Box} variant="caption" color="#f5f5f5">
                      {item.para}
                    </Typography>
                    <Button onClick={()=>navigate(`services/${item.id}`)} endIcon={<ArrowRightAltOutlined/>} variant="text" sx={{cursor:"pointer",color:"white", fontWeight:"500", "&:hover": {color:theme.palette.secondary.main}}}>
                      Know More
                    </Button>
                  </Box>
                </Grid>
              )
            })
          }
        </Grid>
      </Box>
    </Box>
    <Box style={style.mainContainer}>
      <Box style={style.container}>
        <Testimonial testimonials={testimonials} />
      </Box>
    </Box>
    <Enquiry theme={theme} />
    </>
  )
}

export default Home