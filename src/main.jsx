import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App"; // importa el default export de App.jsx
import { CssVarsProvider,CssBaseline} from "@mui/joy";

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