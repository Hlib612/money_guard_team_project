import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Statistics from "./components/Statistics/Statistics";
import styles from "./css_modules/app.module.css";
import Home from "./components/Home";
import { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [userName, setUserName] = useState("");
  const [balance, setBalance] = useState(0);

  if (isLoggedIn) {
    return (
      <div className={styles.appBg}>
        <div className={styles.extraShadow} />
        <div className={styles.pageWrapper}>
          <Header
            userName={userName}
            onLogout={() => {
              setIsLoggedIn(false);
              setShowRegister(false);
              setUserName("");
            }}
          />
          <div className={styles.layout}>
            <Sidebar balance={balance} />
            <main className={styles.main}>
              <Routes>
                {/* Редірект за замовчуванням на /statistics */}
                <Route path="/" element={<Navigate replace to="/statistics" />} />
                <Route path="/home" element={<Home setBalance={setBalance} />} />
                <Route path="/statistics" element={<Statistics />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    );
  }

  return showRegister ? (
    <RegisterForm
      onBack={() => setShowRegister(false)}
      onRegister={(name) => {
        setUserName(name);
        setIsLoggedIn(true);
      }}
    />
  ) : (
    <LoginForm
      onLogin={() => setIsLoggedIn(true)}
      onRegister={() => setShowRegister(true)}
    />
  );
}

export default App;
