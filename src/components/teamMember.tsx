import { Box, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function TeamMember(props: {
  name: string;
  title: string;
  img: string;
  linkedIn: string;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
        minWidth: "160px",
      }}
    >
      <img src={props.img} width="100%"></img>
      <Box
        sx={{
          width: "100%",
          textAlign: "left",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <Typography
            sx={{
              mt: 1,
              fontSize: "1.1rem",
              fontWeight: "bold",
              color: "text.primary",
            }}
          >
            {" "}
            {props.name}
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              fontStyle: "italic",
            }}
          >
            {" "}
            {props.title}
          </Typography>
        </Box>
        <a
          href={"https://www.linkedin.com/in/" + props.linkedIn} // Replace with the actual LinkedIn URL
          target="_blank" // Open link in a new tab
          rel="noopener noreferrer" // Security best practice for target="_blank"
          style={{ marginTop: "1em", textDecoration: "none" }} // Add spacing and remove underline
        >
          <LinkedInIcon
            color="primary"
            sx={{
              fontSize: "2rem",
              "&:hover": {
                color: "primary.dark",
              },
            }}
          />
        </a>
      </Box>
    </Box>
  );
}
