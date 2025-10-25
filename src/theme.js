import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        neutral: {
          100: '#f8fafc',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
    },
  },

  components: {
    JoyInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#60e8c6ff',
          borderRadius: 8,
          '&:hover': {
            backgroundColor: '#0bad85ff',
          },
          '&:focus-within': {
            backgroundColor: '#6cf4d4ff',
          },
        },
      },
    },

    JoyButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#065f49ff',
          color: '#090909ff',
          borderRadius: 10,
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor:' #e9efedff',
          },
        },
      },
    },
  },
});

export default theme;
