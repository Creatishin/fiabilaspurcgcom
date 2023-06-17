import React from 'react'
import { Box, Typography } from "@mui/material";
import { Person } from "../../Interfaces/Person";


export default function Team({member}:{member : Person[]}){

    const style = {
        container: {
            padding: "40px 10px",
            width: "100%",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        } as React.CSSProperties,
        wrapper: {
            padding: "10px",
            maxWidth: "1300px",
            width: "100%",
            gap: "30px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            boxSizing: "border-box",
            justifyContent: "space-between",
        } as React.CSSProperties,
        memberContainer: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "20px",
            overflowX: "scroll",
        } as React.CSSProperties,
        memberItem: {
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginBottom: "20px",
        } as React.CSSProperties,
        memberImage: {
            backgroundSize: "cover",
            backgroundPositionX: "center",
            backgroundRepeat: "no-repeat",
            mixBlendMode: "luminosity",
        } as React.CSSProperties,
    }

    return(
        <>
        <Box
            style={style.container}
            sx={{ backgroundColor: '#161823' }}
        >
            <Box style={style.wrapper}>
            <Typography
                padding="40px 0px"
                variant="h2"
                maxWidth="550px"
                color="white"
            >
                Know Key <span style={{ fontWeight: "700" }}>Member</span> of Our
                Team
            </Typography>
            </Box>
        </Box>
        <Box
            style={style.container}
            sx={{ backgroundColor: "#0F303F", paddingRight: "0px !important" }}
        >
            <Box style={style.wrapper} sx={{ paddingRight: "0px !important" }}>
            <Box style={style.memberContainer}>
                {member.map((item, index) => {
                    return (
                        <Box key={item.name} style={style.memberItem}>
                        <Box
                            sx={{
                            width: { xs: "300px", sm: "350px", md: "400px" },
                            height: "350px",
                            backgroundImage: `url(${item.image})`,
                            }}
                            style={style.memberImage}
                        ></Box>
                        <Box>
                            <Typography variant="subtitle1" color="white">
                            {item.name}
                            </Typography>
                        </Box>
                        </Box>
                    );
                })}
            </Box>
            </Box>
        </Box>
        </>
    )
}