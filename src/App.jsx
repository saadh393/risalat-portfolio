import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Achievement from "./pages/Achievement";
import Education from "./pages/Education";
import GetInTouch from "./pages/GetInTouch";
import Home from "./pages/Home";
import Publications from "./pages/Publications";
import WorkingExperience from "./pages/WorkingExperience";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Education" element={<Education />} />
        <Route path="Experience" element={<WorkingExperience />} />
        <Route path="Achievement" element={<Achievement />} />
        <Route path="Publication" element={<Publications />} />
        <Route path="GetInTouch" element={<GetInTouch />} />
      </Routes>
    </Layout>
  );
}

export default App;
