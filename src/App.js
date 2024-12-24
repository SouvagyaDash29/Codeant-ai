import { Navigate, Route,  Routes } from "react-router";
import "./App.css";
import Dashboard from "./Layout/Dashboard";
import Signin from "./Auth/Signin";
import Home from "./pages/Home";
import AICodeReview from "./pages/AICodeReview";
import CloudSecurity from "./pages/CloudSecurity";
import HowtoUse from "./pages/HowtoUse";
import Settings from "./pages/Settings";
import Support from "./pages/Support";

function App() {
  const isAuthenticated = localStorage.getItem("User") === "true";

  return (
    <Routes>
      <Route
        path="/signin"
        element={isAuthenticated ? <Navigate to="/" replace /> : <Signin />}
      />
      <Route
        path="/"
        element={
          isAuthenticated ? <Dashboard /> : <Navigate to="/signin" replace />
        }
      >
        <Route index element={<Home />} />
        <Route path="/AiCodeReview" element={<AICodeReview />} />
        <Route path="/CloudSecurity" element={<CloudSecurity />} />
        <Route path="/How-to-Use" element={<HowtoUse />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Support" element={<Support />} />
      </Route>
    </Routes>
  );
}

export default App;
