import { Routes, Route } from "react-router-dom";
import PrivateLayout from "./components/Layout";
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import Dashboard from "./pages/DashboardProfile";
// import CreateEntry from "./pages/CreateEntry";
// import EditEntry from "./pages/EditEntry";
import { Home } from "./pages/Home";

export default function AppRoutes() {
  return (
    <Routes>
      {/* {/* Rutas públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} /> 

      {/* Rutas privadas */}
      <Route element={<PrivateLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/entries" element={<CreateEntry />} />
        <Route path="/edit-entry" element={<EditEntry />} /> */}
      </Route>
    </Routes>
  );
}
