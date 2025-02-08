import { Box, Container, Typography } from "@mui/material";
import TeamMember from "../components/teamMember";

const gapSize = "2em";

export default function Team() {
  return (
    <Container>
      <h1>Meet our team!</h1>
      <Typography sx={{ mb: 2 }}>
        Our team met that one time where we were all in the same room. Non
        dictum leo pellentesque. Aliquam dignissim est eget metus tempor, vel
        ornare libero pellentesque.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          // justifyContent: "space-between",
          flexWrap: "wrap",
          gap: gapSize,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flex: 1,
            flexWrap: "wrap",
            gap: gapSize,
          }}
        >
          <TeamMember
            name="Kayla Hanaike"
            img="../../public/kayla.png"
            title="Da Boss"
            linkedIn="kayla-amerson-2315772b8"
          ></TeamMember>
          <TeamMember
            name="Caleb Barton"
            img="../../public/caleb.png"
            title="Senior Designer"
            linkedIn="calebbarton0"
          ></TeamMember>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flex: 1,
            flexWrap: "wrap",
            gap: gapSize,
          }}
        >
          <TeamMember
            name="Thomas Royer"
            img="../../public/thomas.png"
            title="Handsome Italian"
            linkedIn="alaina-denney-765aa120b"
          ></TeamMember>
          <TeamMember
            name="Alaina Denney"
            img="../../public/alaina.png"
            title="Eye Candy"
            linkedIn="alaina-denney-765aa120b"
          ></TeamMember>
        </Box>
      </Box>
    </Container>
  );
}
