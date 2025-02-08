import { Box } from "@mui/material";
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
      <Process></Process>
      <Pricing></Pricing>
      <Team></Team>
      <Contact></Contact>
    </>
  );
}
