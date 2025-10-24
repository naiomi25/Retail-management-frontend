
import { Box, IconButton, Typography } from "@mui/joy";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { useLocation } from "react-router-dom";

export const Navbar = ({ onToggleSidebar }) => {

    const location = useLocation()
    const pages = {
        "/dashboard": "Dashboard",
        "/entries": "Nueva Entrada",
        "/charts": "Gráficas",
    }
    const pagesName = pages[location.pathname]|| 'Página'


    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: 1,
                backgroundColor: 'background.level1',
                borderBottom: '1px solid',
                borderColor: 'divider',
            }}
        >
            {/* Icono de casita + nombre de la página */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <HomeIcon />
                <Typography level="h6"> {pagesName}</Typography>
            </Box>
            {/* Botón hamburguesa */}
             <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <IconButton onClick={onToggleSidebar}>
                <MenuIcon />
            </IconButton>
            </Box>

        </Box>
    );
};

    