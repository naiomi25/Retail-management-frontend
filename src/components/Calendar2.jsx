import { useState, useRef, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Box, Input, Typography, Sheet, useTheme } from "@mui/joy";
import dayjs from "dayjs";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

export const DateSelector = ({ value, onChange }) => {
  const [selectedDate, setSelectedDate] = useState(value || dayjs().format("YYYY-MM-DD"));
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);
  const theme = useTheme();

  useEffect(() => {
    if (value) setSelectedDate(value);
  }, [value]);

  const handleSelect = (date) => {
    const formatted = dayjs(date).format("YYYY-MM-DD");
    setSelectedDate(formatted);
    onChange?.(formatted);
    setOpen(false);
  };

  return (
    <Box sx={{ position: "relative", width: 150 }}>
      {/* Input para mostrar la fecha */}
      <Input
        ref={inputRef}
        value={selectedDate}
        startDecorator={<CalendarMonthRoundedIcon />}
        onClick={() => setOpen(!open)}
        onChange={(e) => setSelectedDate(e.target.value)}
        size="sm"
        variant="outlined"
        sx={{
          backgroundColor: theme.vars.palette.background.surface,
          input: { color: theme.vars.palette.text.primary },
        }}
      />

      {/* Calendario desplegable */}
      {open && (
        <Sheet
          variant="outlined"
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            mt: 0.5,
            zIndex: 1000,
            backgroundColor: theme.vars.palette.background.surface,
            borderRadius: "md",
            boxShadow: "md",
            p: 1,
          }}
        >
          <DayPicker
            mode="single"
            selected={dayjs(selectedDate).toDate()}
            onSelect={handleSelect}
            modifiersStyles={{
              selected: {
                backgroundColor: theme.vars.palette.primary.solidBg,
                color: theme.vars.palette.primary.solidColor,
              },
              today: {
                fontWeight: "bold",
                color: theme.vars.palette.primary.solidColor,
              },
            }}
          />
          <Typography level="body-sm" sx={{ mt: 1, textAlign: "center" }}>
            Fecha seleccionada: {selectedDate}
          </Typography>
        </Sheet>
      )}
    </Box>
  );
};
