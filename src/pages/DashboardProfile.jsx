import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { EntriesList } from "../components/FetchData";
const Dashboard = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      < EntriesList/>
   
    </Box>
  );
};

export default Dashboard;
