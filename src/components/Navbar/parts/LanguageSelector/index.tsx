import i18n, { LANGUAGES, handleChangeLanguage } from '@/translations/i18n'

const LanguageSelector = () => {
  const currentLanguage = i18n.language
  const languageObject = LANGUAGES.find(
    language => language.value === currentLanguage,
  )

  return (
    <div className="flex flex-row gap-2">
      <div className="bg-neutral-light flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
        <img
          src={`https://flagcdn.com/${languageObject?.icon}.svg`}
          className="h-full object-cover"
          alt="Brazil"
        />
      </div>
      <select
        defaultValue={i18n.language}
        onChange={handleChangeLanguage}
        className="outline-none"
      >
        {LANGUAGES.map(({ label, value }) => (
          <option key={`select-option-${label}`} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default LanguageSelector
