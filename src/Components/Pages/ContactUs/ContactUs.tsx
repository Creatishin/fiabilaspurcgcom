import { ArrowForwardIos } from '@mui/icons-material'
import { Box, Button, Grid, IconButton, MenuItem, TextField, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { testimonials } from '../../../Data/Testimonials'
import Anil from '../../../Assets/images/Anil.png'
import linkdin from '../../../Assets/Icons/linkedin.svg'
import atIcon from '../../../Assets/Icons/email-address-symbol-6617363-5576142.webp'

function ContactUs({theme} : {theme:any}) {

    const style = {
        leftSide : {
            display : "flex",
            flex : 1,
            gap : "50px",
            padding : "30px",
            flexDirection : "column",
            justifyContent : "space-between"
        } as React.CSSProperties,
        testimonial : {
            display:"flex",
            gap : "05px",
            flexDirection : "column",
            justifyContent : 'center',
            paddingBottom : "20px"
          } as React.CSSProperties,
          testimonialNavigation : {
            display:"flex",
            gap:"15px",
            alignItems:"center",
            flexWrap:"wrap"
          } as React.CSSProperties,
          testimonialButton : {
            zIndex: "1",
            backgroundColor: "#092532 !important",
            width : "30px",
            borderRadius : "8px",
            height : "30px",
            display : "flex",
            justifyContent : "center",
            alignItems : "center",
            padding : "0px"
        } as React.CSSProperties,
        contactContainer : {
            display:"flex",
            gap : "05px",
            flexDirection : "column",
            justifyContent : 'center',
            paddingBottom : "20px"
        } as React.CSSProperties,
        representativeContainer : {
            display:"flex",
            gap : "05px",
            flexDirection : "column",
            justifyContent : 'center',
            paddingBottom : "80px"
        } as React.CSSProperties,
        representative : {
            display : "flex",
            alignItems : "center",
            gap : "20px"
        } as React.CSSProperties,
        reprentativeDetail : {
            display : "flex",
            flexDirection : "column",
        } as React.CSSProperties,
        uniWrapper : {
            width : "100%",
            boxSizing : "border-box",
            display : "flex",
            flexWrap : "wrap",
            justifyContent : "center",
            alignItems : "center",
            gap : "50px",
            padding : "50px 30px 30px 30px"
        } as React.CSSProperties,
        switchContainer : {
            display  : "flex",
            paddingTop : "50px",
            justifyContent : "center",
            alignItems : "center"
        } as React.CSSProperties,
        leftSwitch : {
            display : "flex",
            fles : 1,
            padding : "20px",
            borderRadius : "12px 0px 0px 12px"
        } as React.CSSProperties,
        rightSwitch : {
            display : "flex",
            fles : 1,
            padding : "20px",
            borderRadius : "0px 12px 12px 0px"
        } as React.CSSProperties,
        textField : {
            backgroundColor : "white",
            border : "0px",
            borderRadius : "12px"
        } as React.CSSProperties,
        checkbox : {
            border : "0px"
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
        headerAboutButton : {
            backgroundColor : theme.palette.primary.main,
            borderRadius : "12px",
            padding : "0px 40px",
            width : "90%",
            maxWidth : "400px",
            textDecoration : "none",
            textTransform : "none",
            height : "60px"
        } as React.CSSProperties,
    }

    const [testimonialIndex, setTestimonialIndex] = useState<number>(0)
    const [project, setProject] = useState<boolean>(true)

    const enquityOption = [
        {
            value : "Enquiry for New Project",
            type : "Project"
        },
        {
            value : "Enquiry for Running Project",
            type : "Project"
        },
        {
            value : "Report an Issue on Running Project",
            type : "Project"
        },
        {
            value : "Want to Hier Engineers",
            type : "OutSource"
        },
        {
            value : "Feedback for an Engineer",
            type : "OutSource"
        },
        {
            value : "Enquiry regarding Outsouring Process",
            type : "OutSource"
        },
    ]

  return (
    <>
        <Grid container>
            <Grid item xs={12} sm={6} md={5} style={{backgroundImage : "linear-gradient(rgba(218, 235, 255, 0.33),rgba(239, 255, 248, 1))"}}>
                <Toolbar/>
                <Box style={style.leftSide} sx={{position:"relative", overflow:"hidden"}}>
                    <Box style={style.testimonial}>
                        <Typography variant='subtitle2' fontWeight="500" color="primary">Testimonials</Typography>
                        <Box style={{display:"flex", flexDirection:"column", gap:"20px", margin:"40px 0px"}}>
                            <Typography variant="h4" color="primary" fontWeight="700">
                            {testimonials[testimonialIndex].title}
                            </Typography>
                            <Typography variant="body1" color="primary" fontWeight="400">
                            {testimonials[testimonialIndex].para}
                            </Typography>
                        </Box>
                        <Typography variant="body2" color="primary" fontWeight="700">{testimonials[testimonialIndex].name}</Typography>
                        <Typography variant="body2" color="primary" fontWeight="400">{testimonials[testimonialIndex].position} at: {testimonials[testimonialIndex].company}</Typography>
                        <Box style={style.testimonialNavigation}>
                            <IconButton onClick={()=>setTestimonialIndex( prev => prev===0 ? testimonials.length-1 : prev - 1 )} sx={{...style.testimonialButton, transform:"rotate(180deg)"}} className='custom-right-arrow'>
                            <ArrowForwardIos sx={{color:"white", fontSize:"15px"}} />
                            </IconButton>
                            <IconButton onClick={()=>setTestimonialIndex( prev => prev===testimonials.length - 1 ? 0 : prev + 1 )} sx={{...style.testimonialButton}} className='custom-right-arrow'>
                            <ArrowForwardIos sx={{color:"white", fontSize:"15px"}} />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box style={style.contactContainer}>
                        <Typography variant='h2'><span style={{fontWeight:700}}>Contact</span> Us</Typography>
                        <Typography variant='caption'>Our representative will contact you within 24 hours, we will sign an NDA to keep your ideas confidential and discuss the main requirements of the project. After that, our analysts and developers will carefully study them, and together we will come up with the next move. Simply fill out the form or</Typography>
                        <Typography variant='caption'>email us at <span style={{fontWeight:"700", color:theme.palette.secondary.main}}> hi@okoders.com</span></Typography>
                        <Typography variant='caption'>Or call us <span style={{fontWeight:"700", color:theme.palette.secondary.main}}> +41 76 238 21 39</span></Typography>
                    </Box>
                    <Box style={style.representativeContainer}>
                        <Typography variant='subtitle1'><span style={{fontWeight:700}}>Representative Office</span></Typography>
                        <Box style={style.representative}>
                            <img src={Anil} alt="ANil" width="135px" />
                            <Box style={style.reprentativeDetail}>
                                <Typography variant="body1" fontWeight="700">Anil Sardana</Typography>
                                <Typography variant="caption" fontWeight="400">CEO founder</Typography>
                                <Typography variant="caption" fontWeight="500">Gurugram, India</Typography>
                                <img src={linkdin} width="80px" alt="Lindien" />
                            </Box>
                        </Box>
                    </Box>
                    <img style={{transform:"rotate(-45deg)", position:"absolute", bottom:"-5%", right:"0px"}} src={atIcon} alt="@Icon" width="50%"/>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={7} style={{backgroundImage : "linear-gradient(rgba(130, 130, 130, 0),rgba(216, 217, 227, 0.34))"}}>
                <Toolbar/>
                <Box style={style.uniWrapper} sx={{flexDirection:"column", paddingBottom : "40px"}}>
                    <Typography variant='h2' style={{textAlign:"center", paddingTop:"40px"}}>What would <span style={{fontWeight:"700"}}>you like</span> to do?</Typography>
                    <Box style={style.switchContainer}>
                        <Box onClick={()=>setProject(true)} style={style.leftSwitch} sx={{backgroundColor : project ? theme.palette.primary.main : "#E9E9E9"}}>
                            <Typography variant="body2" color={project ? "white" : "primary"}>Enquiry for Project</Typography>
                        </Box>
                        <Box onClick={()=>setProject(false)} style={style.rightSwitch} sx={{backgroundColor : !project ? theme.palette.primary.main : "#E9E9E9"}}>
                            <Typography variant="body2" color={project ? "primary" : "white"}>Enquiry for Outsourcing</Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography variant='subtitle2' fontWeight="500" color="primary">
                            Enter your Detail here
                        </Typography>
                        <Typography variant="caption" color="error">The field is required as mark as*</Typography> 
                    </Box>
                    <Box sx={{width:{xs:"90%", sm:"70%", md:"60%"}}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={12}>
                                <TextField error style={style.textField} required fullWidth variant='outlined' label="Full Name" type="text" InputProps={style.inputProps} InputLabelProps={style.inputLableProps}/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <TextField  style={style.textField} required fullWidth variant='outlined' label="Email Id" type="email" InputProps={style.inputProps} InputLabelProps={style.inputLableProps}/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <TextField  style={style.textField} fullWidth variant='outlined' label="Phone Number (Optional)" type="tel" InputProps={style.inputProps} InputLabelProps={style.inputLableProps}/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <TextField  style={style.textField} fullWidth variant='outlined' label="Your Website (Optional)" InputProps={style.inputProps} InputLabelProps={style.inputLableProps}/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <TextField select  style={style.textField} fullWidth variant='outlined' label="How can we help you?" InputProps={style.inputProps} InputLabelProps={style.inputLableProps}>
                                    {
                                        enquityOption.filter((item) => project ? item.type === "Project" : item.type === "OutSource").map((item, index) => {
                                            return(
                                                <MenuItem style={{color : theme.palette.primary.main, fontSize : "14px" }} key={index} value={item.value}>
                                                    {item.value}
                                                </MenuItem>
                                            )
                                        })
                                    }
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <TextField multiline rows={7}  style={style.textField} fullWidth variant='outlined' label="Describe in details..." type="text" InputProps={style.inputProps} InputLabelProps={style.inputLableProps}/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} textAlign="center">
                                <Box style={{display : "flex", alignItems : "center", justifyContent : "center", gap : "10px"}}>
                                    <TextField style={style.checkbox} variant='outlined' type="checkbox" InputProps={style.inputProps} InputLabelProps={style.inputLableProps}/>
                                    <Typography variant='caption' fontWeight="400" color="primary">By submitting, I’m agree to the <span style={{color : theme.palette.secondary.main, textDecoration:"underline"}}>Terms and Conditions</span> </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Button style={style.headerAboutButton} variant="contained"><Typography variant='button' color="white" fontWeight="500" >Send Message</Typography></Button>
                </Box>
            </Grid>
        </Grid>
    </>
  )
}

export default ContactUs