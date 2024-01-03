import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en_us from './locale/en_us.json'
import pt_br from './locale/pt_br.json'

export const LANGUAGES = [
  { label: 'EN-US', value: 'en_us', icon: 'us' },
  { label: 'PT-BR', value: 'pt_br', icon: 'br' },
]

i18n.use(initReactI18next).init({
  lng: 'en_us',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en_us: en_us,
    pt_br: pt_br,
  },
})

export default i18n

export const handleChangeLanguage = (
  e: React.ChangeEvent<HTMLSelectElement>,
) => {
  const lang_code = e.target.value
  i18n.changeLanguage(lang_code)
}
