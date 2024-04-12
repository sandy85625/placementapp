import Login from "./component/login/login";
import Registration from "./component/registration/registration";
import {BrowserRouter,Route,Routes}from "react-router-dom";
import StudentDashboard from "./dashboard/StudentDashboard";

import Home from "./component/Home/home";
import JobDashboard from "./dashboard/JobDashboard";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/studentDashboard" element={<StudentDashboard />} />
      <Route path="/JobDashboard" element={<JobDashboard />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
