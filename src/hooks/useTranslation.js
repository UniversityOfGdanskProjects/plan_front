import { useLocalStorage } from "./useStorage"
import * as translations from "../assets/translations"

export default function useTranslation() {
  const [language, setLanguage] = useLocalStorage("language", "pl")
  const [fallbackLanguage, setFallbackLanguage] = useLocalStorage(
    "fallbackLanguage",
    "pl"
  )

  const translate = key => {
    const keys = key.split(".")

    return (
      getNestedTranslation(language, keys) ??
      getNestedTranslation(fallbackLanguage, keys) ??
      key
    )
  }

  return {
    language,
    setLanguage,
    fallbackLanguage,
    setFallbackLanguage,
    t: translate,
  }
}

function getNestedTranslation(language, keys) {
  return keys.reduce((obj, key) => {
    return obj?.[key]
  }, translations[language])
}