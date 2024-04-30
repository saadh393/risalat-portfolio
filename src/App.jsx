import { AnimatePresence } from "framer-motion";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./Layout";
import ApplicationRoutes from "./Routes";
import Basis from "./pages/Basis";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <AnimatePresence>
                <ApplicationRoutes />
              </AnimatePresence>
            </Layout>
          }
        />

        <Route path="/basis" element={<Basis />} />
      </Routes>
    </Router>
  );
}

// navigator.serviceWorker.register("../service-worker.js");

export default App;
