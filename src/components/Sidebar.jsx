
import { Sheet, Button, Typography, Box } from "@mui/joy";
import { useNavigate } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { IconButton } from "@mui/joy"
import PostAddIcon from '@mui/icons-material/PostAdd';
import BarChartIcon from '@mui/icons-material/BarChart';
import KeyboardDoubleArrowRightSharpIcon from '@mui/icons-material/KeyboardDoubleArrowRightSharp';
import KeyboardDoubleArrowLeftSharpIcon from '@mui/icons-material/KeyboardDoubleArrowLeftSharp';

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
                {open ? <KeyboardDoubleArrowLeftSharpIcon/>:< KeyboardDoubleArrowRightSharpIcon/>  }
            </Button>

            <Box
                onClick={() => navigate("/dashboard")}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    px: 2,
                    py: 1,
                    cursor: 'pointer',
                    borderRadius: 'md',
                    '&:hover': { backgroundColor: 'background.level1' },
                }}
            >
                <HomeOutlinedIcon />
                <Typography level="h6" sx={{ mb: 1}}>
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
                    borderRadius: 'md',
                    '&:hover': { backgroundColor: 'background.level1' },
                }}
            >
                    <PostAddIcon />
                    <Typography level="h6" sx={{ mb: 1}}>
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
                    borderRadius: 'md',
                    '&:hover': { backgroundColor: 'background.level1' },
                }}
            >
                    <BarChartIcon />
                    <Typography level="h6" sx={{ mb:1 }}>
                        Graficas
                    </Typography>
                </Box>
            

        </Sheet>
    );
};