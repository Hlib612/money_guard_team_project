import React, { useState, useEffect } from "react";
import css from "../css_modules/HomeModal.module.css";
const EditModal = ({ isVisible, onClose, transaction, onSave }) => {
  const [formData, setFormData] = useState({
    money: transaction?.money || "",
    date: transaction?.date || "",
    comment: transaction?.comment || "",
  });

  useEffect(() => {
  setFormData({
    money: transaction?.money || "",
    date: transaction?.date || "",
    comment: transaction?.comment || "",
  });
}, [transaction]);

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className={css.backdrop} onClick={onClose}>
    <div className={css.modal} onClick={(e) => e.stopPropagation()}>
      <h2 className={css.headline}>Edit transaction</h2>
    <div>
  <p style={{ color: transaction?.type === "income" ? "green" : "gray" }}>
  Income
</p>
<p>/</p>
<p style={{ color: transaction?.type === "expense" ? "red" : "gray" }}>
  Expense
</p>
</div>
      <input  
      className={css.moneyInput}
      placeholder="0.00"
        type="text"
        value={formData.money}
        onChange={(e) => setFormData({ ...formData, money: e.target.value })}
      />
      <input
      className={css.dataInput}
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
      />
      <input
      className={css.commentInput}
        type="text"
        value={formData.comment}
        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
      />
      <div className={css.buttonDiv}>
      <button onClick={handleSave} className={css.addBtn}>Save</button>
      <button onClick={onClose} className={css.cancelBtn}>Cancel</button>
      </div>
    </div>
    </div>
  );
};

export default EditModal;