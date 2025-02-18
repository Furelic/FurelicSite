import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/mainPage";
import LoginPage from "./pages/loginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
