import { Button } from "@mui/material";

export const Btn = ({ children, ...rest }) => (
  <Button
    {...rest}
    // sx={{
    //   bgcolor: "rgba(255, 255, 255, 0.2)",
    //   backdropFilter: "blur(10px)",
    //   color: "black",
    // }}
  >
    {children}
  </Button>
);
