import { Box } from "@mui/material";
import NavBar from "../components/navBar";
import Content from "../pageSections/content";
import Footer from "../pageSections/footer";

function MainPage() {
  return (
    <>
      <NavBar />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Content />
        <Footer></Footer>
      </Box>
    </>
  );
}

export default MainPage;
