import * as React from 'react';
import { CalendarOnly } from './calendar';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Button from '@mui/joy/Button';

// import dayjs from 'dayjs';
// import { useState } from 'react';
import { CssVarsProvider, } from '@mui/joy/styles';
import Sheet from "@mui/joy/Sheet";
import CssBaseline from "@mui/joy/CssBaseline";



export const EntryForm = ({ }) => {


    return (
        <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(formData); }}>
               
        <CssVarsProvider>
            <CssBaseline />
            <Sheet
                sx={{
                    width: 400,
                    mx: 'auto',
                    my: 4,
                    py: 3,
                    px: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    borderRadius: 'sm',
                    boxShadow: 'md',
                }}
            >
                <Typography level="h5" component="h2">
                    
                </Typography>
                <Stack spacing={2}>
                    <FormControl>

                    <FormLabel>Fecha</FormLabel>

                    <CalendarOnly />
                       
                    </FormControl>

                    <FormControl>
                        <FormLabel>Turno</FormLabel>
                        <Select defaultValue="Morning">
                            <Option value="Morning">Morning</Option>
                            <Option value="Evening">Evening</Option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Net Sales</FormLabel>
                        <Input type="number" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Transactions</FormLabel>
                        <Input type="number" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Articles</FormLabel>
                        <Input type="number" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Accessories</FormLabel>
                        <Input type="number" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Apparel</FormLabel>
                        <Input type="number" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Footfall</FormLabel>
                        <Input type="number" />
                    </FormControl>
                </Stack>
                 <Button type="submit">Enviar datos</Button>
            </Sheet>
        </CssVarsProvider >
        </form>
    );
};
