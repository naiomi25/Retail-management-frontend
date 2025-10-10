import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";

const Dashboard = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={2}>
        {/* Card de ejemplo 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Ventas Hoy</Typography>
              <Typography variant="body1">€500</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card de ejemplo 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Transacciones</Typography>
              <Typography variant="body1">50</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card de ejemplo 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">CR</Typography>
              <Typography variant="body1">87.5%</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
