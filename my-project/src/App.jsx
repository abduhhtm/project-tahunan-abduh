import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DetailPage from "./pages/DetailPage";
import About from "./pages/About";
import Achievement from "./pages/Achievement";
import Header from "./components/Header";

function App() {
  return (
    <Routes>
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="/About/" element={<About />} />
      <Route path="/Achievement/" element={<Achievement />} />
      <Route path="/Header/" element={<Header />} />
    </Routes>
  );
}

export default App;