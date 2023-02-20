import { Button, Grid, MenuItem, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import enquiryImage from '../../Assets/images/enquiryImage.svg'
import atIcon from '../../Assets/Icons/email-address-symbol-6617363-5576142.webp'

function Enquiry({theme} : {theme:any}) {

    const style = {
        container : {
            padding : "40px 10px",
            width : "100%",
            boxSizing : "border-box",
            display : "flex",
            alignItems : "center",
            justifyContent : "center",
            overflow : "hidden"
        } as React.CSSProperties,
        wrapper : {
            padding : "10px",
            maxWidth : "1300px",
            width : "100%",
            display : "flex",
            flexWrap : "wrap",
            alignItems: "center",
            justifyContent : "space-between"
        } as React.CSSProperties,
        uniWrapper : {
            width : "100%",
            display : "flex",
            flexWrap : "wrap",
            justifyContent : "center",
            alignItems : "center",
            gap : "50px"
        } as React.CSSProperties,
        switchContainer : {
            display  : "flex",
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
        inputProps : {
            sx: {
                ".MuiOutlinedInput-notchedOutline.Mui-error" : {
                    border : "1px solid #FF0000"
                },
                ".MuiOutlinedInput-notchedOutline.Mui-focused" : {
                    border : "0"
                },
                ".MuiOutlinedInput-notchedOutline" : {
                    color : 'red',
                    border: "0",
                },
                "&:hover": {
                    ".MuiOutlinedInput-notchedOutline": {
                    border: "0",
                    },
                },
            },
            style: {
                color : theme.palette.primary.main,
                fontSize : "14px",
                fontWeight : "400",
            }
        },
        inputLableProps : {
            sx : {
                ".MuiFormLabel-asterisk" : {
                    color : "red"
                },
                ".MuiOutlinedInput-notchedOutline" : {
                    top : "-12px !important"
                }
            },
            style: {
                color : "#AAAAAA",
                fontSize : "14px",
                fontWeight : "400",
            }
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

    const [enquiryHelpType, setEnquiryHelpType] = useState<string>("")

  return (
    <>
    <Box style={style.container}>
        <Box style={style.wrapper}>
          <Box style={style.uniWrapper} sx={{flexDirection:"column"}}>
              <Box sx={{width:{xs:"100%", sm:"80%", md:"70%"}}}>
                <img src={enquiryImage} alt="Enquiry Idea" width="100%" />
              </Box>
          </Box>
        </Box>
    </Box>
    <Box style={style.container} sx={{position:"relative", backgroundImage : `linear-gradient(${theme.backgroundColor.linear1}, ${theme.backgroundColor.linear2})`,}}>
        <Box style={style.wrapper}>
            <Box style={style.uniWrapper} sx={{flexDirection:"column", paddingBottom : "40px"}}>
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
                <Box sx={{width:{xs:"100%", sm:"70%", md:"60%"}}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField error style={style.textField} required fullWidth variant='outlined' label="Full Name" type="text" InputProps={style.inputProps} InputLabelProps={style.inputLableProps}/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField  style={style.textField} required fullWidth variant='outlined' label="Email Id" type="email" InputProps={style.inputProps} InputLabelProps={style.inputLableProps}/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField  style={style.textField} fullWidth variant='outlined' label="Phone Number (Optional)" type="tel" InputProps={style.inputProps} InputLabelProps={style.inputLableProps}/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField  style={style.textField} fullWidth variant='outlined' label="Your Website (Optional)" InputProps={style.inputProps} InputLabelProps={style.inputLableProps}/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField select value={enquiryHelpType} style={style.textField} fullWidth variant='outlined' label="How can we help you?" InputProps={style.inputProps} InputLabelProps={style.inputLableProps}>
                                {
                                    enquityOption.filter((item) => project ? item.type === "Project" : item.type === "OutSource").map((item, index) => {
                                        return(
                                            <MenuItem onClick={()=>setEnquiryHelpType(item.value)} style={{color : theme.palette.primary.main, fontSize : "14px" }} key={index} value={item.value}>
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
                <img style={{transform:"rotate(-45deg)", position:"absolute", bottom:"-20%", right:"0px"}} src={atIcon} alt="@Icon" width="30%"/>
            </Box>
        </Box>
    </Box>
    </>
  )
}

export default Enquiry