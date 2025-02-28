import { Box } from '@mui/material'
import React from 'react'
import { motion } from "framer-motion";
import loader from '../../Assets/Icons/FIALOGO.png'

function SuspenseLoading({theme} : {theme:any}) {

    const style = {
        container : {
            width:"100%",
            height:"100vh",
            display : "flex",
            alignItems : "center",
            justifyContent : "center",
            flexDirection : "column",
        } as React.CSSProperties,
        circle : {
            width : "100px",
            height : "100px",
            borderRadius : "50%",
            border : "15px solid #143c46",
            position : "relative",
            display : "flex",
            justifyContent : "center",
            alignItems : "center"
        } as React.CSSProperties,
        box : {
            width : "80px",
            height : "30px",
            borderLeft : "15px solid #17cc97",
            borderBottom : "15px solid #17cc97",
            position : "absolute",
            transform : "rotate(-45deg)",
            top : "-5px",
            left : "19px"
        } as React.CSSProperties,
        dot : {
            width:"1px",
            height : "1px",
            backgroundColor : "red"
        }
    };
    
  return (
    <Box style={style.container} sx={{backgroundColor:theme.palette.primary.main}}>
        <motion.div
            initial={{ opacity: 0, x : 200 }}
            animate={{ opacity: 1, x :0 }}
            exit={{ opacity: 0, x : -200 }}
            style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:'center'}}
        >
            <img src={loader} alt="loader" width="300px" />
        </motion.div>
    </Box>
  )
}

export default SuspenseLoading