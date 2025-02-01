import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideNavigation from "./components/SideNavigation";
import Login from "./components/Login";
import ForgetPassword from "./components/ForgetPassword";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import UserProfile from "./pages/UserProfile";
import CsvExeclUpload from "./pages/CsvExcelUpload";
import { AuthProvider } from "./AuthContext";

const App = () => {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/forgetpassword" element={<ForgetPassword />} />
          </Routes>
        </AuthProvider>
        <SideNavigation>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/usermanagement" element={<UserManagement />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/csvexcelupload" element={<CsvExeclUpload />} />
          </Routes>
        </SideNavigation>
      </Router>
    </>
  );
};

export default App;
