import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode')
    if (darkMode === 'true') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, []) 
  return (
    <div className="text-textLight dark:text-textDark bg-primaryLight dark:bg-primaryDark">
      <Navbar />
    </div>
  )
}

export default App
