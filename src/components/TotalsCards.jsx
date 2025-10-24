
import { Card, CardContent, Typography } from "@mui/joy";

export const TotalsCards = ({ total }) => (
  <Card
    variant="soft"

    sx={{
      display: 'flex',
      alignItems: "center",
      p: 1.5,
      justifyContent: "space-between",
      borderRadius: 2,

      maxWidth: 250,
      mx: "auto",
      background: "background.level1",
    }}
  >

    <Typography level="body-md" sx={{ fontWeight: 500, color: "text.secondary" }}>
      Entradas procesadas :  <Typography component="span" sx={{ fontWeight: 600 }}> {total}</Typography>
    </Typography>
    

  </Card>
);
