
import * as React from 'react';

import Sheet from "@mui/joy/Sheet";

import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';

import { useState } from "react";
import { loginUser } from "../api/auth";
import { useNavigate } from 'react-router-dom';
import { ModeToggle } from '../components/common/ModeToggle';


export const Login = ({ onSwitch }) => {

  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(email, password);

      if (data.access_token) {
        localStorage.setItem("token", data.access_token);
        setToken(data.access_token);
      }
      setError(null);
      console.log("Token recibido:", data.access_token);
      navigate('/');
    } catch (err) {
      setError('Correo o contraseña incorrecta, por favor vuelve a intentarlo');
    }
  };

  return (

    <main>


      <Sheet
        sx={{
          width: 300,
          mx: 'auto',
          my: 4,
          py: 3,
          px: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
          background: 'linear-gradient(90deg, #fbfefbff, #7af4cfff)',
          textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1" sx={{ color: '#06352eff' }}>
            <b> ¡Feliz de volver a verte!</b>
          </Typography>
          <Typography level="body-sm" sx={{ color: '#08433aff' }}>Sigue organizando tus datos. </Typography>
        </div>
        <form onSubmit={handleLogin}>

          <FormControl>
            <FormLabel sx={{ color: '#06352eff' }}>Email</FormLabel>
            <Input
              name="email"
              autoComplete="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}

              sx={{
                backgroundColor: '#1d7c65ff',
                borderRadius: 8,
              }}

            />
          </FormControl>
          <FormControl>
            <FormLabel sx={{ color: '#06352eff' }}>Password</FormLabel>
            <Input
              name="current-password"
              autoComplete="current-password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                backgroundColor: '#1d7c65ff',
                borderRadius: 8,



              }}
            />
          </FormControl>
          <Button
            type="submit"
            variant="solid"
            sx={{
              mt: 1,
              backgroundColor: '#1d7c65ff',
              color: 'white',
              '&:hover': {
                backgroundColor: ' #114430ff',
              },
            }}
          >
            Log in
          </Button>
        </form>

        {error && (
          <Typography sx={{ color: "red", fontSize: "sm" }}>
            {error}
          </Typography>
        )}
        <Typography
          sx={{ fontSize: 'sm', alignSelf: 'center', mt: 1 }}
        >
          <Link
            component="button"
            onClick={onSwitch}
            sx={{ color: '#08433aff', textDecoration: 'underline', cursor: 'pointer' }}
          >
            Nuevo usuario
          </Link>
        </Typography>
      
      </Sheet>
    </main>

  );
}
