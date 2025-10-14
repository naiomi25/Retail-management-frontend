
import { Stack, Card, CardContent, Typography, Button } from "@mui/material";

export const Entries = ({ entries, onEdit }) => {
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

                        <Button
                            variant="contained"
                            color="secondary"
                            sx={{ mt: 1 }}
                            onClick={() => onEdit(entry)}
                        >
                            Editar
                        </Button>

                    </CardContent>
                </Card>
            ))}
        </Stack>
    )


}