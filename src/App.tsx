import "./App.css";
import { Box } from "@mui/material"; // Example of using the Grid system
import NavBar from "./components/navBar";
import Content from "./pageSections/content";
import Footer from "./pageSections/footer";

function App() {
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

export default App;
