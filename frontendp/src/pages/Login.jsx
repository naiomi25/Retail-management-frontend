import { useState } from "react";
import  {loginUser}  from "../api/auth";
import { TextField, Button, Typography } from "@mui/material";

export  const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

 const handleLogin = async () => {
    try {
      const data = await loginUser(email, password);
      setToken(data.access_token);
      setError(null);
      console.log("Token recibido:", data.access_token);
    } catch (err) {
      setError(err.message);
    }
  };

 return (
    <div>
      <Typography variant="h4">Login</Typography>
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>Send</Button>
      {error && <Typography color="error">{error}</Typography>}
    </div>
  );
}
