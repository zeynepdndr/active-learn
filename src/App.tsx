import "./App.css";
import Layout from "./components/Layout/Layout";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        {/* <Route path="/" element={<Link to="/dashboard" replace />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses/:course_id" element={<Dashboard />} />
        <Route path="/add-course" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
