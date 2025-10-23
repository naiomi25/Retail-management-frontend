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
import { ModeToggle } from '../components/common/ModeToggle';


export const Register = () => {
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
        navigate('/login')
      } else {
        setSuccess("Registro exitoso.");
      }
      setForm({ user_name: "", email: "", password: "", name: "" });
    } catch (err) {
      setError(err.message || "Error al registrar.");
    }
  };

  return (

    <main>
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "1rem" }}>
        <ModeToggle />
      </div>

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
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Sign up!</b>
          </Typography>
          <Typography level="body-sm">Create an account to continue.</Typography>
        </div>

        <FormControl>
          <FormLabel>Nombre</FormLabel>
          <Input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
          />
        </FormControl>

        <FormControl>
          <FormLabel>Usuario</FormLabel>
          <Input
            name="user_name"
            value={form.user_name}
            onChange={handleChange}
            placeholder="Nombre de usuario"
            required
          />
        </FormControl>

        <FormControl>
          <FormLabel>Email</FormLabel>
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
          <FormLabel>Password</FormLabel>
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
            backgroundColor: '#2ecc40',
            color: 'white',
            '&:hover': { backgroundColor: '#e622e6' },
          }}
        >
          Sign up
        </Button>

        {error && <Typography sx={{ color: "red", fontSize: "sm" }}>{error}</Typography>}
        {success && <Typography sx={{ color: "green", fontSize: "sm" }}>{success}</Typography>}

        <Typography endDecorator={<Link href="/login">Sign in</Link>} sx={{ fontSize: 'sm', alignSelf: 'center' }}>
          Already have an account?
        </Typography>
      </Sheet>
    </main>

  );
};
