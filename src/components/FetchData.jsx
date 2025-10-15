import dayjs from 'dayjs';
import { CalendarOnly } from './calendar';
import { useState } from 'react';
import { apiUser } from '../api/client';
import { Button, Stack, Grid, Typography } from '@mui/material';

import { Entries } from './Entries';
import { Sums } from './Sums';
import { Average } from './Averages';
import { TotalsCards } from './TotalsCards';
import { EditEntry } from '../pages/EditEntry';




export const EntriesList = ({ }) => {



    const [startDate, setStartDate] = useState(dayjs().format('YYYY-MM-DD'));
    const [endDate, setEndDate] = useState(dayjs().format('YYYY-MM-DD'));

    const [editEntry, setEditEntry] = useState(null)
    const [entries, setEntries] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [totals, setTotals] = useState({ total_entries: 0, averages_by_shift: {}, sums_by_shift: {} });

    const fetchEntries = async () => {

        setLoading(true);
        setError('');
        try {

            const data = await apiUser(`/entries/range/?start_date=${startDate}&end_date=${endDate}`)
            setEntries(data.entries || [])
            setTotals({
                total_entries: data.total_entries || 0,
                averages_by_shift: data.averages_by_shift || {},
                sums_by_shift: data.sums_by_shift || {}
            });
            console.log('data del back-end', data);


        } catch (err) {
            console.error(err);
            setError('Error al cargar las entradas');
        } finally {
            setLoading(false);
        }
    };
    const handleEdit = (entry) => setEditEntry(entry);
    const handleSave = async (id, formData) => {
        try {
            await apiUser(`/entries/modify/${id}`, { method: 'PUT', body: formData });
            fetchEntries(); 
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
            fetchEntries();
        } catch (err) {
            console.error(err);
           
            setError(err.message || 'Error al eliminar la entrada');
        }
    };

    return (

        <Stack spacing={2} sx={{ p: 2 }}>
            {/* Fechas y botón */}
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={5}>
                    <CalendarOnly value={startDate} onChange={(dateStr) => setStartDate(dateStr)} />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <CalendarOnly value={endDate} onChange={(dateStr) => setEndDate(dateStr)} />
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Button fullWidth variant="contained" onClick={fetchEntries}>
                        Buscar entradas
                    </Button>
                </Grid>
            </Grid>

            {/* Totales */}
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <TotalsCards total={totals.total_entries} />
                </Grid>
            </Grid>

            {/* Promedios */}
            <Grid container spacing={2}>
                <Average average={totals.averages_by_shift} />
            </Grid>

            {/* Sumatorios */}
            <Grid container spacing={2}>
                <Sums sums={totals.sums_by_shift} />
            </Grid>

            {/* Entradas individuales */}
            <Entries entries={entries} onEdit={setEditEntry} onDelete={handleDelete} />


            {loading && <Typography>Cargando...</Typography>}
            {error && <Typography color="error">{error}</Typography>}
            {editEntry && (
                <EditEntry entry={editEntry}  open={!!editEntry} onClose={() => setEditEntry(null)} onSave={handleSave} />)}
        </Stack>
    );
}





