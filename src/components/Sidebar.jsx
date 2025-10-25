
import { Sheet, Button, Typography, Box } from "@mui/joy";
import { useNavigate } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { IconButton } from "@mui/joy"
import PostAddIcon from '@mui/icons-material/PostAdd';
import BarChartIcon from '@mui/icons-material/BarChart';
import KeyboardDoubleArrowRightSharpIcon from '@mui/icons-material/KeyboardDoubleArrowRightSharp';
import KeyboardDoubleArrowLeftSharpIcon from '@mui/icons-material/KeyboardDoubleArrowLeftSharp';
import { ModeToggle } from "./common/ModeToggle";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

export const Sidebar = ({ open, onToggle}) => {
    
    const navigate = useNavigate()
      const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

    return (

        <Sheet
            sx={{
                width: open ? 200 : 60,
                transition: "width 0.3s",
                backgroundColor: "background.level1",
                display: "flex",
                flexDirection: "column",
                 justifyContent: "space-between",
                height: "100vh",
                p: 1,
            }}
        >

 <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Button variant="soft" onClick={onToggle}>
                {open ? <KeyboardDoubleArrowLeftSharpIcon /> : < KeyboardDoubleArrowRightSharpIcon />}
            </Button>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                px: 2,
                py: 1,
                cursor: 'pointer',
                transition: "all 0.3s ease",

            }}>
                < ModeToggle />
            </Box>

            <Box
                onClick={() => navigate("/dashboard")}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    px: 2,
                    py: 1,
                    cursor: 'pointer',
                    transition: "all 0.3s ease",
                    "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "md",
                    }
                }}
            >
                <HomeOutlinedIcon />
                <Typography level="h6" sx={{ mb: 1 }}>
                    Dashboard
                </Typography>
            </Box>
            <Box
                onClick={() => navigate("/entries")}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    px: 2,
                    py: 1,
                    cursor: 'pointer',
                    transition: "all 0.3s ease",
                    "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "md",
                    }
                }}
            >
                <PostAddIcon />
                <Typography level="h6" sx={{ mb: 1 }}>
                    Nueva entrada
                </Typography>
            </Box>

            <Box
                onClick={() => navigate("/charts")}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    px: 2,
                    py: 1,
                    cursor: 'pointer',
                    transition: "all 0.3s ease",
                    "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "md",
                    }
                }}
            >
                <BarChartIcon />
                <Typography level="h6" sx={{ mb: 1 }}>
                    Graficas
                </Typography>
            </Box>
</Box>
            <Box
        onClick={handleLogout}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          px: 1.5,
          py: 1,
          borderRadius: "sm",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "danger.softBg",
            color: "danger.plainColor",
          },
          transition: "all 0.3s ease",
        }}
      >
        <LogoutRoundedIcon />
        {open && <Typography level="body-md">Logout</Typography>}
      </Box>
        </Sheet>


    );
};