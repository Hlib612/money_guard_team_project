import React, { useState } from "react";

const EditModal = ({ isVisible, onClose, transaction, onSave }) => {
  const [formData, setFormData] = useState({
    money: transaction?.money || "",
    date: transaction?.date || "",
    comment: transaction?.comment || "",
  });

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="edit-modal">
      <h2>Edit transaction</h2>
      <input
        type="number"
        value={formData.money}
        onChange={(e) => setFormData({ ...formData, money: e.target.value })}
      />
      <input
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
      />
      <input
        type="text"
        value={formData.comment}
        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EditModal;