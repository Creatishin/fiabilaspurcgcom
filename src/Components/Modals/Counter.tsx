import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import {
  animate,
  AnimationPlaybackControls,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";

function Counter({ theme, textColor }: { theme: any; textColor?: string }) {
  const style = {
    wrapper: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      alignItems: "center",
      flexWrap: "wrap",
    } as React.CSSProperties,
    employeeNumber: {
      display: "flex",
      padding: "10px",
      alignItems: "center",
      gap: "20px",
      flexGrow: 1,
    } as React.CSSProperties,
    projectNumber: {
      display: "flex",
      padding: "10px",
      alignItems: "center",
      gap: "20px",
      flexGrow: 1,
    } as React.CSSProperties,
    clientNumber: {
      display: "flex",
      padding: "10px",
      alignItems: "center",
      gap: "20px",
      flexGrow: 1,
    } as React.CSSProperties,
    numberText: {
      fontWeight: "700",
      backgroundImage: `linear-gradient(90deg, ${theme.textColor.grad1}, ${theme.textColor.grad2})`,
      backgroundSize: "100%",
    } as React.CSSProperties,
    numberDivider: {
      height: "90px",
      width: "1px",
      margin: "0px 5px",
      backgroundColor: "#C9C9C9",
    } as React.CSSProperties,
  };
  const empcount = useMotionValue(0);
  const prjcount = useMotionValue(0);
  const clicount = useMotionValue(0);
  const employee = useTransform(empcount, (latest) => Math.round(latest));
  const project = useTransform(prjcount, (latest) => Math.round(latest));
  const client = useTransform(clicount, (latest) => Math.round(latest));
  let empcontrols: AnimationPlaybackControls;
  let prjcontrols: AnimationPlaybackControls;
  let clicontrols: AnimationPlaybackControls;

  useEffect(() => {
    return empcontrols?.stop, prjcontrols?.stop, clicontrols?.stop;
  });

  return (
    <Box style={style.wrapper}>
      <Box
        sx={{
          justifyContent: { xs: "flex-start", sm: "flex-start", md: "center" },
        }}
        style={style.employeeNumber}
      >
        <Typography
          className="numberText"
          variant="h1"
          style={style.numberText}
        >
          <motion.div
            onViewportEnter={() => {
              empcontrols = animate(empcount, 50);
            }}
            style={{ display: "inline" }}
          >
            {employee}
          </motion.div>
          +
        </Typography>
        <Typography
          color={textColor ? textColor : "primary"}
          style={{ maxWidth: "180px" }}
          variant="body1"
        >
          Employees in Team
        </Typography>
      </Box>
      <Divider
        sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        style={style.numberDivider}
        orientation="vertical"
      ></Divider>
      <Box
        sx={{
          justifyContent: { xs: "flex-start", sm: "flex-start", md: "center" },
        }}
        style={style.projectNumber}
      >
        <Typography
          className="numberText"
          variant="h1"
          style={style.numberText}
        >
          <motion.div
            onViewportEnter={() => {
              prjcontrols = animate(prjcount, 10);
            }}
            style={{ display: "inline" }}
          >
            {project}
          </motion.div>
          +
        </Typography>
        <Typography
          color={textColor ? textColor : "primary"}
          style={{ width: "min-content" }}
          variant="body1"
        >
          Project Completed
        </Typography>
      </Box>
      <Divider
        sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        style={style.numberDivider}
        orientation="vertical"
      ></Divider>
      <Box
        sx={{
          justifyContent: { xs: "flex-start", sm: "flex-start", md: "center" },
        }}
        style={style.clientNumber}
      >
        <Typography
          className="numberText"
          variant="h1"
          style={style.numberText}
        >
          <motion.div
            onViewportEnter={() => {
              clicontrols = animate(clicount, 30);
            }}
            style={{ display: "inline" }}
          >
            {client}
          </motion.div>
          +
        </Typography>
        <Typography
          color={textColor ? textColor : "primary"}
          style={{ maxWidth: "180px" }}
          variant="body1"
        >
          Satisfied Clients around the world
        </Typography>
      </Box>
    </Box>
  );
}

export default Counter;
