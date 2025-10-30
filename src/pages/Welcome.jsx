import { Box, Card, Typography, Button } from "@mui/joy";

import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { keyframes } from "@emotion/react";

// Frases aleatorias
const FRASES = [
  "Cada día es una nueva oportunidad.",
  "Bienvenido/a, hoy es tu día para brillar.",
  "El éxito es la suma de pequeños esfuerzos.",
  "Haz que cada clic cuente.",
  "El conocimiento se construye paso a paso.",
  "Tu productividad empieza aquí.",
];

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;


const typingAnimation = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

export const WelcomeView = () => {

  const [fraseRandom, setFraseRandom] = useState("");
  const [userName, setUserName] = useState("");
  const location = useLocation();

  useEffect(() => {

    const navUser = location?.state?.user;
    if (navUser && navUser.user_name) {
      setUserName(navUser.user_name);
     
      try { localStorage.setItem('user', JSON.stringify(navUser)); } catch (e) { }
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.user_name) setUserName(user.user_name);
  }, []);



  useEffect(() => {
    const index = Math.floor(Math.random() * FRASES.length);
    setFraseRandom(FRASES[index]);
  }, []);

  const hour = new Date().getHours();
  const isMorning = hour < 12;

  const background = isMorning
    ? "linear-gradient(-45deg, #fcd34d, #fde68a, #fef9c3, #facc15)"
    : "linear-gradient(-45deg, #dff4ecff, #b2f0b7ff, #66e76aff, #10ac27ff)";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background,
        backgroundSize: "400% 400%",
        animation: `${gradientAnimation} 10s ease infinite`,
        p: 2,
        textAlign: "center",
      }}
    >
      <Typography
        level="h3"
        sx={{
          mb: 2,
          color: "white",
          fontWeight: "bold",
          textShadow: "0px 2px 8px rgba(0,0,0,0.3)",
        }}
      >
        ¡Hola de nuevo, {userName || "usuario"}!
      </Typography>

      <Card

      >
        <Typography
          level="h6"
          sx={{
            fontStyle: "italic",
            color: "text.secondary",
            whiteSpace: "nowrap",
            overflow: "hidden",
            width: "0",
            animation: `${typingAnimation} 3s steps(40, end) forwards`,
          }}
        >
          {fraseRandom}
        </Typography>
      </Card>


    </Box>
  );
};
