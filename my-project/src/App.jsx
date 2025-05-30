import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DetailPage from "./pages/DetailPage";
import About from "./pages/About";
import Achievement from "./pages/Achievement";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/achievement" element={<Achievement />} />
      </Routes>
    </>
  );
}

export default App;
