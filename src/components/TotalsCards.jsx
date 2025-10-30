
import { Card, Typography } from "@mui/joy";

export const TotalsCards = ({ total }) => (
  <Card
    variant="soft"

    sx={{
      display: 'flex',
      alignItems: "center",
      p: 1.5,
      justifyContent: "space-between",
      borderRadius: 8,
      maxWidth: 230,
      mx: "auto",
      backgroundColor :'#065f49ff',
       transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "md",
                },
    }}
  >

    <Typography level="body-md" sx={{ fontWeight: 500, color: 'black' }}>
      Entradas procesadas :  <Typography component="span" sx={{ fontWeight: 600 }}> {total}</Typography>
    </Typography>
    

  </Card>
);
