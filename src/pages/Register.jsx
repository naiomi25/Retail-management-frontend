import * as React from 'react';
import Sheet from "@mui/joy/Sheet";
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { useState } from "react";
import { registerUser } from "../api/auth";
import { useNavigate } from 'react-router-dom';



export const Register = ({onSwitch}) => {
  const [form, setForm] = useState({
    user_name: "",
    email: "",
    password: "",
    name: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate()

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    setError("");
    setSuccess("");
    try {
      const response = await registerUser(form);
      if (response.access_token) {
        localStorage.setItem("token", response.access_token);
        setSuccess("Registro exitoso. Sesión iniciada.");
        navigate('/home')
      } else {
        setSuccess("Registro exitoso.");
      }
      setForm({ user_name: "", email: "", password: "", name: "" });
    } catch (err) {
      setError("Error en el registro." || err.message);
    }
  };

  return (

    <main>
      <div style={{ display: "flex", justifyContent: "flex-end"}}>

      </div>

      <Sheet
        sx={{
          width: 300,
          mx: 'auto',
          my: 3,
          py: 2,
          px: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 0.5,
          borderRadius: 'sm',
          boxShadow: 'md',
          background: 'linear-gradient(90deg, #fbfefbff, #7af4cfff)',
          textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1" sx={{ color: '#06352eff', mb: 0.5 }}>
            <b>Nuevo registro</b>
          </Typography>
        </div>



        <FormControl>
          <FormLabel sx={{ color: '#06352eff' }} >Usuario</FormLabel>
          <Input
            name="user_name"
            value={form.user_name}
            onChange={handleChange}
            placeholder="Nombre de usuario"
            required
            
          />
        </FormControl>

        <FormControl>
          <FormLabel sx={{ color: '#06352eff' }}>Nombre completo</FormLabel>
          <Input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
           
          />
        </FormControl>

        <FormControl>
          <FormLabel sx={{ color: '#06352eff' }} >Email</FormLabel>
          <Input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="email@dominio.com"
            required
            
          />
        </FormControl>

        <FormControl>
          <FormLabel sx={{ color: '#06352eff' }}>Password</FormLabel>
          <Input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Contraseña"
            required
            
          />
        </FormControl>

        <Button
          onClick={handleSubmit}
          variant="solid"
          sx={{
              mt: 1,
            }}
        >
          Continuar
        </Button>
        <Typography
          sx={{ fontSize: 'sm', alignSelf: 'center', mt: 1,}}
        >
          <Link
            component="button"
            onClick={onSwitch}
            sx={{ color: '#08433aff', textDecoration: 'underline', cursor: 'pointer' }}
          >
            Ya tienes cuenta?
             Inicia sesión
          </Link>

        </Typography>
        {error && <Typography sx={{ color: "red", fontSize: "sm" }}>{error}</Typography>}
        {success && <Typography sx={{ color: "green", fontSize: "sm" }}>{success}</Typography>}


      </Sheet>
    </main>

  );
};
