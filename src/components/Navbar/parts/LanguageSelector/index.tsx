import { Dropdown } from '@/components'
import i18n, {
  ILanguageProps,
  LANGUAGES,
  handleChangeLanguage,
} from '@/translations/i18n'
import { useState } from 'react'

const LanguageSelector = () => {
  const [currentLanguage, setLanguage] = useState<ILanguageProps>({
    label: '',
    value: '',
    icon: '',
  })

  const updateSelector = () => {
    const foundLanguage = LANGUAGES.find(
      language => language.value === i18n.language,
    )
    const languageObject: ILanguageProps = foundLanguage || LANGUAGES[0]
    setLanguage(languageObject)
  }

  i18n.on('languageChanged', () => {
    updateSelector()
  })

  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-neutral-light">
        <img
          src={
            currentLanguage?.icon
              ? `https://flagcdn.com/${currentLanguage?.icon}.svg`
              : ''
          }
          className="h-full object-cover"
          alt="Brazil"
        />
      </div>

      <Dropdown
        options={LANGUAGES}
        initialValue={currentLanguage}
        position="right"
        innerWidth="w-[5.5rem]"
        onChange={option => {
          handleChangeLanguage(option)
        }}
      />
    </div>
  )
}

export default LanguageSelector
