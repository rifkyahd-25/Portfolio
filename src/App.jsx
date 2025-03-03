import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Contect } from "./pages/Contect";
import { Education } from "./pages/Education";
import { Experience } from "./pages/Experience";
import { Home } from "./pages/Home";
import { Project } from "./pages/Project";
import { NavBar } from "./components/NavBar";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="education" element={<Education />} />
        <Route path="experience" element={<Experience />} />
        <Route path="project" element={<Project />} />
        <Route path="contect" element={<Contect />} />
      </Routes>
      </Router>
  )
}
