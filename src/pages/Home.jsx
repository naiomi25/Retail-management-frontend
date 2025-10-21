
import { Link } from 'react-router-dom';
import { Button, Stack } from '@mui/joy';

export const Home = () => {
  return (
    <Stack spacing={2} sx={{ p: 2 }}>
      <Link to="/dashboard" style={{ textDecoration: 'none' }}>
        <Button variant="solid" color="primary">
          Dashboard
        </Button>
      </Link>

      <Link to="/login" style={{ textDecoration: 'none' }}>
        <Button variant="solid" color="primary">
          Login
        </Button>
      </Link>

      <Link to="/register" style={{ textDecoration: 'none' }}>
        <Button variant="solid" color="primary">
          Register
        </Button>
      </Link>

      <Link to="/entries" style={{ textDecoration: 'none' }}>
        <Button variant="solid" color="primary">
          Nueva entrada
        </Button>
      </Link>
    </Stack>
  );
};
