import { Box, Typography } from '@mui/material'
import React from 'react'
import { companyDetail } from '../../config'
import { FacebookSharp, Instagram, Twitter } from '@mui/icons-material'

function Header({ theme }: { theme: any }) {

  const style = {
    mainContainer : {
      zIndex: 3100,
      backgroundColor : theme.backgroundColor.header,
      padding : "17px 30px",
      justifyContent : "center",
      position : "fixed",
      width:"100%",
      top:"0px"
    } as React.CSSProperties,
    container: {
      width: "100%",
      maxWidth: "1300px",
      padding: "0px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    } as React.CSSProperties,
    containerItem: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "50px"
    } as React.CSSProperties,
    redDot: {
      width: "6px",
      height:"6px",
      backgroundColor: theme.palette.secondary.main,
      borderRadius: "50%"
    } as React.CSSProperties
  }


  return (
    <Box style={style.mainContainer} sx={{display:{xs:"none", sm:"none", md:"flex"}}}>
      <Box style={style.container}>
        <Box style={style.containerItem}>
          <Box style={{display:"flex", alignItems:"center", gap:'8px'}}>
            <Box style={style.redDot}></Box>
            <Typography style={{cursor:"pointer", color:"white"}} onClick={()=>window.location.href = 'tel://9479140189'} variant='caption' color="primary"><span style={{ fontWeight: "700" }}>Call Us: </span>{companyDetail.contact}</Typography>
          </Box>
          <Box style={{display:"flex", alignItems:"center", gap:'8px'}}>
            <Box style={style.redDot}></Box>
            <Typography style={{cursor:"pointer", color:"white"}} onClick={()=>window.location.href = 'mailto: ' + companyDetail.email} variant='caption' color="primary"><span style={{ fontWeight: "700" }}>Email Us: </span>{companyDetail.email}</Typography>
          </Box>
        </Box>
        <Box style={style.containerItem}>
          <Box style={{display:"flex", alignItems:"center", gap:'8px'}}>
            <Box style={style.redDot}></Box>
            <Typography style={{cursor:"pointer", color:"white"}} fontWeight="700" variant='caption' color="primary">Follow Us:</Typography>
            <FacebookSharp onClick={()=>window.location.href = companyDetail.facebook} style={{color:"white", cursor:"pointer"}}/>
            <Instagram onClick={()=>window.location.href = companyDetail.instagram} style={{color:"white", cursor:"pointer"}}/>
            <Twitter onClick={()=>window.location.href = companyDetail.twitter} style={{color:"white", cursor:"pointer"}} />
          </Box>
        </Box>
      </Box>
    </Box>
  )



}

export default Header