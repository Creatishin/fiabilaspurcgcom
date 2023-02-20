import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import taskDone from '../../Assets/Icons/taskDone.png'
import { theme } from "../../App";
import chooseOkoders from "../../Interfaces/ChooseOkoders";

function Accordion ({DATA} : {DATA : chooseOkoders[]}) {

  const [expanded, setExpanded] = useState<false | number>(0);
  
  const AccordionItem = ({accordionId, data} : {accordionId : number, data : chooseOkoders}) => {

    const isOpen = accordionId === expanded;

    return(
      <>
        <Box
          onClick={() => setExpanded(isOpen ? false : accordionId)}
          style={{backgroundColor: theme.palette.primary.main, cursor:"pointer", padding:"10px 30px", borderRadius:"18px", display:"flex", alignItems:"center", justifyContent:"space-between"}}
        >
          <Typography variant='subtitle2' color="white">{data.title}</Typography>
          <IconButton>
            {isOpen ? <ExpandLess style={{color:"white"}}/> : <ExpandMore style={{color:"white"}}/>}
          </IconButton>
        </Box>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height : 0 }}
            animate={{ opacity: 1, height : "auto" }}
            exit={{ opacity: 0, height : 0 }}>
            <Box style={{padding:"10px 30px"}}>
              <Typography color="primary" variant='body2'>{data.para}</Typography>
              <Typography color="primary" fontWeight="700" style={{padding:"15px 0px"}} variant='body2'>What this means:</Typography>
              {
                data.means.map((item, key) => {
                  return(
                    <Box key={key} style={{display:"flex", alignItems:"center", gap:"15px", marginBottom:"15px"}}>
                      <img src={taskDone} alt="taskDone" width="30px"/>
                      <Typography color="primary" variant='body2'>{item}</Typography>
                    </Box>
                  )
                })
              }
            </Box>
          </motion.div>
        )}
      </>
    )
  }

  return(
    <>
      {
        DATA.map((item, key) => {
          return(
            <AccordionItem key={key} accordionId={key} data={item}/>
          )
        })
      }
    </>
  )
}

export default Accordion;