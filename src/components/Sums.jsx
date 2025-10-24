
import { Grid, Card, CardContent, Typography ,Box} from '@mui/joy';
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";



export const Sums = ({ sums }) => {
 
  return (
    <Grid
      container
      spacing={2}
      sx={{
        justifyContent: "center",
        alignItems: "stretch",
        mt: 2,
        mb:3
      }}
    >
      {Object.entries(sums).map(([shift, sum]) => {
        const isMorning =
          shift.toLowerCase().includes("mañana") ||
          shift.toLowerCase().includes("morning");

        const Icon = isMorning ? WbSunnyRoundedIcon : DarkModeRoundedIcon;

       
        const bgColor = isMorning ? "#FFF8E1" : "#EDE7F6"; 
        const titleColor = isMorning ? "#FFB300" : "#6A1B9A"; 
        const iconColor = titleColor;

        return (
          <Grid item xs={12} sm={6} md={6} key={`sum-${shift}`}>
            <Card
              variant="soft"
              sx={{
                p: 2,
                mb: 3,
                height: "100%",
                borderRadius: 3,
                boxShadow: "sm",
                backgroundColor: bgColor,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "md",
                },
              }}
            >
              <CardContent>
             
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 2,
                    borderBottom: "1px solid rgba(0,0,0,0.1)",
                    pb: 1,
                  }}
                >
                  <Icon sx={{ color: iconColor, fontSize: 40 }} />
                  <Typography
                    level="title-md"
                    sx={{
                      fontWeight: "bold",
                      color: titleColor,
                      textTransform: "capitalize",
                    }}
                  >
                    Sumatorio 
                  </Typography>
                </Box>

                {/* Datos */}
                <Box
                  sx={{
                    display: "grid",
                    
                    rowGap: 2,
                    
                  }}
                >
                  <Typography level="body-sm" sx={{ color: "black",fontWeight: 700 }}>
                    Ventas netas:{" "}
                    <Typography component="span" sx={{ fontWeight: 600  }}>
                      {sum.sum_net_sales}
                    </Typography>
                  </Typography>
                  <Typography level="body-sm"sx={{ color: "black",fontWeight: 700 }}>
                    Transacciones:{" "}
                    <Typography component="span" sx={{ fontWeight: 600 }}>
                      {sum.sum_transactions}
                    </Typography>
                  </Typography>
                  <Typography level="body-sm"sx={{ color: "black",fontWeight: 700 }}>
                    Artículos:{" "}
                    <Typography component="span" sx={{ fontWeight: 600 }}>
                      {sum.sum_articles}
                    </Typography>
                  </Typography>
                  <Typography level="body-sm"sx={{ color: "black",fontWeight: 700 }}>
                    Accessorios:{" "}
                    <Typography component="span" sx={{ fontWeight: 600 }}>
                      {sum.sum_accessories}
                    </Typography>
                  </Typography>
                  <Typography level="body-sm"sx={{ color: "black",fontWeight: 700 }}>
                    Textil:{" "}
                    <Typography component="span" sx={{ fontWeight: 600 }}>
                      {sum.sum_apparel}
                    </Typography>
                  </Typography>
                  <Typography level="body-sm"sx={{ color: "black",fontWeight: 700 }}>
                    Clientes:{" "}
                    <Typography component="span" sx={{ fontWeight: 600 }}>
                      {sum.sum_footfall}
                    </Typography>
                  </Typography>
                  
                </Box>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};


