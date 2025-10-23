import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { useColorScheme } from '@mui/joy';
import * as React from "react";
import IconButton from "@mui/joy/IconButton";
import Moon from "@mui/icons-material/DarkMode";
import Sun from "@mui/icons-material/LightMode";



export const ModeToggle =()=> {
  const { mode, setMode } = useColorScheme();

  
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <IconButton size="sm" variant="plain">
        <Sun />
      </IconButton>
    );
  }

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <IconButton
      onClick={toggleMode}
      size="sm"
      variant="soft"
      sx={{ borderRadius: "50%" }}
    >
      {mode === "light" ? <Moon /> : <Sun />}
    </IconButton>
  );
}
