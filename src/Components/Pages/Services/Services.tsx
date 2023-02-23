import { ArrowForward } from '@mui/icons-material'
import { Box, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import header from '../../../Assets/About/header.png'
import services from '../../../Data/Services'
import Enquiry from '../../Modals/Enquiry'

function Services({theme}:{theme:any}) {

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

    const navigate = useNavigate()

  return (
    <>
        <Toolbar style={{height:"70px", backgroundColor:theme.palette.primary.main}}/>
        <Box style={style.mainContainer} sx={{backgroundColor:theme.palette.primary.main, position:"relative", overflow:"hidden"}}>
            <Box style={style.container}>
                <Box style={style.headerContainer} sx={{padding:"50px 0px", positin:"relative"}}>
                    <Box sx={{zIndex:3}} style={{width:"4px", height:"80px", borderRadius:"1px", backgroundColor:theme.palette.secondary.main}}/>
                    <Typography sx={{zIndex:3}} variant="h1" color="white" fontWeight="700">Services</Typography>
                    <Typography position="absolute" sx={{fontSize:{xs:"20vw", sm:"18vw", md:"15vw"}}} textAlign="center" variant="h1" zIndex={1} color="#171b25" fontWeight="700">SERVICES</Typography>
                </Box>
            </Box>
            <img src={header} alt={"Header"} style={{position:"absolute", bottom:"0", left:"0", zIndex:2}} />
        </Box>
        <Box style={style.mainContainer}>
            <Box style={style.container} sx={{flexDirection:"column", justifyContent:"center !important", gap:"30px"}}>
                <Typography textAlign="center" variant="h2" fontWeight="500" width="100%" maxWidth="700px">
                    We offer <span style={{color:theme.palette.secondary.main}}>Professional</span> Forensic Services
                </Typography>
                <Typography textAlign="center" variant='caption' color={theme.textColor.para} width="100%" maxWidth="700px" >
                We ensure to provide credibility and comprehensive insight to the learners in different fields of Forensic Science.
                </Typography>
            </Box>
        </Box>
        <Box style={style.mainContainer}>
            <Box style={style.container} sx={{flexDirection:"column"}}>
                {
                    services.map((item, index) => {
                        return(
                            <Grid my={1} key={index} rowSpacing={2} container style={{display:"felx", alignItems:'center'}}>
                                <Grid sx={{padding:{xs:0, sm:2}, display:{xs:"none", sm:`${index%2===0 ? "none" : "block"}`}}} item xs={12} sm={6}>
                                    <Box style={{display:"flex", justifyContent:"center", alignItems:'center'}}>
                                        <img src={item.vector} alt={item.title} width="auto" height="80%" style={{maxHeight:"400px", maxWidth:"80%"}} />
                                    </Box>
                                </Grid>
                                <Grid onClick={()=>navigate(`${item.id}`)} sx={{padding:{xs:0, sm:2}, cursor:"pointer"}} item xs={12} sm={6}>
                                    <Box sx={{padding:{xs:"20px", sm:"50px"}, border:"1px solid #777777", borderRadius:"15px", "&:hover" : {border:`1px solid ${theme.palette.secondary.main}`}, display:"flex", flexDirection:"column", gap:"20px"}}>
                                        <Box style={{display:"flex", justifyContent:"space-between", alignItems:'center', marginBottom:"10px"}}>
                                            <IconButton onClick={()=>navigate(`${item.id}`)} sx={{ color:"#777777",border:`1px solid ${theme.palette.secondary.main}`, padding:"20px","&:hover": { color:theme.palette.secondary.main}}}>
                                                {item.icon}
                                            </IconButton>
                                            <IconButton onClick={()=>navigate(`${item.id}`)}>
                                                <ArrowForward sx={{ color:"#777777","&:hover": { color:theme.palette.secondary.main}}} />
                                            </IconButton>
                                        </Box>
                                        <Typography variant='body2' fontWeight="700">{item.title}</Typography>
                                        <Typography variant='caption' color="#777777">{item.para}</Typography>
                                    </Box>
                                </Grid>
                                <Grid sx={{padding:{xs:0, sm:2}, display:{xs:"none", sm:`${index%2===0 ? "block" : "none"}`}}} item xs={12} sm={6}>
                                    <Box style={{display:"flex", justifyContent:"center", alignItems:'center'}}>
                                        <img src={item.vector} alt={item.title} width="auto" height="80%" style={{maxHeight:"400px", maxWidth:"80%"}} />
                                    </Box>
                                </Grid>
                            </Grid>
                        )
                    })
                }
            </Box>
        </Box>
        <Enquiry theme={theme} dark={true} />
    </>
  )
}

export default Services