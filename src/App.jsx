import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Education from "./pages/Education";
import Home from "./pages/Home";
import WorkingExperience from "./pages/WorkingExperience";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Education" element={<Education />} />
        <Route path="Experience" element={<WorkingExperience />} />
      </Routes>
    </Layout>
  );
}

export default App;
