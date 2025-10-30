import React from "react";
import { Box,  Stack } from "@mui/joy";
import { DailyCharts } from "../components/Barchart";

export const Charts = () => {
  return (
    <Box sx={{ p: 1, ml: 10
        }}>
      
      <Stack spacing={2}>
        <DailyCharts />
      </Stack>
    </Box>
  );
};