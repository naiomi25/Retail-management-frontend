

import React, { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css"; 
import { Box, Typography } from "@mui/joy";
import dayjs from "dayjs";

export const CalendarOnly = ({ value, onChange }) => {
  const initial = value ? dayjs(value).toDate() : new Date();
  const [selectedDate, setSelectedDate] = useState(initial);

  useEffect(() => {
    if (value) {
      const parsed = dayjs(value);
      if (parsed.isValid()) setSelectedDate(parsed.toDate());
    }
  }, [value]);

  const handleSelect = (date) => {
    setSelectedDate(date);
    if (typeof onChange === "function") {
      onChange(dayjs(date).format("YYYY-MM-DD"));
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#cbc8c8ff",
        borderRadius: "md",
        boxShadow: "sm",
        p: 2,
        maxWidth: 320,
        mx: "auto",
      }}
    >
      <Typography level="body-md" sx={{ mb: 1, fontWeight: 600 }}>
        Selecciona una fecha
      </Typography>
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={handleSelect}
        footer={selectedDate && (
          <Typography level="body-sm" sx={{ mt: 1 }}>
            Fecha seleccionada: {dayjs(selectedDate).format("YYYY-MM-DD")}
          </Typography>
        )}
      />
    </Box>
  );
};
