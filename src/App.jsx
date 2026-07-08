import Header from "./components/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import Statistics from "./components/Statistics/Statistics"
import styles from "./css_modules/app.module.css"
import Home from "./components/Home"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <BrowserRouter basename="/money_guard_team_project">
    <div className={styles.appBg}>
      <div className={styles.extraShadow} />
      <div className={styles.pageWrapper}>
        <Header />
        <div className={styles.layout}>
          <Sidebar />
          <main className={styles.main}>
            <Routes>
          {/* Редірект за замовчуванням на /statistics */}
          <Route path="/" element={<Navigate replace to="/statistics" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
          </main>
        </div>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
