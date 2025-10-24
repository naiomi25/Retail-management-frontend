
import { Sheet, Button, Typography ,Box} from "@mui/joy";
import { useNavigate } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { IconButton } from "@mui/joy"

export const Sidebar = ({ open, onToggle }) => {
    const navigate = useNavigate()
    return (
        <Sheet
            sx={{
                width: open ? 200 : 60,
                transition: "width 0.3s",
                backgroundColor: "background.level1",
                display: "flex",
                flexDirection: "column",
                p: 1,
            }}
        >
            <Typography level="h6" sx={{ mb: 2 }}>
                Sidebar
            </Typography>

            <Button variant="soft" onClick={onToggle}>
                {open ? "Cerrar" : "Abrir"}
            </Button>

            <IconButton onClick={() => navigate("/dashboard")}>
                <Box  sx={{ display : 'flex', }}>
                <HomeOutlinedIcon />
                <Typography level="h6" sx={{ mb: 2 }}>
                    Dashboard
                </Typography>
                </Box>
            </IconButton>
            <IconButton onClick={() => navigate("/entries")}>
                <Box  sx={{ display : 'flex', }}>
                <HomeOutlinedIcon />
                <Typography level="h6" sx={{ mb: 2 }}>
                    Nueva entrada
                </Typography>
                </Box>
            </IconButton>
             <IconButton onClick={() => navigate("/charts")}>
                <Box  sx={{ display : 'flex', }}>
                <HomeOutlinedIcon />
                <Typography level="h6" sx={{ mb: 2 }}>
                    Graficas
                </Typography>
                </Box>
            </IconButton>



        </Sheet>
    );
};