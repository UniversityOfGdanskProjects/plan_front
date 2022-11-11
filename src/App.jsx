import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { en_translation} from './assets/translations/en'
import { pl_translation } from './assets/translations/pl'
function App() {

  const [langFile, setLangFile] = useState(pl_translation)

  const toggleLang = () => {
    if (langFile === pl_translation) {
      setLangFile(en_translation)
    } else {
      setLangFile(pl_translation)
    }
  }

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
      <Navbar toggleLang={toggleLang} langFile={langFile}/>
    </div>
  )
}

export default App
