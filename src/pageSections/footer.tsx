import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        py: 3,
        backgroundColor: "secondary.main",
        borderTop: "1px solid",
        borderColor: "divider",
        textAlign: "center",
        mt: 5,
      }}
    >
      <Typography variant="body2" color="secondary.contrastText">
        © {new Date().getFullYear()} Furelic. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
