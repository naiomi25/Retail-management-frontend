import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box, Stack, Avatar } from '@mui/joy';

export const Entries = ({ entries, onEdit, onDelete }) => {
  const [expandedId, setExpandedId] = useState(null);

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (!entries.length) return <Typography>No hay entradas disponibles</Typography>;

  return (
    <Stack spacing={2}>
      {entries.map((entry) => (
        <Card key={entry.id} variant="outlined" sx={{ p: 2 }}>
          {/* Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Avatar sx={{ bgcolor: 'red' }}>{entry.shift?.[0]?.toUpperCase()}</Avatar>
              <Typography>{entry.date} - {entry.shift}</Typography>
            </Box>
            <Button variant="plain" onClick={() => handleToggle(entry.id)}>
              {expandedId === entry.id ? 'Ocultar' : 'Mostrar'}
            </Button>
          </Box>

          {/* Contenido desplegable */}
          <Box
            sx={{
              maxHeight: expandedId === entry.id ? 1000 : 0,
              overflow: 'hidden',
              transition: 'max-height 0.3s ease',
            }}
          >
            <CardContent>
              <Typography>Net Sales: {entry.net_sales}</Typography>
              <Typography>Transactions: {entry.transactions}</Typography>
              <Typography>Articles: {entry.articles}</Typography>
              <Typography>Accessories: {entry.accessories}</Typography>
              <Typography>Apparel: {entry.apparel}</Typography>
              <Typography>Footfall: {entry.footfall}</Typography>
              <Typography>Average: {entry.average}</Typography>
              <Typography>UPT: {entry.upt}</Typography>
              <Typography>CR: {entry.cr}</Typography>

              <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                <Button variant="solid" color="primary" onClick={() => onEdit(entry)}>
                  Editar
                </Button>
                <Button variant="outlined" color="danger" onClick={() => onDelete && onDelete(entry.id)}>
                  Eliminar
                </Button>
              </Box>
            </CardContent>
          </Box>
        </Card>
      ))}
    </Stack>
  );
};
