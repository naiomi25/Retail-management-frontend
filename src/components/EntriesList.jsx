import dayjs from 'dayjs';
import { CalendarOnly } from './calendar';
import { useState } from 'react';
import { apiUser } from '../api/client';
import { Button, Stack, Grid, Typography, Card, CardContent } from '@mui/material';

export const EntriesList = () => {


    const [startDate, setStartDate] = useState(dayjs());
    const [endDate, setEndDate] = useState(dayjs());


    const [entries, setEntries] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [totals, setTotals] = useState({ total_entries: 0, averages_by_shift: {}, sums_by_shift: {} });

    const fetchEntries = async () => {

        setLoading(true);
        setError('');
        try {

            const data = await apiUser(`/entries/range/?start_date=${startDate.format('YYYY-MM-DD')}&end_date=${endDate.format('YYYY-MM-DD')}`)
            setEntries(data.entries)
            setTotals({
                total_entries: data.total_entries,
                averages_by_shift: data.averages_by_shift,
                sums_by_shift : data.sums_by_shift
            });

        } catch (err) {
            console.error(err);
            setError('Error al cargar las entradas');
        } finally {
            setLoading(false);
        }
    };

    return (

        <Stack spacing={2} sx={{ p: 2 }}>
            {/* Fechas y botón */}
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={5}>
                    <CalendarOnly calendarDay={(day) => setStartDate(day)} />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <CalendarOnly calendarDay={(day) => setEndDate(day)} />
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Button fullWidth variant="contained" onClick={fetchEntries}>
                        Buscar entradas
                    </Button>
                </Grid>
            </Grid>

            {/* Totales y promedios */}
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Total Entradas</Typography>
                            <Typography variant="h4">{totals.total_entries}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {Object.entries(totals.averages_by_shift).map(([shift, avg]) => (
                    <Grid item xs={12} sm={4} key={shift}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Promedio {shift}</Typography>
                                <Typography>Net Sales: {avg.avg_net_sales}</Typography>
                                <Typography>Transactions: {avg.avg_transactions}</Typography>
                                <Typography>Articles: {avg.avg_articles}</Typography>
                                <Typography>accessories: {avg.avg_accessories}</Typography>
                                <Typography>apparel: {avg.avg_apparel}</Typography>
                                <Typography>footfall: {avg.avg_footfall}</Typography>
                                <Typography>average: {avg.avg_average}</Typography>
                                <Typography>upt: {avg.avg_upt}</Typography>
                                <Typography>cr: {avg.avg_cr}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
                {Object.entries(totals.sums_by_shift).map(([shift, sum]) => (
                    <Grid item xs={12} sm={4} key={shift}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Sumatorio {shift}</Typography>
                                <Typography>Net Sales: {sum.sum_net_sales}</Typography>
                                <Typography>Transactions:{sum.sum_transactions}</Typography>
                                <Typography>Articles: {sum.sum_articles}</Typography>
                                <Typography>accessories:{sum.sum_accessories}</Typography>
                                <Typography>apparel: {sum.sum_apparel}</Typography>
                              <Typography>footfall: {sum.sum_footfall}</Typography>
                                
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            

            {/* Lista de entradas */}
            <Stack spacing={1}>
                {entries.map((entry) => (
                    <Card key={entry.id}>
                        <CardContent>
                            <Typography>{entry.date} - {entry.shift}</Typography>
                            <Typography>Net Sales: {entry.net_sales}</Typography>
                            <Typography>Transactions: {entry.transactions}</Typography>
                            <Typography>Articles: {entry.articles}</Typography>
                            <Typography>accessories: {entry.accessories}</Typography>
                            <Typography>apparel: {entry.apparel}</Typography>
                            <Typography>footfall: {entry.footfall}</Typography>
                            <Typography>average: {entry.average}</Typography>
                            <Typography>upt: {entry.upt}</Typography>
                            <Typography>cr: {entry.cr}</Typography>

                        </CardContent>
                    </Card>
                ))}
            </Stack>

            {loading && <Typography>Cargando...</Typography>}
            {error && <Typography color="error">{error}</Typography>}
        </Stack>
    );
}





