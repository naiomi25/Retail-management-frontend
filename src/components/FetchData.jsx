import { DateSelector } from './Calendar2';
import dayjs from 'dayjs';
import Box from '@mui/joy/Box';
import { useState, useEffect } from 'react';
import { apiUser } from '../api/client';
import { Button, Stack, Grid, Typography } from '@mui/joy';
import { Entries } from './Entries';
import { Sums } from './Sums';
import { Average } from './Averages';
import { TotalsCards } from './TotalsCards';
import { EditEntry } from '../pages/EditEntry';
import { useEntries } from '../hooks/UseEntries';


export const EntriesList = () => {
  const [startDate, setStartDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [endDate, setEndDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [editEntry, setEditEntry] = useState(null);
  const { entries, loading, error, totals, fetchEntries, setError } = useEntries();

  // DEBUG: mostrar totals en consola para detectar claves/duplicados
  useEffect(() => {
    console.log('DEBUG totals from useEntries:', totals);
  }, [totals]);

  const handleEdit = (entry) => setEditEntry(entry);
  const handleSave = async (id, formData) => {
    try {
      await apiUser(`/entries/modify/${id}`, { method: 'PUT', body: formData });
      fetchEntries(startDate, endDate);
    } catch (err) {
      console.error(err);
      setError('Error al actualizar la entrada');
    }
  };

  const handleDelete = async (id) => {
    const ok = window.confirm('¿Estás seguro de que quieres eliminar esta entrada?');
    if (!ok) return;
    try {
      await apiUser(`/entries/delete/${id}`, { method: 'DELETE' });
      fetchEntries(startDate, endDate);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Error al eliminar la entrada');
    }
  };

  return (
    <Stack spacing={1} sx={{ p: 1 }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start", maxWidth: 600, alignItems: "center", mx: "auto", mb: 2 }}   >
        <Box sx={{ width: 250 }}>
          <DateSelector value={startDate} onChange={(dateStr) => setStartDate(dateStr)} sx={{ width: "100%" }} />
        </Box>
        <Box sx={{ width: 250 }}>
          <DateSelector value={endDate} onChange={(dateStr) => setEndDate(dateStr)} sx={{ width: "100%" }} />
        </Box>
        <Button
          variant="solid"
          color="primary"
       
          onClick={() => fetchEntries(startDate, endDate)}
        >
          Buscar
        </Button>
      </Box>

    

      


      {/* Promedios */}
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "flex-start",
          mt: 2,
        }}
      >
        <Grid  xs={12} md={6}>
          <Average average={totals.averages_by_shift} />
        </Grid>
        <Grid  xs={12} md={6} >
          <Sums sums={totals.sums_by_shift} />
          <TotalsCards total={totals.total_entries} />
        </Grid>
      </Grid>

      {/* Entradas individuales */}
      <Entries entries={entries} onEdit={handleEdit} onDelete={handleDelete} />

     

      {loading && <Typography>Cargando...</Typography>}
      {error && <Typography color="danger">{error}</Typography>}
      {editEntry && (
        <EditEntry
          entry={editEntry}
          open={!!editEntry}
          onClose={() => setEditEntry(null)}
          onSave={handleSave}
        />
      )}
    </Stack>
  );
};



