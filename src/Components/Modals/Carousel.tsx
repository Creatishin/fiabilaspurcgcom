import "./Modals.css";
import { Box, IconButton } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

function ImageCarousel({ carouselItems }: { carouselItems: string[] }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const style = {
    arrowButtonContainer: {
      position: "absolute !important",
      zIndex: "1",
      backgroundColor: "#092532 !important",
      width: "30px",
      borderRadius: "8px",
      height: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0px",
    },
  };

  const RightArrow = ({ onClick, ...rest }: any) => {
    return (
      <IconButton
        sx={{ ...style.arrowButtonContainer, right: "0px" }}
        onClick={() => onClick()}
        className="custom-right-arrow"
      >
        <ArrowForwardIos sx={{ color: "white", fontSize: "15px" }} />
      </IconButton>
    );
  };
  const LeftArrow = ({ onClick, ...rest }: any) => {
    return (
      <IconButton
        sx={{ ...style.arrowButtonContainer, left: "0px" }}
        onClick={() => onClick()}
        className="custom-right-arrow"
      >
        <ArrowBackIos sx={{ color: "white", fontSize: "15px" }} />
      </IconButton>
    );
  };

  return (
    <Carousel
      customLeftArrow={<LeftArrow />}
      customRightArrow={<RightArrow />}
      containerClass="carouselContainer"
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
    >
      {carouselItems.map((item, key) => {
        return (
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            key={key}
          >
            <img alt="carosuel" width="50px" src={item} />
          </Box>
        );
      })}
    </Carousel>
  );
}

export default ImageCarousel;
