import { Box, Container, Typography } from "@mui/material";
import TeamMember from "../components/teamMember";

const gapSize = "2em";

export default function Team() {
  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
        Meet our team!
      </Typography>
      <Typography sx={{ mb: 2 }}>
        Our team met that one time where we were all in the same room. Non
        dictum leo pellentesque. Aliquam dignissim est eget metus tempor, vel
        ornare libero pellentesque.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: gapSize,
            maxWidth: "60em",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: gapSize,
              maxWidth: "60em",
            }}
          >
            <TeamMember
              name="Kayla Hanaike"
              img="../../kayla.png"
              title="Da Boss"
              linkedIn="kayla-amerson-2315772b8"
            ></TeamMember>
            <TeamMember
              name="Caleb Barton"
              img="../../caleb.png"
              title="Some Title"
              linkedIn="calebbarton0"
            ></TeamMember>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: gapSize,
              maxWidth: "60em",
            }}
          >
            <TeamMember
              name="Thomas Royer"
              img="../../thomas.png"
              title="Some Title"
              linkedIn="thomas-royer-a79b31204"
            ></TeamMember>
            <TeamMember
              name="Alaina Denney"
              img="../../alaina.png"
              title="Coder Extrodinaire"
              linkedIn="alaina-denney-765aa120b"
            ></TeamMember>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
