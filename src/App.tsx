import { useTranslation } from 'react-i18next'
import { NavBar } from './components'

function App() {
  const [t] = useTranslation('navbar')
  return (
    <>
      <NavBar
        showLangSelector
        links={[
          {
            label: t('Home'),
            to: '#',
          },
          {
            label: t('Skills'),
            to: '#',
          },
          {
            label: t('Experience'),
            to: '#',
          },
          {
            label: t('Contact'),
            to: '#',
          },
        ]}
      />
    </>
  )
}

export default App
