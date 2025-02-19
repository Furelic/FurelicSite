import { Box, Container, Typography } from "@mui/material";
import TeamMember from "../components/teamMember";

const gapSize = "2em";

export default function Team() {
  return (
    <Box sx={{ backgroundColor: "#EEE8", py: 8 }}>
      <Container>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
          Meet our team!
        </Typography>
        <Typography sx={{ mb: 2 }}>
          We’re a passionate team of co-founders dedicated to simplifying pet
          management for property managers
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
                title="CEO"
                linkedIn="kayla-amerson-2315772b8"
              ></TeamMember>
              <TeamMember
                name="Caleb Barton"
                img="../../caleb.png"
                title="Software Engineer"
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
                title="Software Engineer"
                linkedIn="thomas-royer-a79b31204"
              ></TeamMember>
              <TeamMember
                name="Alaina Denney"
                img="../../alaina.png"
                title="Software Engineer"
                linkedIn="alaina-denney-765aa120b"
              ></TeamMember>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
