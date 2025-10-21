import React, { useState } from 'react';
import dayjs from 'dayjs';
import { CalendarOnly } from './calendar';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Button from '@mui/joy/Button';
import { CssVarsProvider, } from '@mui/joy/styles';
import Sheet from "@mui/joy/Sheet";
import CssBaseline from "@mui/joy/CssBaseline";



export const EntryForm = ({ initialData, onSubmit, showCalendar = true }) => {

  const [form, setForm] = useState({

    date: initialData?.date || dayjs().format('YYYY-MM-DD'),
    shift: initialData?.shift || 'Morning',
    net_sales: initialData?.net_sales || '',
    transactions: initialData?.transactions || '',
    articles: initialData?.articles || '',
    accessories: initialData?.accessories || '',
    apparel: initialData?.apparel || '',
    footfall: initialData?.footfall || ''
  })


  const handleSubmit = async (e) => {
    e.preventDefault()
    const success = await onSubmit(form);
    if (success && !initialData) {
      setForm({
        date: dayjs().format('YYYY-MM-DD'),
        shift: "Morning",
        net_sales: 0,
        transactions: 0,
        articles: 0,
        accessories: 0,
        apparel: 0,
        footfall: 0,
      });
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <CssVarsProvider>
        <CssBaseline />
        <Sheet
          sx={{
            width: 400,
            mx: "auto",
            my: 4,
            py: 3,
            px: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
            boxShadow: "md",
          }}
        >
          <Typography level="h5" component="h2">
            {initialData ? "Editar Entrada" : "Nueva Entrada"}

          </Typography>

          <Stack spacing={2}>
            {showCalendar && (
              <FormControl>
                <FormLabel>Fecha</FormLabel>
                <CalendarOnly
                  value={form.date}
                  onChange={(date) => setForm({ ...form, date })}
                />
              </FormControl>
            )}

            <FormControl>
              <FormLabel>Turno</FormLabel>
              <Select
                value={form.shift}
                onChange={(e, value) => setForm({ ...form, shift: value })}
              >
                <Option value="morning">Morning</Option>
                <Option value="evening">Evening</Option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Ventas netas</FormLabel>
              <Input
                type="number"
                value={form.net_sales}
                onChange={(e) =>
                  setForm({ ...form, net_sales: Number(e.target.value) })
                }
              />
            </FormControl>

            <FormControl>
              <FormLabel>Transacciones</FormLabel>
              <Input
                type="number"
                value={form.transactions}
                onChange={(e) =>
                  setForm({ ...form, transactions: Number(e.target.value) })
                }
              />
            </FormControl>

            <FormControl>
              <FormLabel>Artículos</FormLabel>
              <Input
                type="number"
                value={form.articles}
                onChange={(e) =>
                  setForm({ ...form, articles: Number(e.target.value) })
                }
              />
            </FormControl>

            <FormControl>
              <FormLabel>Accesorios</FormLabel>
              <Input
                type="number"
                value={form.accessories}
                onChange={(e) =>
                  setForm({ ...form, accessories: Number(e.target.value) })
                }
              />
            </FormControl>

            <FormControl>
              <FormLabel>Ropa</FormLabel>
              <Input
                type="number"
                value={form.apparel}
                onChange={(e) =>
                  setForm({ ...form, apparel: Number(e.target.value) })
                }
              />
            </FormControl>

            <FormControl>
              <FormLabel>Clientes</FormLabel>
              <Input
                type="number"
                value={form.footfall}
                onChange={(e) =>
                  setForm({ ...form, footfall: Number(e.target.value) })
                }
              />
            </FormControl>
          </Stack>

          <Button type="submit">{initialData ? "Actualizar" : "Crear"}</Button>
        </Sheet>
      </CssVarsProvider>
    </form>
  );
};
