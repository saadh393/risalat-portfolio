import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout";
import ApplicationRoutes from "./Routes";

function App() {
  return (
    <Router>
      <Layout>
        <AnimatePresence>
          <ApplicationRoutes />
        </AnimatePresence>
      </Layout>
    </Router>
  );
}

// navigator.serviceWorker.register("../service-worker.js");

export default App;
