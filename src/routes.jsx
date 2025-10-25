import { Routes, Route } from "react-router-dom";
import {Layout} from "./components/Layout";
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import Dashboard from "./pages/DashboardProfile";
import { WelcomeView } from "./pages/Welcome";
import {CreateEntry} from "./pages/CreateEntry";
import { Home } from "./pages/Home";
import React from 'react';
import { Charts } from "./pages/Charts";


export default function AppRoutes() {
  return (
    <Routes>
    
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} /> 

      
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/entries" element={<CreateEntry />} />
          <Route path="/charts" element={< Charts />} />
          <Route path="/welcome" element={< WelcomeView />} /> 
        
      </Route>
    </Routes>
  );
}
