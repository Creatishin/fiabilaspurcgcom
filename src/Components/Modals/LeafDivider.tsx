import React from 'react'
import frame2 from '../../Assets/Home/Frame-11.png'
import { Divider } from '@mui/material'

function LeafDivider({dark}:{dark?:boolean}) {
  return (
    <>
        <img alt="leaf" src={frame2} width="300px" style={{position:"absolute", bottom:"0", right:"0", zIndex:3}} />
        <Divider style={{marginTop:"100px", width:"90%", border:`1px solid ${dark ? "rgba(255,255,255,.2)" : "rgba(0,0,0,.2)"}`}} ></Divider>
    </>
  )
}

export default LeafDivider