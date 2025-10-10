import { LocalizationProvider, DateCalendar } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import dayjs from 'dayjs';
import { useState } from 'react';

export const CalendarOnly = ({calendarDay}) => {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleChangeDay = (day)=>{
    setSelectedDate(day)
    calendarDay(day)

  }

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  return (
    <ThemeProvider theme={lightTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={selectedDate}
          onChange={handleChangeDay}
          sx={{
            backgroundColor: '#cfd0cbff',
            color: '#000',
            borderRadius: 2,
            boxShadow: 1,
            padding: 2,
          }}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
};
