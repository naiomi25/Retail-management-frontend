import { useState } from "react";
import { Typography, Select, Option, Card, Grid, Box, Button } from "@mui/joy";
import { ResponsiveContainer, BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, } from "recharts";
import { useEntries } from "../hooks/UseEntries";
import dayjs from "dayjs";
import { DateSelector } from "./Calendar2";

const AVAILABLE_FIELDS = [
    { key: "net_sales", label: "Net Sales", color: "#8884d8" },
    { key: "transactions", label: "Transactions", color: "#82ca9d" },
    { key: "articles", label: "Articles", color: "#ffc658" },
    { key: "accessories", label: "Accessories", color: "#ff7f50" },
    { key: "apparel", label: "Apparel", color: "#8a2be2" },
    { key: "footfall", label: "Footfall", color: "#ff69b4" },
    { key: "average", label: "Average", color: "#00ced1" },
    { key: "upt", label: "UPT", color: "#3cb371" },
    { key: "cr", label: "CR", color: "#ffa500" },
];

export const DailyCharts = () => {
    const [barFields, setBarFields] = useState(["net_sales"]);
    const [lineFields, setLineFields] = useState(["transactions"]);
    const { startDate, setStartDate, endDate, setEndDate, entries, fetchEntries } = useEntries();

    const chartData = entries.map(entry => ({
        date: entry.date,
        ...entry,
    }));

    const handleSelectChange = (setter) => (_, newValue) => {
        let newSelection = Array.isArray(newValue) ? newValue : [newValue];

        setter(newSelection);
    };

    const renderAxes = () => (
        <>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
                dataKey="date"
                angle={-45}
                textAnchor="end"

                tick={{ fontSize: 10 }}
                height={60}
            />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip />
            <Legend wrapperStyle={{ fontSize: 12 }} />
        </>
    );

    return (
        <Box sx={{ p: 2, maxWidth: 1200, mx: "auto" , pl: 8}}>
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start", maxWidth: 600, alignItems: "center", mx: "auto", mb: 2 }}   >
                <Box sx={{ width: 250 }}>
                    <DateSelector value={startDate} onChange={(dateStr) => setStartDate(dateStr)} sx={{ width: "100%" }} />
                </Box>
                <Box sx={{ width: 250 }}>
                    <DateSelector value={endDate} onChange={(dateStr) => setEndDate(dateStr)} sx={{ width: "100%" }} />
                </Box>
                <Button
                    variant="solid"
                    color="primary"
                    sx={{ height: 36, width: 100 }}
                    onClick={() => fetchEntries(startDate, endDate)}
                >
                    Buscar
                </Button>
            </Box>
            <Grid container spacing={2} sx={{ display: "flex", mt:2, justifyContent: "center", }}>

                <Grid xs={12} md={6} sx={{ maxWidth: 'auto' }}>

                    <Card variant="outlined" sx={{ p: 2, height: 380 }}>
                        <Typography level="title-md" textAlign="center">
                            Gráfico de barras
                        </Typography>
                        <Select
                            value={barFields}
                            onChange={handleSelectChange(setBarFields)}
                            placeholder="Selecciona datos"
                            multiple
                            sx={{ width: 220, mx: "auto", my: 1 }}
                        >
                            {AVAILABLE_FIELDS.map(field => (
                                <Option key={field.key} value={field.key}>
                                    {field.label}
                                </Option>
                            ))}
                        </Select>


                        <ResponsiveContainer width="100%" height="85%">
                            <BarChart
                                data={chartData}
                                barGap={6}
                                barCategoryGap="40%"
                                margin={{ top: 10, right: 20, left: 0, bottom: 40 }}
                            >
                                {renderAxes()}
                                {barFields.map(field => {
                                    const info = AVAILABLE_FIELDS.find(f => f.key === field);
                                    return (
                                        <Bar
                                            key={field}
                                            dataKey={field}
                                            name={info?.label}
                                            fill={info?.color}
                                            radius={[4, 4, 0, 0]}
                                            barSize={20}
                                        />
                                    );
                                })}
                            </BarChart>
                        </ResponsiveContainer>
                    </Card>
                </Grid>


                <Grid xs={12} md={6} sx={{ maxWidth: "auto%", }}>
                    <Card variant="outlined" sx={{ p: 2, height: 380 }}>
                        <Typography level="title-md" textAlign="center">
                            Gráfico de líneas
                        </Typography>
                        <Select
                            value={lineFields}
                            onChange={handleSelectChange(setLineFields)}
                            placeholder="Selecciona hasta 2 datos"
                            multiple
                            sx={{ width: 220, mx: "auto", my: 1 }}
                        >
                            {AVAILABLE_FIELDS.map(field => (
                                <Option key={field.key} value={field.key}>
                                    {field.label}
                                </Option>
                            ))}
                        </Select>

                        <ResponsiveContainer width="100%" height="85%">
                            <LineChart
                                data={chartData}
                                margin={{ top: 10, right: 20, left: 0, bottom: 40 }}
                            >
                                {renderAxes()}
                                {lineFields.map(field => {
                                    const info = AVAILABLE_FIELDS.find(f => f.key === field);
                                    return (
                                        <Line
                                            key={field}
                                            type="monotone"
                                            dataKey={field}
                                            name={info?.label}
                                            stroke={info?.color}
                                            strokeWidth={2}
                                            dot={{ r: 3 }}
                                            activeDot={{ r: 6 }}
                                        />
                                    );
                                })}
                            </LineChart>
                        </ResponsiveContainer>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};
