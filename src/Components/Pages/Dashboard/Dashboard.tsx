import { Box, Button, Grid, TextField, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import header from '../../../Assets/About/header.png'
import { user } from '../../../config'

function Dashboard({theme}:{theme:any}) {

    const [filledData, setFilledData] = useState<any>({
        username : "",
        password : ""
    })
    const [error, setError] = useState<boolean>(false)

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
        uniWrapper : {
            width : "100%",
            display : "flex",
            flexWrap : "wrap",
            justifyContent : "center",
            alignItems : "center",
            gap : "50px"
        } as React.CSSProperties,
        textField : {
            backgroundColor :"rgb(60, 60, 70, 0.3)",
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
                color :"white",
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
            backgroundColor :"rgb(60, 60, 70, 0.3)",
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
        const {username, password} = filledData

        if(username === "" || password === "" || username !== user.userName || password !== user.password){
            setError(true)
        } else {
            setError(false)
            localStorage.setItem('FiaToken',"access-fiabilaspurcg.com-Egid0938AncmBVUYmcyd")
        }
    }

    const access = localStorage.getItem('FiaToken') == "access-fiabilaspurcg.com-Egid0938AncmBVUYmcyd"

  return (
    <>
        <Toolbar style={{height:"70px", backgroundColor:theme.palette.primary.main}}/>
        <Box style={style.mainContainer} sx={{backgroundColor:theme.palette.primary.main, position:"relative", overflow:"hidden"}}>
            <Box style={style.container}>
                <Box style={style.headerContainer} sx={{padding:"120px 0px", positin:"relative"}}>
                    <Box sx={{zIndex:3}} style={{width:"4px", height:"80px", borderRadius:"1px", backgroundColor:theme.palette.secondary.main}}/>
                    <Typography sx={{zIndex:3}} variant="h1" color="white" fontWeight="700">Dashboard</Typography>
                    <Typography position="absolute" sx={{fontSize:{xs:"20vw", sm:"18vw", md:"15vw"}}} textAlign="center" variant="h1" zIndex={1} color="#171b25" fontWeight="700">DASHBOARD</Typography>
                </Box>
            </Box>
            <img src={header} alt={"Header"} style={{position:"absolute", bottom:"0", left:"0", zIndex:2}} />
        </Box>
        {
            access ? 
            <Box style={style.mainContainer}>
                <Box style={style.container}>

                </Box>
            </Box> :
            <Box style={style.mainContainer} sx={{position:"relative", backgroundImage : `linear-gradient(${theme.palette.primary.main}, ${theme.palette.primary.main})`,}}>
                <Box style={style.container}>
                    <Box style={style.uniWrapper} sx={{flexDirection:"column", paddingBottom : "40px"}}>
                
                        <Box textAlign="center">
                            <Typography variant='h2' textAlign="center" fontWeight="700" color="white">
                                Please provide username & password
                            </Typography>
                            <Typography variant="caption" textAlign="center" color="secondary">The field marked with * are required</Typography> 
                        </Box>
                        <Box sx={{width:{xs:"100%", sm:"70%", md:"60%"}}}>
                            <form style={{textAlign:"center"}}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6} md={6}>
                                        <TextField name='username' error={error} value={filledData.username} onChange={(e)=>handleChange(e.target.name, e.target.value)}  style={style.textField} required fullWidth variant='outlined' label="User Name" type="text" InputProps={style.inputProps} InputLabelProps={style.inputLableProps}/>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6}>
                                        <TextField name='password' error={error} value={filledData.password} onChange={(e)=>handleChange(e.target.name, e.target.value)}  style={style.textField} required fullWidth variant='outlined' label="Password" type="password" InputProps={style.inputProps} InputLabelProps={style.inputLableProps}/>
                                    </Grid>
                                </Grid>
                                <Button type='submit' onClick={()=>handleSubmit()} style={style.headerAboutButton} variant="contained"><Typography variant='button' color="white"  fontWeight="500" >Login</Typography></Button>
                            </form>
                        </Box>
                    </Box>
                </Box>
            </Box>
        }
    </>
  )
}

export default Dashboard