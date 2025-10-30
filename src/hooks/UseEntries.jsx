
import dayjs from "dayjs";
import { useState } from "react";
import { apiUser } from "../api/client";

export const useEntries = () => {
    const [entries, setEntries] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [totals, setTotals] = useState({ total_entries: 0, averages_by_shift: {}, sums_by_shift: {} });
    const [startDate, setStartDate] = useState(dayjs().format("YYYY-MM-DD"));
    const [endDate, setEndDate] = useState(dayjs().format("YYYY-MM-DD"));

    const fetchEntries = async (startDate, endDate) => {

        setLoading(true);
        setError('');
        try {

            const data = await apiUser(`/entries/range/?start_date=${startDate}&end_date=${endDate}`)
            setEntries(data.entries || [])
            setTotals({
                total_entries: data.total_entries || 0,
                averages_by_shift: data.averages_by_shift || {},
                sums_by_shift: data.sums_by_shift || {}
            });
            console.log('data del back-end', data);


        } catch (err) {
            console.error(err);
            setError('Error al cargar las entradas');
        } finally {
            setLoading(false);
        }
    };

    return {
        entries,
        loading,
        error,
        setError,
        totals,
        setEntries,
        fetchEntries,
        startDate,   
        setStartDate,
        endDate,    
        setEndDate
    };


};