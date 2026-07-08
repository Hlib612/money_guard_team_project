import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [userName, setUserName] = useState("");

  if (isLoggedIn) {
    return (
      <>
        <Header
          userName={userName}
          onLogout={() => {
            setIsLoggedIn(false);
            setShowRegister(false);
            setUserName("");
          }}
        />
        <Home />
      </>
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