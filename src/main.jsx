import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App"; 
import { CssVarsProvider,CssBaseline} from "@mui/joy";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssVarsProvider>
       <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </CssVarsProvider>
  </React.StrictMode>
);