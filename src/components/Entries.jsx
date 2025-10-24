
import React from "react";
import { useState } from "react";
import {
  Box, Card, CardContent,
  Typography,
  IconButton,
  Dropdown,
  Menu,
  MenuButton,
  MenuItem,
  Divider,
  Avatar, ListItemDecorator
} from "@mui/joy";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import SettingsIcon from "@mui/icons-material/Settings";

export const Entries = ({ entries, onEdit, onDelete }) => {
  const [expanded, setExpanded] = useState(false);
  if (!entries.length)
    return (
      <Typography level="body-md" textAlign="center" sx={{ mt: 3 }}>
        No hay entradas disponibles
      </Typography>
    );

  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: "lg",
        boxShadow: "sm",
        overflow: "hidden",
      }}
    >
      {/* Header de la card con título y flecha */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 1,
          backgroundColor: "background.level2",
          cursor: "pointer",
        }}
        onClick={() => setExpanded(!expanded)}
      >
        <Typography level="title-md" fontWeight="lg">Entradas</Typography>
        <IconButton size="sm">
          {expanded ? <ExpandLessRoundedIcon /> : <ExpandMoreRoundedIcon />}
        </IconButton>
      </Box>

      {/* Contenido colapsable */}
      {expanded && (
        <CardContent sx={{ px: 0 }}>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {/* Header de la tabla */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                px: 2,
                py: 0.5,
                fontSize: "0.8rem",
                fontWeight: 600,
                borderBottom: "1px solid",
                borderColor: "divider",
                color: "text.secondary",
              }}
            >
              <Typography sx={{ flex: 1, textAlign: "center" }}>Date</Typography>
              <Typography sx={{ width: 50, textAlign: "center" }}>Shift</Typography>
              <Typography sx={{ flex: 1, textAlign: "center" }}>Net Sales</Typography>
              <Typography sx={{ flex: 1, textAlign: "center" }}>Transactions</Typography>
              <Typography sx={{ flex: 1, textAlign: "center" }}>Articles</Typography>
              <Typography sx={{ flex: 1, textAlign: "center" }}>Accessories</Typography>
              <Typography sx={{ flex: 1, textAlign: "center" }}>Apparel</Typography>
              <Typography sx={{ flex: 1, textAlign: "center" }}>Footfall</Typography>
              <Typography sx={{ flex: 1, textAlign: "center" }}>Average</Typography>
              <Typography sx={{ flex: 1, textAlign: "center" }}>UPT</Typography>
              <Typography sx={{ flex: 1, textAlign: "center" }}>CR</Typography>

              <Box sx={{ width: 50, display: "flex", justifyContent: "center" }}>
                <SettingsIcon fontSize="small" sx={{ color: 'neutral.500' }} />
              </Box>
            </Box>

            {/* Body  */}
            <Box sx={{
              maxHeight: 400, overflowY: "auto", "&::-webkit-scrollbar": {
                width: 6,
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(100,100,100,0.4)",
                borderRadius: 3,
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "rgba(100,100,100,0.7)",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "transparent",
              },
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(100,100,100,0.4) transparent",
            }}>
              {entries.map((entry, index) => (
                <Box
                  key={entry.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    px: 2,
                    py: 0.5,
                    backgroundColor: index % 2 === 0 ? "background.surface" : "background.level1",
                    borderBottom: "1px solid",
                    borderColor: "divider",
                    "&:hover": {
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "#222" : "#f0f0f0",
                    },
                    transition: "background-color 0.2s",
                  }}
                >
                  <Typography sx={{ fontSize: "0.75rem", flex: 1, textAlign: "center" }}>{entry.date}</Typography>
                  <Box sx={{ width: 50, display: "flex", justifyContent: "center", alignItems: "center", }}>
                    <Avatar sx={{
                      width: 22, height: 22, fontSize: "0.75rem", bgcolor:
                        entry.shift?.toLowerCase().includes("morning")
                          ? "#FFB300" : "#6A1B9A",
                          
                      color: "white",
                    }}
                    >
                      {entry.shift?.[0]?.toUpperCase()}
                    </Avatar>
                  </Box>
                  <Typography sx={{ flex: 1, textAlign: "center" }}>{entry.net_sales}</Typography>
                  <Typography sx={{ flex: 1, textAlign: "center" }}>{entry.transactions}</Typography>
                  <Typography sx={{ flex: 1, textAlign: "center" }}>{entry.articles}</Typography>
                  <Typography sx={{ flex: 1, textAlign: "center" }}>{entry.accessories}</Typography>
                  <Typography sx={{ flex: 1, textAlign: "center" }}>{entry.apparel}</Typography>
                  <Typography sx={{ flex: 1, textAlign: "center" }}>{entry.footfall}</Typography>
                  <Typography sx={{ flex: 1, textAlign: "center" }}>{entry.average}</Typography>
                  <Typography sx={{ flex: 1, textAlign: "center" }} color={entry.upt > 1.5 ? "success" : "danger"}>{entry.upt}</Typography>
                  <Typography sx={{ flex: 1, textAlign: "center" }} color={entry.cr > 18 ? "success" : "danger"}>{entry.cr}</Typography>

                  {/* Acciones */}
                  <Box sx={{ width: 50, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Dropdown>
                      <MenuButton
                        slots={{ root: IconButton }}
                        slotProps={{
                          root: { variant: "plain", color: "neutral", size: "sm" },
                        }}
                      >
                        <MoreHorizRoundedIcon />
                      </MenuButton>
                      <Menu size="sm" sx={{ minWidth: 140 }}>
                        <MenuItem onClick={() => onEdit(entry)}>
                          <EditRoundedIcon fontSize="small" /> Editar
                        </MenuItem>
                        <Divider />
                        <MenuItem color="danger" onClick={() => onDelete && onDelete(entry.id)}>
                          <DeleteRoundedIcon fontSize="small" /> Eliminar
                        </MenuItem>
                      </Menu>
                    </Dropdown>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </CardContent>
      )
      }
    </Card >
  );
};
