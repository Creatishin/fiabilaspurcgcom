import { Box, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import header from '../../../Assets/About/header.png'
// import aboutheader from '../../../Assets/About/aboutheader.png'
import Statics from '../../Modals/Statics'
import { FavoriteBorderOutlined, ModeStandbyOutlined, UpdateOutlined } from '@mui/icons-material'
import Testimonial from '../../Modals/Testimonial'
import { mentorTestimonials } from '../../../Data/Testimonials'
import Enquiry from '../../Modals/Enquiry'
import LeafDivider from '../../Modals/LeafDivider'
import director from '../../../Assets/images/director.jpg'
import Team from '../../Modals/Team'
import { TeamData } from '../../../Data/TeamData'

function About({theme}:{theme:any}) {

    const style={
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
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            gap: "40px",
            flexDirection: "column"
        } as React.CSSProperties,
        directorContainer : {
            width:'80%',
            maxWidth:"300px",
            aspectRatio:1,
            border:`2px solid ${theme.palette.secondary.main}`,
            margin:"auto",
            borderRadius:"50%",
            backgroundImage : `url(${director})`,
            backgroundSize : "cover",
            backgroundPositionX: "center"
        } as React.CSSProperties
    }

  return (
    <>
        <Toolbar style={{height:"70px", backgroundColor:theme.palette.primary.main}}/>
        <Box style={style.mainContainer} sx={{backgroundColor:theme.palette.primary.main, position:"relative", overflow:"hidden"}}>
            <Box style={style.container}>
                <Box style={style.headerContainer} sx={{padding:"120px 0px", positin:"relative"}}>
                    <Box sx={{zIndex:3}} style={{width:"4px", height:"80px", borderRadius:"1px", backgroundColor:theme.palette.secondary.main}}/>
                    <Typography sx={{zIndex:3}} variant="h1" color="white" fontWeight="700">About FIA</Typography>
                    <Typography position="absolute" sx={{fontSize:{xs:"20vw", sm:"18vw", md:"15vw"}}} textAlign="center" variant="h1" zIndex={1} color="#171b25" fontWeight="700">ABOUT FIA</Typography>
                </Box>
            </Box>
            <img src={header} alt={"Header"} style={{position:"absolute", bottom:"0", left:"0", zIndex:2}} />
        </Box>
        <Box style={style.mainContainer}>
            <Box style={style.container}>
                <Grid style={{alignItems:"center"}} container rowSpacing={5}>
                    <Grid style={{display:"flex", justifyContent:"center", flexDirection:"column", gap:"30px"}} item xs={12} sm={6}>
                        <Typography variant="h2" fontWeight="500">
                            We are <span style={{color:theme.palette.secondary.main}}>Professional Team</span> of Investigators
                        </Typography>
                        <Typography variant="body2" fontWeight="500" color={theme.textColor.para}>
                            Forensic Investigation Agency has been established in the year 2020 in Bilaspur, Chhattisgarh. Our agency is registered with Govt. of India and ISO 9001:2015 Certified Agency in Central India.
                        </Typography>
                        <Typography variant='caption' color={theme.textColor.para} width="100%" >
                            We have a best team of Qualified Forensic Consultant, guided by Director, Mr. Dipendra Barmate a passionate & determined Forensic Expert, where everyone have the best solution of investigations in the all field. We also provide best services as expert opinion in Courts and Legal purposes under section 45 of India Evidence Act.
                        </Typography>
                    </Grid>
                    <Grid textAlign="center" item xs={12} sm={6}>
                        <Box style={style.directorContainer}></Box>
                        <Typography mt={3} variant="body2" fontWeight="500" color="black">
                            Mr. Dipendra Barmate
                        </Typography>
                        <Typography variant="caption" fontWeight="500" color={theme.textColor.para}>
                            Director FIA
                        </Typography>
                        {/* <img width="80%" src={director} alt="HomeSection2"></img>  */}
                    </Grid>
                </Grid>
            </Box>
        </Box>
        <Statics theme={theme} />
        <Box style={style.mainContainer}>
            <Box style={style.container}>
                <Testimonial testimonials={mentorTestimonials} heading={"Our Mentors"}/>
            </Box>
        </Box>
        <Team member={TeamData} />
        <Box style={style.mainContainer} sx={{backgroundColor:theme.palette.primary.main}}>
            <Box style={style.container} sx={{flexDirection:"column", justifyContent:"center !important", position:"relative"}}>
                <Typography color="white" variant="h2" fontWeight="500">
                    Why <span style={{color:theme.palette.secondary.main}}>Choose</span> Us
                </Typography>
                <Typography my={3} color="#F5f5f5" variant='caption'>
                    Biggest private and goverment corporates recommend our company as a reliable Forensic Investigation Agency
                </Typography>
                <Grid mt={3} container rowGap={5}>
                    <Grid item xs={12} sm={4}>
                        <Box p={4} sx={{border:"1px solid #f5f5f5", borderRadius:"15px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", margin:{xs:0, sm:2}}}>
                            <IconButton sx={{ color:"#f5f5f5",border:`1px solid ${theme.palette.secondary.main}`, padding:"20px","&:hover": { color:theme.palette.secondary.main}}}>
                                <ModeStandbyOutlined sx={{ fontSize:"30px"}}/>
                            </IconButton>
                            <Typography textAlign="center" my={2} variant="body2" color="white" fontWeight="500">Our Mission</Typography>
                            <Typography textAlign="center" mb={2} component={Box} variant="caption" color="#f5f5f5">
                            "Justice via Scientific Investigation" verified that with the help of advance technology and science we ensure that the guilty are convicted and the innocent freed from unfounded accusations.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box p={4} sx={{border:"1px solid #f5f5f5", borderRadius:"15px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", margin:{xs:0, sm:2}}}>
                            <IconButton sx={{ color:"#f5f5f5",border:`1px solid ${theme.palette.secondary.main}`, padding:"20px","&:hover": { color:theme.palette.secondary.main}}}>
                                <FavoriteBorderOutlined sx={{ fontSize:"30px"}}/>
                            </IconButton>
                            <Typography textAlign="center" my={2} variant="body2" color="white" fontWeight="500">Our Vision</Typography>
                            <Typography textAlign="center" mb={2} component={Box} variant="caption" color="#f5f5f5">
                            Reach to maximum number of people who are in need of support or advice, and help them to pvercome obstacles in various spheres of their lives with the help of our experties in Forensics.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box p={4} sx={{border:"1px solid #f5f5f5", borderRadius:"15px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", margin:{xs:0, sm:2}}}>
                            <IconButton sx={{ color:"#f5f5f5",border:`1px solid ${theme.palette.secondary.main}`, padding:"20px","&:hover": { color:theme.palette.secondary.main}}}>
                                <UpdateOutlined sx={{ fontSize:"30px"}}/>
                            </IconButton>
                            <Typography textAlign="center" my={2} variant="body2" color="white" fontWeight="500">Our Future Plan</Typography>
                            <Typography textAlign="center" mb={2} component={Box} variant="caption" color="#f5f5f5">
                                We ensure to provide crediability and comprehensive insight to the young talent for serving the country as forensic scientist and to provide more job opportunities in the field of forensics.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <LeafDivider dark={true} />
            </Box>
        </Box>
        <Enquiry theme={theme} dark={true} />
    </>
  )
}

export default About