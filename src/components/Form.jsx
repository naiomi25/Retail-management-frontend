import React, { useState } from 'react';
import dayjs from 'dayjs';
import { DateSelector } from './Calendar2';

import { FormControl, FormLabel, Input, Select, Option, Button, Sheet, Box, Grid,Typography } from "@mui/joy";



export const EntryForm = ({ initialData, onSubmit, showCalendar = true, message }) => {

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
      <Sheet
        sx={{
          width: "90%",
          maxWidth: 700,
          mx: "auto",
          my: 4,
          p: 4,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          borderRadius: "lg",
          boxShadow: "lg",
          backgroundColor: "background.surface",
          color: "black"
        }}
      >


        {/* Fecha y turno lado a lado */}
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
          {showCalendar && (
            <FormControl sx={{ flex: 1 }}>
              <FormLabel>Fecha</FormLabel>
              <DateSelector
                value={form.date}
                onChange={(date) => setForm({ ...form, date })}
              />
            </FormControl>
          )}

          <FormControl sx={{ flex: 1 }}>
            <FormLabel>Turno</FormLabel>
            <Select
              value={form.shift}
              onChange={(e, value) => setForm({ ...form, shift: value })}
            >
              <Option value="Morning">Mañana</Option>
              <Option value="Evening">Tarde</Option>
            </Select>
          </FormControl>
        </Box>

        {/* Campos divididos en dos columnas */}
        <Grid container spacing={2}>
          <Grid xs={12} sm={6}>
            <FormControl>
              <FormLabel>Ventas netas</FormLabel>
              <Input
                type="number"
                value={form.net_sales}
                onChange={(e) =>
                  setForm({ ...form, net_sales: Number(e.target.value) })
                }
                sx={{
                  color: "black",
                  "& .MuiSelect-button": { color: "black" },
                }}
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
                sx={{
                  color: "black",
                  "& .MuiSelect-button": { color: "black" },
                }}
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
                sx={{
                  color: "black",
                  "& .MuiSelect-button": { color: "black" },
                }}
              />
            </FormControl>
          </Grid>

          <Grid xs={12} sm={6}>
            <FormControl>
              <FormLabel>Accesorios</FormLabel>
              <Input
                type="number"
                value={form.accessories}
                onChange={(e) =>
                  setForm({ ...form, accessories: Number(e.target.value) })
                }
                sx={{
                  color: "black",
                  "& .MuiSelect-button": { color: "black" },
                }}
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
                sx={{
                  color: "black",
                  "& .MuiSelect-button": { color: "black" },
                }}
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
                sx={{
                  color: "black",
                  "& .MuiSelect-button": { color: "black" },
                }}
              />
            </FormControl>
          </Grid>
        </Grid>

        {/* Botón centrado abajo */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Button size="lg" type="submit" variant="solid" color="primary">
            {initialData ? "Actualizar" : "Crear"}

          </Button>
        </Box>
        {message && (
          <Typography level="body-sm" color="success" sx={{ mt: 1 }}>
            {message}
          </Typography>
        )}

      </Sheet>
    </form>
  );
};