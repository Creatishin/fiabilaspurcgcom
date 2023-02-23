import { Box, Grid, IconButton, List, ListItem, Toolbar, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import services from '../../../Data/Services'
import { Services } from '../../../Interfaces/Services'
import header from '../../../Assets/About/header.png'
import Statics from '../../Modals/Statics'
import { Circle } from '@mui/icons-material'
import Enquiry from '../../Modals/Enquiry'
import Testimonial from '../../Modals/Testimonial'
import { testimonials } from '../../../Data/Testimonials'

function Service({theme}:{theme:any}) {

    const {id} = useParams()
    const [service, setService] = useState<Services>(services[0])
    const navigate = useNavigate()

    useEffect(()=>{
        if (id){
            if(parseInt(id) > 9){
                navigate("/services")
            }else{
                setService(services.filter(item => item.id === id)[0])
            }
        }
    },[id, navigate])
    
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
                    <Box style={style.headerContainer} sx={{padding:"50px 0px", positin:"relative"}}>
                        <Box sx={{zIndex:3}} style={{width:"4px", height:"80px", borderRadius:"1px", backgroundColor:theme.palette.secondary.main}}/>
                        <Box sx={{zIndex:3}} style={{display:"flex", justifyContent:"center", alignItems:'center', gap:"20px"}}>
                            <IconButton sx={{ color:theme.palette.secondary.main,border:`1px solid ${theme.palette.secondary.main}`, padding:"20px"}}>
                                {service.icon}
                            </IconButton>
                            <Typography textAlign="center"  variant="h1" color="white" fontWeight="700">Service</Typography>
                        </Box>
                        <Typography textAlign="center" sx={{zIndex:3}} variant="body1" color="rgba(255,255,255,0.5)" fontWeight="700">{service.title}</Typography>
                        <Typography position="absolute" sx={{fontSize:{xs:"20vw", sm:"18vw", md:"15vw"}}} textAlign="center" variant="h1" zIndex={1} color="#171b25" fontWeight="700">SERVICE</Typography>
                    </Box>
                </Box>
                <img src={header} alt={"Header"} style={{position:"absolute", bottom:"0", left:"0", zIndex:2}} />
            </Box>
            <Box style={style.mainContainer}>
                <Box style={style.container}>
                    <Grid container rowSpacing={5}>
                        <Grid style={{display:"flex", justifyContent:"center", flexDirection:"column", gap:"30px"}} item xs={12} sm={6}>
                            <Typography variant="h2" fontWeight="500">
                                <span style={{color:theme.palette.secondary.main}}>{service.title}</span>
                            </Typography>
                            <Typography variant="body2" fontWeight="500" color={theme.textColor.para}>
                                {service.para}
                            </Typography>
                            <Typography variant='caption' color={theme.textColor.para} width="100%" >
                                {service.discription}
                            </Typography>
                        </Grid>
                        <Grid textAlign="center" item xs={12} sm={6}>
                            <img width="80%" src={service.vector} alt="HomeSection2"></img> 
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Statics theme={theme} />
            <Box style={style.mainContainer}>
                <Box style={style.container}>
                    <Grid container rowSpacing={5}>
                        <Grid textAlign="center" item xs={12} sm={6}>
                            <img style={{borderRadius:"15px", boxShadow:"0px 10px 20px rgba(0,0,0,.2)"}} width="90%" src={service.image} alt="HomeSection2"></img> 
                        </Grid>
                        <Grid style={{display:"flex", justifyContent:"center", flexDirection:"column", gap:"30px"}} item xs={12} sm={6}>
                            <Typography variant="body1" fontWeight="700">
                                <span style={{color:theme.palette.primary.main}}>Services that we provide in <span style={{color:theme.palette.secondary.main}}>{service.title}</span> cases are:</span>
                            </Typography>
                            <List sx={{ width: '90%'}}>
                            {
                                service.points?.map((item, index) => {
                                    return(
                                            <ListItem key={index} style={{padding:"2px 0px", alignItems:"start"}}>
                                                <Circle style={{marginTop:"5px", color:theme.palette.secondary.main, fontSize:"15px", marginRight:"15px"}}/>
                                                <Typography mb={1} variant="body2" fontWeight="500" color={theme.textColor.para}>
                                                    {item}
                                                </Typography>
                                            </ListItem>
                                    )
                                })
                            }
                            </List>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box style={style.mainContainer}>
                <Box style={style.container} sx={{position:"relative", flexDirection:"column"}}>
                    <Testimonial testimonials={testimonials}/>
                </Box>
            </Box>
            <Enquiry theme={theme} dark={true} id={service.id}/>
        </>
  )
}

export default Service