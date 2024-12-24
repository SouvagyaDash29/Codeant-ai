import { Route, Router, Routes } from "react-router";
import "./App.css";
import Dashboard from "./Layout/Dashboard";
import Signin from "./Auth/Signin";
import Home from "./pages/Home";
import AICodeReview from "./pages/AICodeReview";
import CloudSecurity from "./pages/CloudSecurity";
import HowtoUse from "./pages/HowtoUse";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import Logout from "./pages/Logout";

function App() {
  return (
      <Routes>
      <Route path="/Signin" element={<Signin />} />
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="/AiCodeReview" element={<AICodeReview />} />
        <Route path="/CloudSecurity" element={<CloudSecurity />} />
        <Route path="/How-to-Use" element={<HowtoUse />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Logout" element={<Logout />} />
      </Route>
      </Routes>
  );
}

export default App;
