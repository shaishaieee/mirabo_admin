import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import ForgetPassword from "./components/ForgetPassword";
import Dashboard from "./components/Dashboard";
import UserManagement from "./components/UserManagement";
import UserProfile from "./components/UserProfile";
import CsvExeclUpload from "./components/CsvExcelUpload";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/usermanagement" element={<UserManagement />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/csvexcelupload" element={<CsvExeclUpload />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
