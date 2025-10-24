
import { Card, CardContent, Typography } from "@mui/joy";

export const TotalsCards = ({ total }) => (
  <Card
    variant="soft"
    
    sx={{
      display : 'flex',
       alignItems: "center",
      p: 2,
      justifyContent: "space-between",
      borderRadius: 2,
      boxShadow: "md",
       maxWidth: 300,
        mx: "auto",
         background: "background.level1", 
    }}
  >
    
      <Typography level="body-md" sx={{fontWeight: 500 ,color: "text.secondary" }}>
         Entradas procesadas :
      </Typography>
      <Typography level="h3" sx={{ fontWeight: "bold" , color: "primary.solidColor"}}>
        {total}
      </Typography>
    
  </Card>
);
