import React from 'react'
import { Box, Grid, Paper, Card, Typography, Divider, TextField, Button } from "@mui/material"
import PeopleWorkingOffice from "../../Assets/about/diverse-people-working-office.svg"
import rajeev from "../../Assets/about/Rajeev.svg"
import Group from "../../../Assets/about/Group.svg"
import anil from "../../Assets/about/Anil.svg"
import Checkbox from '@mui/material/Checkbox';

function QueryForm() {
    return (
        <Box alignItems="center"  >
            <Box p={5} style={{ display: "flex", justifyContent: "center" }}  >
                <Box p={3} display="flex" textAlign="center" alignItems="center" style={{ background: "#092532", color: "#fff", borderRadius: "38px", position: "relative", minHeight: "150px", maxWidth: "1080px", width: "75vw" }} >
                    <Box style={{ width: "200px", height: "200px", position: "absolute", top: -80 }} >
                        <img src={Group} />
                    </Box>
                    <Box flexGrow={.8} />
                    <Box textAlign="right"  >
                        <Typography variant='h4'  >Have any Project ? <br />
                            Lets Connect with US.</Typography>
                    </Box>
                </Box>

            </Box>
            <Box pb={5}  >

                <Box pl={10} pr={10} style={{ display: "flex", justifyContent: "center" }}  >
                    <Box style={{ background: "#E9E9E9", borderRadius: "24px", maxWidth: "80vw", width: "60vw" }} >
                        <Grid container>
                            <Grid item xs={12} sm={6} >

                                <Box textAlign="center" style={{ display: "flex", justifyContent: "center", alignItems: "center", background: "#092532", borderTopLeftRadius: "24px", borderBottomLeftRadius: "24px", height: "100%", color: "#fff" }}>
                                    <Typography variant="h6" >
                                        Enquiry for Project
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} >
                                <Box p={3} textAlign="center" >
                                    <Typography variant='h6' >
                                        Enquiry for Outsourcing
                                    </Typography>
                                </Box>

                            </Grid>
                        </Grid>
                    </Box>
                </Box>

                <Box mt={3} textAlign="center" >
                    <Typography variant='h3' >
                        Enter your Detail here
                    </Typography>
                    <Box mt={1} />
                    <Typography style={{ color: "red" }} >
                        The field is required as mark as*
                    </Typography>
                </Box>

            </Box>

            <Box p={10} style={{ display: "flex", justifyContent: "center", background: 'linear - gradient(180.02deg, rgba(130, 130, 130, 0) 11.99 %, rgba(216, 217, 227, 0.34) 99.98 %)' }}  >
                <Grid container spacing={3} >
                    <Grid item xs={12} sm={6} >
                        <TextField fullWidth name="fullName" placeholder='FullName' required />
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <TextField fullWidth name="emailId" placeholder='Email Id' required />

                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <TextField fullWidth name="Phone Number (optional)" placeholder='Phone Number (optional)' />
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <TextField fullWidth name="Phone Number (optional)" placeholder='Phone Number (optional)' />

                    </Grid>
                    <Grid item xs={12} >
                        <TextField fullWidth name="help" placeholder='How can we help you?' />

                    </Grid>
                    <Grid item xs={12} >
                        <TextField fullWidth multiline minRows={5} name="description" placeholder='Describe in details.....' />

                    </Grid>
                    <Grid item xs={12} >
                        <Box>
                            <Box style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                                <Checkbox />
                                <Typography>
                                    By submitting, I’m agree to the <span style={{ color: "#21ABA5" }} >Terms and Conditions</span>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} >
                        <Box textAlign="center" >
                            <Button variant='contained' >
                                Send Message
                            </Button>
                        </Box>

                    </Grid>

                </Grid>

            </Box>


        </Box>
    )
}

export default QueryForm