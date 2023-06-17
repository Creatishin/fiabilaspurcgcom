import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function Statics({theme}:{theme:any}) {

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
    }
    
  return (
    <Box style={style.mainContainer} sx={{position:"relative"}}>
      <Typography textAlign="center" sx={{display:{sx:"none", sm:"block"}}} color="white" style={{position:"absolute", textShadow:"0px 0px 20px rgba(0,0,0,0.05)"}} fontSize="15vw" fontWeight="800">STATISTICS</Typography>
      <Box style={style.container}>
        <Grid zIndex={1} container style={{display:"flex", justifyContent:"center"}}>
          <Grid item xs={12} textAlign="center">
            <Typography variant="h2" color="secondary" fontWeight="700">Statistics</Typography>
          </Grid>
          <Grid textAlign="center" style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"20px"}}  item xs={6} sm={3}>
            <Typography variant='h2' fontWeight="400">
              10<span style={{color:theme.palette.secondary.main}}>+</span>
            </Typography>
            <Typography variant='caption' fontWeight="700">
              Professionals Team
            </Typography>
          </Grid>
          <Grid textAlign="center" style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"20px"}}  item xs={6} sm={3}>
          <Typography variant='h2' fontWeight="400">
              500<span style={{color:theme.palette.secondary.main}}>+</span>
            </Typography>
            <Typography variant='caption' fontWeight="700">
              Satisfied clients
            </Typography>
          </Grid>
          <Grid textAlign="center" style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"20px"}} item xs={6} sm={3}>
          <Typography  variant='h2' fontWeight="400">
              100<span style={{color:theme.palette.secondary.main}}>+</span>
            </Typography>
            <Typography  variant='caption' fontWeight="700">
              Cases Solved
            </Typography>
          </Grid>
          <Grid textAlign="center" style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"20px"}}  item xs={6} sm={3}>
          <Typography variant='h2' fontWeight="400">
              3<span style={{color:theme.palette.secondary.main}}>+</span>
            </Typography>
            <Typography  variant='caption' fontWeight="700">
              Years of experience
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Statics