import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import UserManagement from "./components/UserManagement";
import UserProfile from "./components/UserProfile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/usermanagement" element={<UserManagement />} />
        <Route path="/userprofile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
