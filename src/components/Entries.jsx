
import { Stack, Card, CardContent, Typography, Button, Box } from "@mui/material";

export const Entries = ({ entries, onEdit, onDelete }) => {
    if (!entries.length) return <Typography>No hay entradas disponibles</Typography>;

    return (

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

                        <Box sx={{ mt: 1, display: 'flex', gap: 1 }}>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => onEdit(entry)}
                            >
                                Editar
                            </Button>
                            <Button
                                variant="outlined"
                                color="error"
                                onClick={() => onDelete && onDelete(entry.id)}
                            >
                                Eliminar
                            </Button>
                        </Box>

                    </CardContent>
                </Card>
            ))}
        </Stack>
    )


}