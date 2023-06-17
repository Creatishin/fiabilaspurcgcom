import { ArrowForwardIos } from '@mui/icons-material';
import { Grid, Typography, Box, IconButton } from '@mui/material';
import { motion } from "framer-motion";
import { useState } from 'react';
import testinomial from '../../Assets/Home/testinomial.png'
import Testimonials from '../../Interfaces/Testimonials';

function Testimonial({testimonials, heading}:{testimonials:Testimonials[], heading?:string}) {

    const style={
        testimonial: {
            display: "flex",
            gap: "05px",
            flexDirection: "column",
            justifyContent: "center",
            paddingBottom: "20px",
        } as React.CSSProperties,
            testimonialNavigation: {
            display: "flex",
            gap: "15px",
            alignItems: "center",
            flexWrap: "wrap",
        } as React.CSSProperties,
            testimonialButton: {
            zIndex: "1",
            backgroundColor: "#092532 !important",
            width: "30px",
            borderRadius: "8px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0px",
        } as React.CSSProperties,
    }

  const [testimonialIndex, setTestimonialIndex] = useState<number>(0);

  return (
    <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
        <img src={testinomial} alt="Team" width="90%" />
        </Grid>
        <Grid style={style.testimonial} item xs={12} sm={6} md={6}>
        <Typography variant="subtitle2" fontWeight="500" color="primary">
            {heading ?? "Testimonials"}
        </Typography>
        {testimonials.map((item, index) => {
            return (
            index === testimonialIndex && (
                <motion.div key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                >
                <Box
                    style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    margin: "40px 0px",
                    }}
                >
                    <Typography
                    variant="h4"
                    color="primary"
                    fontWeight="700"
                    >
                    {item.title}
                    </Typography>
                    <Typography
                    variant="body1"
                    color="primary"
                    fontWeight="400"
                    >
                    {item.para}
                    </Typography>
                </Box>
                <Typography
                    variant="body2"
                    color="primary"
                    fontWeight="700"
                >
                    {item.name}
                </Typography>
                <Typography
                    variant="body2"
                    color="primary"
                    fontWeight="400"
                >
                    {item.position}, {item.company}
                </Typography>
                </motion.div>
            )
            );
        })}
        <Box style={style.testimonialNavigation}>
            <IconButton
            onClick={() =>
                setTestimonialIndex((prev) =>
                prev === 0 ? testimonials.length - 1 : prev - 1
                )
            }
            sx={{
                ...style.testimonialButton,
                transform: "rotate(180deg)",
            }}
            className="custom-right-arrow"
            >
            <ArrowForwardIos sx={{ color: "white", fontSize: "15px" }} />
            </IconButton>
            <IconButton
            onClick={() =>
                setTestimonialIndex((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1
                )
            }
            sx={{ ...style.testimonialButton }}
            className="custom-right-arrow"
            >
            <ArrowForwardIos sx={{ color: "white", fontSize: "15px" }} />
            </IconButton>
        </Box>
        </Grid>
    </Grid>
  )
}

export default Testimonial