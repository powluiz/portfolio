import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en_us from './locale/en_us.json'
import pt_br from './locale/pt_br.json'

export interface ILanguageProps {
  label: string
  value: string
  icon: string
}

export const LANGUAGES: ILanguageProps[] = [
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
  option: ILanguageProps,
  event?: React.ChangeEvent<HTMLSelectElement>,
) => {
  if (event) {
    event.preventDefault()
    i18n.changeLanguage(event?.target?.value)
  } else {
    i18n.changeLanguage(option?.value)
  }
  localStorage.setItem('lang', i18n.language)
}
