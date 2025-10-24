import { Box, Sheet } from "@mui/joy";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";


export const Layout = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', position: 'relative' }}>
      <Sheet
        sx={{
          width: {
            xs: isSidebarOpen ? 200 : 0,
            sm: isSidebarOpen ? 200 : 60,
          },
          position: { xs: "absolute", sm: "relative" },
          height: "100vh",
          transition: "width 0.3s",
          zIndex: 10,
          overflow: "hidden",
          backgroundColor: "background.level1",
        }}>
        <Sidebar
          open={isSidebarOpen}
          onToggle={toggleSidebar}

        />
      </Sheet>
      <Box sx={{
        flex: 1,
        ml: { xs: 0, sm: 0 },
        transition: "margin-left 0.3s",
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Navbar onToggleSidebar={toggleSidebar} />
        <Box sx={{ p: 2 }}>
          <Outlet />
        </Box>

      </Box>
    </Box>
  );
};
