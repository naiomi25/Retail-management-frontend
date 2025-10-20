import { LocalizationProvider, DateCalendar } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import dayjs from 'dayjs';
import { useState, useEffect } from 'react';

export const CalendarOnly = ({ value, onChange }) => {
  const initial = value ? dayjs(value) : dayjs();
  const [selectedDate, setSelectedDate] = useState(initial);

  useEffect(() => {
    if (value) {
      const parsed = dayjs(value);
      if (parsed.isValid()) setSelectedDate(parsed);
    }
  }, [value]);

  const handleChangeDay = (day) => {
    setSelectedDate(day);
    if (typeof onChange === 'function') {
     
      onChange(day.format('YYYY-MM-DD'));
    }
  };

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


// import React, { useState, useEffect } from 'react';
// import dayjs from 'dayjs';
// import { LocalizationProvider, DateCalendar } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// export const CalendarOnly = ({ value, onChange }) => {
//   const initial = value ? dayjs(value) : dayjs();
//   const [selectedDate, setSelectedDate] = useState(initial);

//   useEffect(() => {
//     if (value) {
//       const parsed = dayjs(value);
//       if (parsed.isValid()) setSelectedDate(parsed);
//     }
//   }, [value]);

//   const handleChangeDay = (day) => {
//     setSelectedDate(day);
//     if (typeof onChange === 'function') {
//       onChange(day.format('YYYY-MM-DD'));
//     }
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DateCalendar
//         value={selectedDate}
//         onChange={handleChangeDay}
//         sx={{
//           backgroundColor: '#f0f0f0',
//           borderRadius: 2,
//           boxShadow: 1,
//           p: 2,
//         }}
//       />
//     </LocalizationProvider>
//   );
// };
