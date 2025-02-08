import { Box, Button, Container, Typography } from "@mui/material";

export default function Intro() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { md: "row", sm: "column", xs: "column" },
        }}
      >
        <Box
          sx={{
            flex: 2,
            alignContent: "center",
            minWidth: "300px",
          }}
        >
          <Typography variant="h2">Pets and stuff!</Typography>
          <Typography sx={{ mt: 1, mb: 2, fontSize: "1.1rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            lobortis aliquam consectetur. Nulla in blandit mi. Vestibulum vitae
            ex felis. Nullam suscipit mi sed nibh imperdiet, non dictum leo
            pellentesque. Aliquam dignissim est eget metus tempor, vel.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            <Typography sx={{ fontWeight: "bold", mt: 1, mb: 1, ml: 2, mr: 2 }}>
              Pricing
            </Typography>
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            sx={{ ml: 2 }}
          >
            <Typography sx={{ fontWeight: "bold", mt: 1, mb: 1, ml: 2, mr: 2 }}>
              Request a demo
            </Typography>
          </Button>
        </Box>
        <Box sx={{ flex: 3, minWidth: "300px" }}>
          <img
            src="../../public/cat-and-dog.svg"
            width="100%"
            alt="Italian Trulli"
          ></img>
        </Box>
      </Box>
    </Container>
  );
}
