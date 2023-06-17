import { Box, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import header from '../../../Assets/About/header.png'
import contact from '../../../Assets/images/contact.png'
import Statics from '../../Modals/Statics'
import { Call, Email, FmdGood, LockClock } from '@mui/icons-material'
import Enquiry from '../../Modals/Enquiry'
import Testimonial from '../../Modals/Testimonial'
import { testimonials } from '../../../Data/Testimonials'
import LeafDivider from '../../Modals/LeafDivider'
import { companyDetail } from '../../../config'

function Contact({theme}:{theme:any}) {
    
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
        } as React.CSSProperties
    }

  return (
        <>
            <Toolbar style={{height:"70px", backgroundColor:theme.palette.primary.main}}/>
            <Box style={style.mainContainer} sx={{backgroundColor:theme.palette.primary.main, position:"relative", overflow:"hidden"}}>
                <Box style={style.container}>
                    <Box style={style.headerContainer} sx={{padding:"120px 0px", positin:"relative"}}>
                        <Box sx={{zIndex:3}} style={{width:"4px", height:"80px", borderRadius:"1px", backgroundColor:theme.palette.secondary.main}}/>
                        <Box sx={{zIndex:3}} style={{display:"flex", justifyContent:"center", alignItems:'center', gap:"20px"}}>
                            <Typography textAlign="center"  variant="h1" color="white" fontWeight="700">Contact</Typography>
                        </Box>
                        <Typography position="absolute" sx={{fontSize:{xs:"20vw", sm:"18vw", md:"15vw"}}} textAlign="center" variant="h1" zIndex={1} color="#171b25" fontWeight="700">CONTACT</Typography>
                    </Box>
                </Box>
                <img src={header} alt={"Header"} style={{position:"absolute", bottom:"0", left:"0", zIndex:2}} />
            </Box>
            <Box style={style.mainContainer}>
                <Box style={style.container}>
                    <Grid container rowSpacing={5}>
                        <Grid style={{display:"flex", justifyContent:"center", flexDirection:"column", gap:"30px"}} item xs={12} sm={6}>
                            <Typography variant="h2" fontWeight="500">
                              Be in <span style={{color:theme.palette.secondary.main}}>Touch</span>
                            </Typography>
                            <Typography variant='caption' color={theme.textColor.para} width="100%" >
                            Send your requirements for any type of investigation, we will study your specification and case, create a proper plan and perform investigation! Result will be something amazing!
                            </Typography>
                            <Grid container rowGap="40px">
                                <Grid item xs={6}>
                                    <IconButton sx={{marginBottom:"10px", color:"#777777",border:`1px solid ${theme.palette.secondary.main}`, padding:"20px", "&:hover" : {color:theme.palette.secondary.main}}}>
                                        <FmdGood />
                                    </IconButton>
                                    <Typography variant="body1" color="primary" fontWeight="700">Address</Typography>
                                    <Typography variant="caption" color="#777777" >{ companyDetail.address }</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <IconButton sx={{marginBottom:"10px", color:"#777777",border:`1px solid ${theme.palette.secondary.main}`, padding:"20px", "&:hover" : {color:theme.palette.secondary.main}}}>
                                        <Email />
                                    </IconButton>
                                    <Typography variant="body1" color="primary" fontWeight="700">Email</Typography>
                                    <Typography variant="caption" color="#777777" >{ companyDetail.email }</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <IconButton sx={{marginBottom:"10px", color:"#777777",border:`1px solid ${theme.palette.secondary.main}`, padding:"20px", "&:hover" : {color:theme.palette.secondary.main}}}>
                                        <Call />
                                    </IconButton>
                                    <Typography variant="body1" color="primary" fontWeight="700">Phone number</Typography>
                                    <Typography variant="caption" color="#777777" >+91 9479140189<br/>{ companyDetail.contact }</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <IconButton sx={{marginBottom:"10px", color:"#777777",border:`1px solid ${theme.palette.secondary.main}`, padding:"20px", "&:hover" : {color:theme.palette.secondary.main}}}>
                                        <LockClock />
                                    </IconButton>
                                    <Typography variant="body1" color="primary" fontWeight="700">Working hours</Typography>
                                    <Typography variant="caption" color="#777777" >Mon - Sat: 10:00 - 19:00 <br/> Sun: Day Off</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid textAlign="center" item xs={12} sm={6}>
                            <img width="80%" src={contact} alt="HomeSection2"></img> 
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Statics theme={theme} />
            <Box style={style.mainContainer}>
                <Box style={style.container} sx={{position:"relative", flexDirection:"column"}}>
                    <Testimonial testimonials={testimonials}/>
                    <LeafDivider />
                </Box>
            </Box>
            <Enquiry theme={theme} dark={true}/>
        </>
  )
}

export default Contact