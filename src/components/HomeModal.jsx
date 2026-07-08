import { useState, useEffect } from "react";
import css from "../css_modules/HomeModal.module.css";
import closeSvg from "../images/close.svg";
import circleSvg from "../images/circle.svg";
import pencil1x from "../images/pencil1x.png";
import pencil2x from "../images/pencil2x.png";
import EditModal from "./EditModal";

export default function HomeModalTransaction({ isOn }) {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    money: "",
    date: "",
    comment: "",
  });
  const [type, setType] = useState("income");
  const [transactions, setTransactions] = useState([]);
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  // ✅ завантаження транзакцій при першому рендері
  useEffect(() => {
    const saved = localStorage.getItem("transactions");
    if (saved) {
      setTransactions(JSON.parse(saved));
    }
  }, []);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  const toggleType = () => {
    setType((prevType) => (prevType === "income" ? "expense" : "income"));
  };

  const inputHandle = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const deleteTransaction = (id) => {
    const updated = transactions.filter((t) => t.id !== id);
    setTransactions(updated);
    localStorage.setItem("transactions", JSON.stringify(updated));
  };

  const startEdit = (transaction) => {
    setEditingTransaction(transaction);
    setIsEditModalVisible(true);
  };

  const handleEditSave = (updatedData) => {
    const updatedTransactions = transactions.map((t) =>
      t.id === editingTransaction.id ? { ...t, ...updatedData } : t
    );
    setTransactions(updatedTransactions);
    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
    setIsEditModalVisible(false);
    setEditingTransaction(null);
  };

  const addTransaction = () => {
    const newTransaction = { id: Date.now(), ...formData, type };
    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);
    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
    setFormData({ money: "", date: "", comment: "" });
  };

  return (
    <>
      <table className={css.transactionsTable}>
        <thead className={css.transactionsThead}>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Comment</th>
            <th>Sum</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id} className={css.tr}>
              <td className={css.td}>{t.date}</td>
              <td className={css.td}>{t.type === "income" ? "+" : "-"}</td>
              <td className={css.td}>{t.comment}</td>
              <td
                className={
                  t.type === "income" ? css.incomeActive : css.expenseActive
                }
              >
                {t.money}
              </td>
              <td>
                <button className={css.pencilBtn} onClick={() => startEdit(t)}>
                  <img
                    src={pencil1x}
                    alt="white pencil"
                    className={css.pencilImg}
                    srcSet={`${pencil1x} 1x, ${pencil2x} 2x`}
                  />
                </button>
                <button
                  onClick={() => deleteTransaction(t.id)}
                  className={css.delateBtn}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className={css.openBtn} onClick={toggleModal}>
        <img src={circleSvg} alt="cross" />
      </button>

      {isVisible && (
        <div className={css.backdrop} onClick={toggleModal}>
          <div className={css.modal} onClick={(e) => e.stopPropagation()}>
            <button className={css.closeBtn} onClick={toggleModal}>
              <img src={closeSvg} alt="cross" className={css.closeImg} />
            </button>
            <h2 className={css.headline}>Add transaction</h2>
            <div className={css.switchDiv}>
              <p className={type === "income" ? css.incomeActive : css.income}>
                Income
              </p>
              <button className={css.switchBtn} onClick={toggleType}>
                <div
                  className={
                    type === "income" ? css.circleLeft : css.circleRight
                  }
                >
                  <img src={circleSvg} alt="cross" className={css.circleImg} />
                </div>
              </button>
              <p
                className={type === "expense" ? css.expenseActive : css.expense}
              >
                Expense
              </p>
            </div>
            <div className={css.inputDiv}>
              <input
                className={css.moneyInput}
                type="text"
                placeholder="0.00"
                name="money"
                value={formData.money}
                onChange={inputHandle}
              />
              <input
                type="date"
                className={css.dataInput}
                name="date"
                value={formData.date}
                onChange={inputHandle}
              />
            </div>
            <input
              type="text"
              className={css.commentInput}
              placeholder="Comment"
              name="comment"
              value={formData.comment}
              onChange={inputHandle}
            />
            <div className={css.buttonDiv}>
              <button className={css.addBtn} onClick={addTransaction}>
                Add
              </button>
              <button className={css.cancelBtn} onClick={toggleModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <EditModal
        isVisible={isEditModalVisible}
        onClose={() => setIsEditModalVisible(false)}
        transaction={editingTransaction}
        onSave={handleEditSave}
      />
    </>
  );
}