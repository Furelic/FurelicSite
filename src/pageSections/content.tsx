import { Box, Divider } from "@mui/material";
import Intro from "./intro";
import Team from "./team";
import Pricing from "./pricing";
import Contact from "./contact";
import Process from "./process";

export default function Content() {
  return (
    <>
      <Box sx={{ height: "4.5em" }}></Box>
      <Intro></Intro>
      <Divider sx={{ mt: 6, mb: 6 }}></Divider>
      <Process></Process>
      <Divider sx={{ mt: 6, mb: 6 }}></Divider>
      <Pricing></Pricing>
      <Divider sx={{ mt: 6, mb: 6 }}></Divider>
      <Team></Team>
      <Divider sx={{ mt: 6, mb: 6 }}></Divider>
      <Contact></Contact>
    </>
  );
}
