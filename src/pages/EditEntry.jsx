
import { Modal, Sheet } from '@mui/joy';
import { EntryForm } from "../components/Form";

export const EditEntry = ({ entry, open, onClose, onSave }) => {
  const handleSubmit = async (formData) => {
    if (typeof onSave === 'function') await onSave(entry.id, formData);
    if (typeof onClose === 'function') onClose();
  };

  return (
    <Modal open={!!open} onClose={onClose} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Sheet
        variant="soft"
        color="neutral"
        sx={{
          p: 2,
          borderRadius: 2,
          width: 420,
          boxShadow: 1,
        }}
      >
        <EntryForm initialData={entry} onSubmit={handleSubmit} showCalendar={false} />
      </Sheet>
    </Modal>
  );
};
