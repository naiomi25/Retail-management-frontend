
import React from "react";
import { Box,  Stack } from "@mui/joy";
import { EntriesList } from "../components/FetchData";

const Dashboard = () => {
  
  
  return (
    <Box sx={{ p: 2 }}>
      
      <Stack spacing={2}>
        <EntriesList />
      </Stack>
    </Box>
  );
};

export default Dashboard;
