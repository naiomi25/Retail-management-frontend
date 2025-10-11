
import { Grid, Card, CardContent, Typography } from "@mui/material";

export const Sums = ({ sums }) => {
  if (!sums || Object.keys(sums).length === 0) {
    return <Typography>No hay datos de sumatorios</Typography>;
  }

    return (
        <>
            {Object.entries(sums).map(([shift, sum]) => (
                <Grid item xs={12} sm={4} key={`sum-${shift}`}>
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
        </>
    )



}