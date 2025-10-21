
import React from "react";
import { Box, Typography, Card, CardContent, Grid, Stack } from "@mui/joy";
import { EntriesList } from "../components/FetchData";

const Dashboard = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography level="h4" sx={{ mb: 2 }}>
        Dashboard
      </Typography>
      <Stack spacing={2}>
        <EntriesList />
      </Stack>
    </Box>
  );
};

export default Dashboard;
