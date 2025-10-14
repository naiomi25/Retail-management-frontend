
import * as React from 'react';
import { CssVarsProvider, useColorScheme } from "@mui/joy";
import Sheet from "@mui/joy/Sheet";
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { useState } from "react";
import { loginUser } from "../api/auth";
import { useNavigate } from 'react-router-dom';

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);


  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <Button variant="soft">Change mode</Button>;
  }

  return (
    <Select
      variant="soft"
      value={mode}
      onChange={(event, newMode) => {
        setMode(newMode);
      }}
      sx={{ width: 'max-content' }}
    >
      <Option value="light">Light</Option>
      <Option value="dark">Dark</Option>
    </Select>
  );
}

export const Login = () => {

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
    <CssVarsProvider>
      <main>
        <ModeToggle />
        <CssBaseline />
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
              <b>Welcome!</b>
            </Typography>
            <Typography level="body-sm">Sign in to continue.</Typography>
          </div>
          <form onSubmit={handleLogin}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                autoComplete="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="johndoe@email.com"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                name="current-password"
                autoComplete="current-password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button
              type="submit"
              variant="solid"
              sx={{
                mt: 1,
                backgroundColor: '#2ecc40',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#e622e6',
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
            endDecorator={<Link href="/register">Sign up</Link>}
            sx={{ fontSize: 'sm', alignSelf: 'center' }}
          >
            Don&apos;t have an account?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}
