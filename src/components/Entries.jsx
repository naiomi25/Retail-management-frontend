
import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemContent,
  ListItemDecorator,
  ListDivider,
  Chip,
  IconButton,
  Dropdown,
  Menu,
  MenuButton,
  MenuItem,
  Divider,
  Button,
  Card,
  CardContent,
} from "@mui/joy";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";

export const Entries = ({ entries, onEdit, onDelete }) => {
  const [expandedId, setExpandedId] = useState(null);

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (!entries.length)
    return (
      <Typography level="body-md" textAlign="center" sx={{ mt: 3 }}>
        No hay entradas disponibles
      </Typography>
    );

  return (
    <Box sx={{ maxWidth: 600, mx: "auto" }}>
      {entries.map((entry) => (
        <Card
          key={entry.id}
          variant="outlined"
          sx={{
            mb: 2,
            borderRadius: "lg",
            overflow: "hidden",
            boxShadow: "sm",
            transition: "all 0.3s ease",
            "&:hover": { boxShadow: "md" },
          }}
        >
          <List size="sm" sx={{ "--ListItem-paddingX": 0 }}>
            <ListItem
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
              }}
            >
              <ListItemContent
                sx={{ display: "flex", gap: 2, alignItems: "center" }}
              >
                <ListItemDecorator>
                  <Avatar>{entry.shift?.[0]?.toUpperCase()}</Avatar>
                </ListItemDecorator>
                <Box>
                  <Typography level="title-sm" sx={{ fontWeight: 600 }}>
                    {entry.shift}
                  </Typography>
                  <Typography level="body-xs" color="neutral">
                    {entry.date}
                  </Typography>
                </Box>
              </ListItemContent>

              <Dropdown>
                <MenuButton
                  slots={{ root: IconButton }}
                  slotProps={{
                    root: {
                      variant: "plain",
                      color: "neutral",
                      size: "sm",
                    },
                  }}
                >
                  <MoreHorizRoundedIcon />
                </MenuButton>
                <Menu size="sm" sx={{ minWidth: 140 }}>
                  <MenuItem onClick={() => onEdit(entry)}>
                    <EditRoundedIcon fontSize="small" />
                    Editar
                  </MenuItem>
                  <Divider />
                  <MenuItem
                    color="danger"
                    onClick={() => onDelete && onDelete(entry.id)}
                  >
                    <DeleteRoundedIcon fontSize="small" />
                    Eliminar
                  </MenuItem>
                </Menu>
              </Dropdown>
            </ListItem>
          </List>

          <CardContent sx={{ py: 1, px: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => handleToggle(entry.id)}
            >
              <Typography level="body-sm" sx={{ fontWeight: 500 }}>
                {expandedId === entry.id
                  ? "Ocultar detalles"
                  : "Mostrar detalles"}
              </Typography>
              {expandedId === entry.id ? (
                <ExpandLessRoundedIcon />
              ) : (
                <ExpandMoreRoundedIcon />
              )}
            </Box>

            <Box
              sx={{
                maxHeight: expandedId === entry.id ? 300 : 0,
                overflow: "hidden",
                transition: "max-height 0.3s ease",
                mt: expandedId === entry.id ? 1 : 0,
              }}
            >
              <Divider sx={{ my: 1 }} />
              <Typography level="body-sm">Net Sales: {entry.net_sales}</Typography>
              <Typography level="body-sm">Transactions: {entry.transactions}</Typography>
              <Typography level="body-sm">Articles: {entry.articles}</Typography>
              <Typography level="body-sm">Accessories: {entry.accessories}</Typography>
              <Typography level="body-sm">Apparel: {entry.apparel}</Typography>
              <Typography level="body-sm">Footfall: {entry.footfall}</Typography>
              <Typography level="body-sm">Average: {entry.average}</Typography>
              <Typography level="body-sm">UPT: {entry.upt}</Typography>
              <Typography level="body-sm">CR: {entry.cr}</Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};
