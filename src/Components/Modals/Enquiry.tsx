import { Button, Grid, MenuItem, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import services from '../../Data/Services'
import pot from '../../Assets/images/Frame-4.png'
import enquiryInterface from '../../Interfaces/Enquiry'
import { postEnquiry } from '../../Services/FIrebase/FirebaseFunctions'

function Enquiry({theme, dark, id} : {theme:any, dark?:boolean, id?:string}) {

    const [enquityOption, setEnquityOption] = useState<string[]>([""])
    const [filledData, setFilledData] = useState<enquiryInterface>({
        name : "", 
        email : "", 
        contact : "", 
        website : "", 
        service : "",
        message : ""
    })
    const [error, setError] = useState<boolean>(false)

    useEffect(()=>{
        const enquiry : string[] = [""]

        services.map((item) => {
            enquiry.push(item.title)
            return true
        })
        setEnquityOption(
            enquiry
        )

    },[])

    useEffect(()=>{
        if(id) setFilledData({...filledData, service : services.filter(item => item.id === id)[0].title})
    },[id])

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
            backgroundColor : dark ? "rgb(60, 60, 70, 0.3)" : "white",
            backdropFilter:"blur(3px)",
            border : "0px",
            borderRadius : "12px"
        } as React.CSSProperties,
        checkbox : {
            border : "0px"
        } as React.CSSProperties,
        inputProps : {
            sx: {
                ".MuiOutlinedInput-notchedOutline.Mui-error" : {
                    border : "1px solid #FF0000",
                },
                ".MuiOutlinedInput-notchedOutline.Mui-focused" : {
                    border : "1px solid transparent"
                },
                ".MuiOutlinedInput-notchedOutline" : {
                    color : 'red',
                    border: "1px solid transparent",
                },
                "&:hover": {
                    ".MuiOutlinedInput-notchedOutline": {
                    border: "1px solid transparent",
                    },
                },
                "&:active": {
                    ".MuiOutlinedInput-notchedOutline": {
                    border: "1px solid transparent",
                    },
                },
            },
            style: {
                color : dark ? "white" : theme.palette.primary.main,
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
            backgroundColor : dark ? "rgb(60, 60, 70, 0.3)" :  theme.palette.primary.main,
            borderRadius : "12px",
            marginTop:"20px",
            backdropFilter:"blur(3px)",
            padding : "0px 40px",
            width : "90%",
            maxWidth : "400px",
            textDecoration : "none",
            textTransform : "none",
            height : "60px"
        } as React.CSSProperties,
    }

    const handleChange = (name : string, value : string) => {
        setFilledData({...filledData, [name] : value})
    }
    
    const handleSubmit = () => {
        const {name, contact, service} = filledData

        if(name === "" || contact === "" || service === ""){
            setError(true)
        } else {
            setError(false)
            postEnquiry(filledData)
            setFilledData({
                name : "", 
                email : "", 
                contact : "", 
                website : "", 
                service : "",
                message : ""
            })
        }
    }

  return (
    <>
    <Box style={style.container} sx={{position:"relative", backgroundImage : `linear-gradient(${dark ? theme.palette.primary.main : theme.backgroundColor.linear1}, ${dark ? theme.palette.primary.main : theme.backgroundColor.linear2})`,}}>
        <Box style={style.wrapper} sx={{zIndex:2}}>
            <Box style={style.uniWrapper} sx={{flexDirection:"column", paddingBottom : "40px"}}>
            
                <Box textAlign="center">
                    <Typography variant='h2' textAlign="center" fontWeight="700" color={dark ? "white" : "primary"}>
                        Connect with Us ?
                    </Typography>
                    <Typography variant="caption" textAlign="center" color="secondary">The field marked with * are required</Typography> 
                </Box>
                <Box sx={{width:{xs:"100%", sm:"70%", md:"60%"}}}>
                <form style={{textAlign:"center"}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField name='name' error={error} value={filledData.name} onChange={(e)=>handleChange(e.target.name, e.target.value)}  style={style.textField} required fullWidth variant='outlined' label="Full Name" type="text" InputProps={style.inputProps} InputLabelProps={style.inputLableProps}/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField name="contact" error={error} value={filledData.contact} onChange={(e)=>handleChange(e.target.name, e.target.value)} onKeyPress={e => /[^(?!0)\d{1,3}(\d{3})*(\d\d)?$]$/.test(e.key) && e.preventDefault()} style={style.textField} required fullWidth variant='outlined' label="Phone Number" type="tel" InputProps={style.inputProps} InputLabelProps={style.inputLableProps}/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField name='email' value={filledData.email} onChange={(e)=>handleChange(e.target.name, e.target.value)} style={style.textField} fullWidth variant='outlined' label="Email Id (Optional)" type="email" InputProps={style.inputProps} InputLabelProps={style.inputLableProps}/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField name="website" value={filledData.website} onChange={(e)=>handleChange(e.target.name, e.target.value)} style={style.textField} fullWidth variant='outlined' label="Your Website (Optional)" InputProps={style.inputProps} InputLabelProps={style.inputLableProps}/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField name="service" value={filledData.service} error={error} onChange={(e)=>handleChange(e.target.name, e.target.value)} select style={style.textField} fullWidth variant='outlined' label="Select Service Type" InputProps={style.inputProps} InputLabelProps={style.inputLableProps} required>
                                {
                                    enquityOption.map((item, index) => {
                                        return(
                                            <MenuItem style={{color : theme.palette.primary.main, fontSize : "14px" }} key={index} value={item}>
                                                {item}
                                            </MenuItem>
                                        )
                                    })
                                }
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField name="message" value={filledData.message} onChange={(e)=>handleChange(e.target.name, e.target.value)} multiline rows={7}  style={style.textField} fullWidth variant='outlined' label="Describe in details..." type="text" InputProps={style.inputProps} InputLabelProps={style.inputLableProps}/>
                        </Grid>
                    </Grid>
                    <Button type='submit' onClick={()=>handleSubmit()} style={style.headerAboutButton} variant="contained"><Typography variant='button' color="white"  fontWeight="500" >Send Message</Typography></Button>
                </form>
                </Box>
            </Box>
        </Box>
        { dark ? <img src={pot} alt="Pot" style={{position:'absolute', right:0, bottom:0, zIndex:1}} /> : null}
    </Box>
    </>
  )
}

export default Enquiry