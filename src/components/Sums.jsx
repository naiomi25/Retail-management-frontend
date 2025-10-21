
import { Grid, Card, CardContent, Typography } from '@mui/joy';

export const Sums = ({ sums }) => {
  if (!sums || Object.keys(sums).length === 0) {
    return <Typography>No hay entradas seleccionadas</Typography>;
  }

  return (
    <>
      {Object.entries(sums).map(([shift, sum]) => (
        <Grid item xs={12} sm={2} key={`sum-${shift}`}>
          <Card variant="soft" color="primary" sx={{ p: 2 }}>
            <CardContent>
              <Typography level="title-lg" sx={{ mb: 1 }}>
                Sumatorio {shift}
              </Typography>
              <Typography>Net Sales: {sum.sum_net_sales}</Typography>
              <Typography>Transactions: {sum.sum_transactions}</Typography>
              <Typography>Articles: {sum.sum_articles}</Typography>
              <Typography>Accessories: {sum.sum_accessories}</Typography>
              <Typography>Apparel: {sum.sum_apparel}</Typography>
              <Typography>Footfall: {sum.sum_footfall}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
};
