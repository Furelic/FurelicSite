import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/mainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
