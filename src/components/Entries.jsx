
// import React, { useState } from "react";
// import {Box, Typography,Avatar,  List, ListItem,  ListItemContent,ListItemDecorator,  ListDivider,  Chip,  IconButton,  Dropdown, Menu, MenuButton,  MenuItem,
//  Divider,  Button, Card, CardContent,} from "@mui/joy";
// import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
// import EditRoundedIcon from "@mui/icons-material/EditRounded";
// import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
// import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
// import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";

// export const Entries = ({ entries, onEdit, onDelete }) => {
//   const [expandedId, setExpandedId] = useState(null);

//   const handleToggle = (id) => {
//     setExpandedId(expandedId === id ? null : id);
//   };

//   if (!entries.length)
//     return (
//       <Typography level="body-md" textAlign="center" sx={{ mt: 3 }}>
//         No hay entradas disponibles
//       </Typography>
//     );

//   return (
//     <Box sx={{ maxWidth: 600, mx: "auto" }}>
//       {entries.map((entry) => (
//         <Card
//           key={entry.id}
//           variant="outlined"
//           sx={{
//             mb: 2,
//             borderRadius: "lg",
//             overflow: "hidden",
//             boxShadow: "sm",
//             transition: "all 0.3s ease",
//             "&:hover": { boxShadow: "md" },
//           }}
//         >
//           <List size="sm" sx={{ "--ListItem-paddingX": 0 }}>
//             <ListItem
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "start",
//               }}
//             >
//               <ListItemContent
//                 sx={{ display: "flex", gap: 2, alignItems: "center" }}
//               >
//                 <ListItemDecorator>
//                   <Avatar>{entry.shift?.[0]?.toUpperCase()}</Avatar>
//                 </ListItemDecorator>
//                 <Box>
//                   <Typography level="title-sm" sx={{ fontWeight: 600 }}>
//                     {entry.shift}
//                   </Typography>
//                   <Typography level="body-xs" color="neutral">
//                     {entry.date}
//                   </Typography>
//                 </Box>
//               </ListItemContent>

//               <Dropdown>
//                 <MenuButton
//                   slots={{ root: IconButton }}
//                   slotProps={{
//                     root: {
//                       variant: "plain",
//                       color: "neutral",
//                       size: "sm",
//                     },
//                   }}
//                 >
//                   <MoreHorizRoundedIcon />
//                 </MenuButton>
//                 <Menu size="sm" sx={{ minWidth: 140 }}>
//                   <MenuItem onClick={() => onEdit(entry)}>
//                     <EditRoundedIcon fontSize="small" />
//                     Editar
//                   </MenuItem>
//                   <Divider />
//                   <MenuItem
//                     color="danger"
//                     onClick={() => onDelete && onDelete(entry.id)}
//                   >
//                     <DeleteRoundedIcon fontSize="small" />
//                     Eliminar
//                   </MenuItem>
//                 </Menu>
//               </Dropdown>
//             </ListItem>
//           </List>

//           <CardContent sx={{ py: 1, px: 2 }}>
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 cursor: "pointer",
//               }}
//               onClick={() => handleToggle(entry.id)}
//             >
//               <Typography level="body-sm" sx={{ fontWeight: 500 }}>
//                 {expandedId === entry.id
//                   ? "Ocultar detalles"
//                   : "Mostrar detalles"}
//               </Typography>
//               {expandedId === entry.id ? (
//                 <ExpandLessRoundedIcon />
//               ) : (
//                 <ExpandMoreRoundedIcon />
//               )}
//             </Box>

//             <Box
//               sx={{
//                 maxHeight: expandedId === entry.id ? 300 : 0,
//                 overflow: "hidden",
//                 transition: "max-height 0.3s ease",
//                 mt: expandedId === entry.id ? 1 : 0,
//               }}
//             >
//               <Divider sx={{ my: 1 }} />
//               <Typography level="body-sm">Net Sales: {entry.net_sales}</Typography>
//               <Typography level="body-sm">Transactions: {entry.transactions}</Typography>
//               <Typography level="body-sm">Articles: {entry.articles}</Typography>
//               <Typography level="body-sm">Accessories: {entry.accessories}</Typography>
//               <Typography level="body-sm">Apparel: {entry.apparel}</Typography>
//               <Typography level="body-sm">Footfall: {entry.footfall}</Typography>
//               <Typography level="body-sm">Average: {entry.average}</Typography>
//               <Typography level="body-sm">UPT: {entry.upt}</Typography>
//               <Typography level="body-sm">CR: {entry.cr}</Typography>
//             </Box>
//           </CardContent>
//         </Card>
//       ))}
//     </Box>
//   );
// };
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
        <CardContent sx={{ maxHeight: 400, overflowY: "auto", px: 0 }}>

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
              <Typography sx={{ width: 50, textAlign: "center" }}>Acc</Typography>
            </Box>

            {/* Body */}
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
                  <Avatar sx={{ width: 22, height: 22, fontSize: "0.75rem" }}>
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
                <Typography sx={{ flex: 1, textAlign: "center" }}>{entry.upt}</Typography>
                <Typography sx={{ flex: 1, textAlign: "center" }}>{entry.cr}</Typography>

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
