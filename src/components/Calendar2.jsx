import * as React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box } from '@mui/joy';

export const DateSelector = ({ label, value, onChange }) => {
    const safeValue = value && dayjs(value).isValid() ? dayjs(value) : dayjs();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ width: '65%'}}>
        <DatePicker
          label={label}
          format="YYYY-MM-DD"
          value={safeValue}
          onChange={(newValue) => {
            if (onChange) onChange(newValue ? newValue.format('YYYY-MM-DD') : '');
          }}
          slotProps={{
            textField: {
              variant: 'outlined',
              fullWidth: true,
              size: 'small',
              sx: {
                backgroundColor: 'background.level1',
                borderRadius: 'md',
                '.MuiInputBase-input': { color: 'text.primary' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'divider' },
                  '&:hover fieldset': { borderColor: 'primary.plainColor' },
                  '&.Mui-focused fieldset': { borderColor: 'primary.solidBg' },
                },
              },
            },
          }}
        />
      </Box>
    </LocalizationProvider>
  );
};
