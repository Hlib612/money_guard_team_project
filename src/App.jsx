import Header from "./components/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import Statistics from "./components/Statistics/Statistics"
import styles from "./css_modules/app.module.css"
import Home from "./components/Home"
function App() {
  return (
    <div className={styles.appBg}>
      <div className={styles.extraShadow} />
      <div className={styles.pageWrapper}>
        <Header />
        <div className={styles.layout}>
          <Sidebar />
          <main className={styles.main}>
            <Statistics />
            <Home/>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
