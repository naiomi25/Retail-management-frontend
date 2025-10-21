
// import { Grid, Card, CardContent, Typography } from "@mui/material";

// export const Average = ({ average }) => {
//   if (!average || Object.keys(average).length === 0) {
//     return <Typography>No hay datos de promedios</Typography>;
//   }
//     return (
//         <>
//          {Object.entries(average).map(([shift, avg]) => (
//                             <Grid item xs={12} sm={4} key={`avg-${shift}`}>
//                                 <Card>
//                                     <CardContent>
//                                         <Typography variant="h6">Promedio {shift}</Typography>
//                                         <Typography>Net Sales: {avg.avg_net_sales}</Typography>
//                                         <Typography>Transactions: {avg.avg_transactions}</Typography>
//                                         <Typography>Articles: {avg.avg_articles}</Typography>
//                                         <Typography>accessories: {avg.avg_accessories}</Typography>
//                                         <Typography>apparel: {avg.avg_apparel}</Typography>
//                                         <Typography>footfall: {avg.avg_footfall}</Typography>
//                                         <Typography>average: {avg.avg_average}</Typography>
//                                         <Typography>upt: {avg.avg_upt}</Typography>
//                                         <Typography>cr: {avg.avg_cr}</Typography>
//                                     </CardContent>
//                                 </Card>
//                             </Grid>
//                         ))}
//         </>
//     )
// }
import { Grid, Card, CardContent, Typography } from '@mui/joy';

export const Average = ({ average }) => {
  if (!average || Object.keys(average).length === 0) {
    return <Typography>No hay entradas seleccionadas</Typography>;
  }

  return (
    <>
      {Object.entries(average).map(([shift, avg]) => (
        <Grid item xs={12} sm={2} key={`avg-${shift}`}>
          <Card variant="soft" color="primary" sx={{ p: 2 }}>
            <CardContent>
              <Typography level="title-lg" sx={{ mb: 1 }}>
                Promedio {shift}
              </Typography>
              <Typography>Net Sales: {avg.avg_net_sales}</Typography>
              <Typography>Transactions: {avg.avg_transactions}</Typography>
              <Typography>Articles: {avg.avg_articles}</Typography>
              <Typography>Accessories: {avg.avg_accessories}</Typography>
              <Typography>Apparel: {avg.avg_apparel}</Typography>
              <Typography>Footfall: {avg.avg_footfall}</Typography>
              <Typography>Average: {avg.avg_average}</Typography>
              <Typography>UPT: {avg.avg_upt}</Typography>
              <Typography>CR: {avg.avg_cr}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
};
