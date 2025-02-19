import { Box, Button, Container, Typography } from "@mui/material";

//https://www.freepik.com/free-vector/cat-dog-concept-illustration_23985676.htm#fromView=search&page=1&position=0&uuid=c342fdb8-53d1-4fad-b063-6dcf1abaa2b4&query=pet
function PetImage() {
  return (
    <Box
      sx={{
        flex: 3,
        minWidth: "300px",
        maxWidth: "70vw",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <img src="../../cat-and-dog.svg" width="100%" alt="A cat and a dog"></img>
    </Box>
  );
}

function InfoDump() {
  return (
    <Box
      sx={{
        flex: 2,
        alignContent: "center",
        minWidth: { xs: "100%", sm: "400px" },
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Pet management, simplified.
      </Typography>
      <Typography sx={{ mt: 2, mb: 3 }}>
        Fetching pet records got you chasing your tail? Furelic automates pet
        management for multifamily housing—saving time, reducing stress, and
        boosting revenue. Let us take the leash on paperwork so you can focus on
        what matters most.
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Button
          href="#pricing"
          variant="contained"
          color="primary"
          size="large"
        >
          <Typography sx={{ fontWeight: "bold", mt: 1, mb: 1, ml: 2, mr: 2 }}>
            Pricing
          </Typography>
        </Button>
        <Button href="#contact" variant="outlined" color="primary" size="large">
          <Typography sx={{ fontWeight: "bold", mt: 1, mb: 1, ml: 2, mr: 2 }}>
            Request a demo
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}

export default function Intro() {
  return (
    <Container id="about" sx={{ scrollMarginTop: "64px", py: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap-reverse",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <InfoDump></InfoDump>
        <PetImage></PetImage>
      </Box>
    </Container>
  );
}
