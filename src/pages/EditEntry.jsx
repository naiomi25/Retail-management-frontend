import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { EntryForm } from "../components/Form";

export const EditEntry = ({ entry, open, onClose, onSave }) => {
    const handleSubmit = async (formData) => {
        if (typeof onSave === 'function') await onSave(entry.id, formData);
        if (typeof onClose === 'function') onClose();
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 2,
        borderRadius: 1,
        width: 420,
    };

    return (
        <Modal open={!!open} onClose={onClose}>
            <Box sx={style}>
               <EntryForm initialData={entry} onSubmit={handleSubmit} showCalendar={false} />
            </Box>
        </Modal>
    );
};