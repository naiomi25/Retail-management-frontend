import { Routes, Route } from "react-router-dom";
// import PrivateLayout from "./components/Layout";
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import Dashboard from "./pages/DashboardProfile";
import {CreateEntry} from "./pages/CreateEntry";
import { Home } from "./pages/Home";

export default function AppRoutes() {
  return (
    <Routes>
    
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} /> 

      
      {/* <Route element={<PrivateLayout />}> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/entries" element={<CreateEntry />} />
        
      {/* </Route> */}
    </Routes>
  );
}
