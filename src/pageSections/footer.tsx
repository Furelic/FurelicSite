import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        py: 3, // Vertical padding
        backgroundColor: "secondary.main", // Use the paper color from the theme
        borderTop: "1px solid",
        borderColor: "divider",
        textAlign: "center",
        mt: 5, // Add margin at the top
      }}
    >
      <Typography variant="body2" color="secondary.contrastText">
        © {new Date().getFullYear()} Furelic. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
