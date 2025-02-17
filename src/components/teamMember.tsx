import { Box, Card, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function TeamMember(props: {
  name: string;
  title: string;
  img: string;
  linkedIn: string;
}) {
  return (
    <Box>
      <Card
        variant="outlined"
        sx={{
          pt: 1.5,
          pl: 1.5,
          pr: 1.5,
          pb: 1.5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flex: 1,
          minWidth: "160px",
        }}
      >
        {" "}
        <a
          href={"https://www.linkedin.com/in/" + props.linkedIn} // Replace with the actual LinkedIn URL
          target="_blank" // Open link in a new tab
          rel="noopener noreferrer" // Security best practice for target="_blank"
          style={{ textDecoration: "none" }} // Add spacing and remove underline
        >
          <Box
            sx={{
              maxWidth: "185px",
              maxHeight: "185px",
              position: "relative",
              display: "inline-block",
              overflow: "hidden",
            }}
          >
            {/* <Box
              component="img"
              src={props.img}
              width="100%"
              alt="Zoom on Hover"
              sx={{
                transition: "transform 0.3s ease, opacity 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  opacity: 0.8,
                },
              }}
            /> */}
            <Box
              component="img"
              src={props.img}
              alt="Zoom on Hover"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)", // Zooms in without changing container size
                  opacity: 0.95,
                },
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 8,
                right: 8,
                lineHeight: 0,
              }}
            >
              <LinkedInIcon
                sx={{
                  color: "#fff",
                  fontSize: "2rem",
                  filter: "drop-shadow(1px 1px 10px rgba(0, 0, 0, 1))",
                }}
              />
            </Box>
          </Box>
        </a>
        <Box
          sx={{
            width: "100%",
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            ml: 2,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <Box sx={{ display: "inline-block" }}>
              <Typography
                sx={{
                  mt: 1,
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  color: "text.primary",
                  borderBottom: 2,
                  borderBottomColor: "primary.light",
                  display: "inline-block",
                  mb: 0.5,
                }}
              >
                {props.name}
              </Typography>
            </Box>
            <Typography
              sx={{
                color: "text.secondary",
                fontStyle: "italic",
              }}
            >
              {props.title}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

// import { Box, Typography } from "@mui/material";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";

// export default function TeamMember(props: {
//   name: string;
//   title: string;
//   img: string;
//   linkedIn: string;
// }) {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         flex: 1,
//         minWidth: "160px",
//       }}
//     >
//       <img src={props.img} width="100%"></img>
//       <Box
//         sx={{
//           width: "100%",
//           textAlign: "left",
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
//           <Typography
//             sx={{
//               mt: 1,
//               fontSize: "1.1rem",
//               fontWeight: "bold",
//               color: "text.primary",
//             }}
//           >
//             {" "}
//             {props.name}
//           </Typography>
//           <Typography
//             sx={{
//               color: "text.secondary",
//               fontStyle: "italic",
//             }}
//           >
//             {" "}
//             {props.title}
//           </Typography>
//         </Box>
//         <a
//           href={"https://www.linkedin.com/in/" + props.linkedIn} // Replace with the actual LinkedIn URL
//           target="_blank" // Open link in a new tab
//           rel="noopener noreferrer" // Security best practice for target="_blank"
//           style={{ marginTop: "1em", textDecoration: "none" }} // Add spacing and remove underline
//         >
//           <LinkedInIcon
//             color="primary"
//             sx={{
//               fontSize: "2rem",
//               "&:hover": {
//                 color: "primary.dark",
//               },
//             }}
//           />
//         </a>
//       </Box>
//     </Box>
//   );
// }
