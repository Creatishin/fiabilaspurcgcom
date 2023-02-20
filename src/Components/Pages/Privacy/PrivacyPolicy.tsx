import React from 'react'
import { Box, Typography, Toolbar } from "@mui/material"


function PrivacyPolicy({ theme }: { theme: any }) {
  return (
    <>
      <Toolbar />
      <Box p={5} textAlign="center"  >
        <Typography
          textAlign="center"
          variant="h2"
          color="primary" >
          <span style={{ fontWeight: 700, }}  >
            Privacy Policy
          </span>
        </Typography>
      </Box>
      <Box p={5} >
        <Typography>
          Your privacy is important to us and so is being transparent about how we collect, use, and share information about you. This policy is intended to help you understand:
        </Typography>
        <ul>
          <li>
            <Typography>
              What information we collect about you

            </Typography>
          </li>
          <li>
            <Typography>
              How we use information we collect


            </Typography>
          </li>
          <li>
            <Typography>
              How we store and secure information we collect
            </Typography>
          </li>
          <li>
            <Typography>
              How to access and control your information
            </Typography>

          </li>
          <li>
            <Typography>
              How we transfer information we collect internationally

            </Typography>
          </li>
          <li>
            <Typography>
              Other important privacy information


            </Typography>
          </li>
        </ul>
      </Box>
    </>
  )
}

export default PrivacyPolicy