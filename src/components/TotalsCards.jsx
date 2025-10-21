
import { Card, CardContent, Typography } from "@mui/joy";

export const TotalsCards = ({ total }) => (
  <Card
    variant="soft"
    color="success"
    sx={{
      textAlign: "center",
      p: 1,
      borderRadius: 2,
      boxShadow: 1,
       maxWidth: 100,
        mx: "auto",
    }}
  >
    <CardContent >
      <Typography level="body-md" sx={{ mb: 1 }}>
        Total de Entradas
      </Typography>
      <Typography level="h4" sx={{ fontWeight: "bold" }}>
        {total}
      </Typography>
    </CardContent>
  </Card>
);
