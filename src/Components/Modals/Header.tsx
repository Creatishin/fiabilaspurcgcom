import { Box, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import { openings } from '../../Data/Openings'
import openingNavigation from '../../Assets/Icons/openingNavigation.png'
import exploreMoreNavigation from '../../Assets/Icons/exploreMoreNavigation.png'
import './Modals.css'
import { companyDetail } from '../../config'
import { useNavigate } from 'react-router-dom'

function Header({ theme }: { theme: any }) {

  const style = {
    mainContainer : {
      zIndex: 3100,
      backgroundColor : theme.backgroundColor.header,
      padding : "7px 10px",
      justifyContent : "center",
      position : "sticky",
      top:"0px"
    } as React.CSSProperties,
    container: {
      width: "100%",
      maxWidth: "1300px",
      padding: "0px 10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    } as React.CSSProperties,
    containerItem: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "30px"
    } as React.CSSProperties,
    openingsContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "3px"
    } as React.CSSProperties,
    openingsNavigation: {
      height: '20px',
      width: '20px',
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: "5px",
      marginLeft: "7px"
    } as React.CSSProperties,
    openingsImage: {
      transform: "rotate(180deg)"
    } as React.CSSProperties,
    exploreMoreText: {
      cursor: "pointer"
    } as React.CSSProperties,
    exploreMoreNavigation: {
      padding: '4px'
    } as React.CSSProperties
  }


  const [openingIndex, setOpeningIndex] = useState<number>(0)

  const increaseOpening = () => {
    openingIndex === openings.length - 1 ?
      setOpeningIndex(0) :
      setOpeningIndex(prevIndex => prevIndex + 1)
  }

  const decreaseOpening = () => {
    openingIndex === 0 ?
      setOpeningIndex(openings.length - 1) :
      setOpeningIndex(prevIndex => prevIndex - 1)
  }

  const Navigate = useNavigate()

  return (
    <Box style={style.mainContainer} sx={{display:{xs:"none", sm:"none", md:"flex"}}}>
      <Box style={style.container}>
        <Box style={style.containerItem}>
          <Typography style={{cursor:"pointer"}} onClick={()=>window.location.href = 'tel://' + companyDetail.contact} variant='h5' color="primary"><span style={{ fontWeight: "700" }}>Call Us: </span>{companyDetail.contact}</Typography>
          <Typography style={{cursor:"pointer"}} onClick={()=>window.location.href = 'mailto: ' + companyDetail.email} variant='h5' color="primary"><span style={{ fontWeight: "700" }}>Email Us: </span>{companyDetail.email}</Typography>
        </Box>
        <Box style={style.containerItem} >
          <Box style={style.openingsContainer}>
            <Typography variant='h5' fontWeight="700" color="primary">Recent Openings: </Typography>
            <Typography style={{cursor:"pointer"}} onClick={()=>Navigate(`/career/${openingIndex}`)} variant='h5' color="primary">{`${openings[openingIndex].position}, ${openings[openingIndex].location}`}</Typography>
            <IconButton onClick={decreaseOpening} style={style.openingsNavigation} color='primary'>
              <img src={openingNavigation} alt='Opening Navigation' width="5px" />
            </IconButton>
            <IconButton onClick={increaseOpening} style={style.openingsNavigation} color='primary'>
              <img src={openingNavigation} style={style.openingsImage} alt='Opening Navigation' width="5px" />
            </IconButton>
          </Box>
          <Box onClick={()=>Navigate('/career')} className='headerExploreMore' style={style.openingsContainer} sx={{position:"relative"}}>
            <Typography style={style.exploreMoreText} variant='h5' fontWeight="600" color="secondary">Explore More</Typography>
            <IconButton className='headerExploreMoreArrow' disableTouchRipple disableRipple style={style.exploreMoreNavigation} sx={{position:"absoulte"}} color='primary'>
              <img  src={exploreMoreNavigation} alt='Explore More Navigation' width="7px" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  )



}

export default Header