import { Card, CardContent, Typography } from "@mui/material";

export const TotalsCard = ({ total }) => (
  <Card sx={{ textAlign: "center" }}>
    <CardContent>
      <Typography variant="h6">Total de Entradas</Typography>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        {total}
      </Typography>
    </CardContent>
  </Card>
);