import { Dropdown } from '@/components'
import i18n, { LANGUAGES, handleChangeLanguage } from '@/translations/i18n'

const LanguageSelector = () => {
  const currentLanguage = i18n.language
  const languageObject = LANGUAGES.find(
    language => language.value === currentLanguage,
  )

  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-neutral-light">
        <img
          src={`https://flagcdn.com/${languageObject?.icon}.svg`}
          className="h-full object-cover"
          alt="Brazil"
        />
      </div>

      <Dropdown
        options={LANGUAGES}
        position="right"
        innerWidth="w-fit"
        onChange={option => {
          handleChangeLanguage(option)
        }}
      />
    </div>
  )
}

export default LanguageSelector
