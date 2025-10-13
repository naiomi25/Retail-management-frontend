import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export const Home = () => {
    return (
     <>
            <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary">
                    Dashboard
                </Button>
            </Link>
            <Link to="/login" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary">
                    Login
                </Button>
            </Link>
            <Link to="/register" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary">
                   Register
                </Button>
            </Link>
            <Link to="/entries" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary">
                  Nueva entrada
                </Button>
            </Link>

    </>  
    ) 
}