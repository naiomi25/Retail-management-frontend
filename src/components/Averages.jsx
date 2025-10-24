import { Grid, Card, CardContent, Typography, Box } from "@mui/joy";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";

export const Average = ({ average }) => {
 

  return (
    <Grid
      container
      spacing={2}
      sx={{
        justifyContent: "center",
        alignItems: "stretch",
        mt: 2,
      }}
    >
      {Object.entries(average).map(([shift, avg]) => {
        const isMorning =
          shift.toLowerCase().includes("mañana") ||
          shift.toLowerCase().includes("morning");

        const Icon = isMorning ? WbSunnyRoundedIcon : DarkModeRoundedIcon;

       
        const bgColor = isMorning ? "#FFF8E1" : "#EDE7F6"; 
        const titleColor = isMorning ? "#FFB300" : "#6A1B9A"; 
        const iconColor = titleColor;

        return (
          <Grid item xs={12} sm={6} md={6} key={`avg-${shift}`}>
            <Card
              variant="soft"
              sx={{
                p: 2,
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
                    Promedio 
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
                      {avg.avg_net_sales}
                    </Typography>
                  </Typography>
                  <Typography level="body-sm"sx={{ color: "black",fontWeight: 700 }}>
                    Transacciones:{" "}
                    <Typography component="span" sx={{ fontWeight: 600 }}>
                      {avg.avg_transactions}
                    </Typography>
                  </Typography>
                  <Typography level="body-sm"sx={{ color: "black",fontWeight: 700 }}>
                    Artículos:{" "}
                    <Typography component="span" sx={{ fontWeight: 600 }}>
                      {avg.avg_articles}
                    </Typography>
                  </Typography>
                  <Typography level="body-sm"sx={{ color: "black",fontWeight: 700 }}>
                    Accessorios:{" "}
                    <Typography component="span" sx={{ fontWeight: 600 }}>
                      {avg.avg_accessories}
                    </Typography>
                  </Typography>
                  <Typography level="body-sm"sx={{ color: "black",fontWeight: 700 }}>
                    Textil:{" "}
                    <Typography component="span" sx={{ fontWeight: 600 }}>
                      {avg.avg_apparel}
                    </Typography>
                  </Typography>
                  <Typography level="body-sm"sx={{ color: "black",fontWeight: 700 }}>
                    Clientes:{" "}
                    <Typography component="span" sx={{ fontWeight: 600 }}>
                      {avg.avg_footfall}
                    </Typography>
                  </Typography>
                  <Typography level="body-sm"sx={{ color: "black",fontWeight: 700 }}>
                    Cesta media:{" "}
                    <Typography component="span" sx={{ fontWeight: 600 }}>
                      {avg.avg_average}
                    </Typography>
                  </Typography>
                  <Typography level="body-sm"sx={{ color: "black",fontWeight: 700 }}>
                    UPT:{" "}
                    <Typography component="span" sx={{ fontWeight: 600 }}>
                      {avg.avg_upt}
                    </Typography>
                  </Typography>
                  <Typography level="body-sm"sx={{ color: "black",fontWeight: 700 }}>
                    CR:{" "}
                    <Typography component="span" sx={{ fontWeight: 600 }}>
                      {avg.avg_cr}
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
