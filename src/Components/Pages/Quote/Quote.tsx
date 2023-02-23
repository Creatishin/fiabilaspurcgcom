import { ArrowForward } from '@mui/icons-material'
import { Box, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import header from '../../../Assets/About/header.png'
import services from '../../../Data/Services'
import Enquiry from '../../Modals/Enquiry'
import LeafDivider from '../../Modals/LeafDivider'

function Quote({theme}:{theme:any}) {

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
                    <Typography sx={{zIndex:3}} variant="h1" color="white" fontWeight="700">Get a Quote</Typography>
                    <Typography position="absolute" sx={{fontSize:{xs:"20vw", sm:"18vw", md:"15vw"}}} textAlign="center" variant="h1" zIndex={1} color="#171b25" fontWeight="700">GET A QUOTE</Typography>
                </Box>
            </Box>
            <img src={header} alt={"Header"} style={{position:"absolute", bottom:"0", left:"0", zIndex:2}} />
        </Box>
        <Box style={style.mainContainer}>
            <Box style={style.container} sx={{flexDirection:"column", justifyContent:"center !important", gap:"30px"}}>
                <Typography textAlign="center" variant="h2" fontWeight="500" width="100%" maxWidth="700px">
                    Get a <span style={{color:theme.palette.secondary.main}}>Quote</span> 
                </Typography>
                <Typography textAlign="center" variant='caption' color={theme.textColor.para} width="100%" maxWidth="700px" >
                Get a free consultation with a forensic expert to discover services that we offer in many fields.
                </Typography>
            </Box>
        </Box>
        <Enquiry theme={theme} />
        <Box style={style.mainContainer} sx={{background:theme.palette.primary.main}}>
            <Box style={style.container} sx={{flexDirection:"column", position:"relative"}}>
                <Grid my={1} rowSpacing={2} container style={{display:"felx", alignItems:'center'}}>
                {
                    services.map((item, index) => {
                        return(
                            <Grid key={index} onClick={()=>navigate(`${item.id}`)} sx={{padding:{xs:0, sm:2}, cursor:"pointer"}} item xs={12} sm={6} md={4}>
                                <Box sx={{padding:{xs:"20px", sm:"50px"}, border:"1px solid #F5F5F5", borderRadius:"15px", "&:hover" : {border:`1px solid ${theme.palette.secondary.main}`}, display:"flex", flexDirection:"column", gap:"20px"}}>
                                    <Box style={{display:"flex", justifyContent:"space-between", alignItems:'center', marginBottom:"10px"}}>
                                        <IconButton onClick={()=>navigate(`${item.id}`)} sx={{ color:"#F5F5F5",border:`1px solid ${theme.palette.secondary.main}`, padding:"20px","&:hover": { color:theme.palette.secondary.main}}}>
                                            {item.icon}
                                        </IconButton>
                                        <IconButton onClick={()=>navigate(`${item.id}`)}>
                                            <ArrowForward sx={{ color:"#F5F5F5","&:hover": { color:theme.palette.secondary.main}}} />
                                        </IconButton>
                                    </Box>
                                    <Typography variant='body2' color="white" fontWeight="700">{item.title}</Typography>
                                    <Typography variant='caption' color="#F5F5F5">{item.para}</Typography>
                                </Box>
                            </Grid>
                        )
                    })
                }
                </Grid>
                <LeafDivider dark={true} />
            </Box>
        </Box>
    </>
  )
}

export default Quote