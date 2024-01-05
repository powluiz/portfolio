import { INavbarProps } from './types'
import LanguageSelector from './parts/LanguageSelector'
import { Icon } from '..'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { pageLinks } from '@/utils/constants'
import { useTranslation } from 'react-i18next'
import Logo from '@/assets/Logo'

const NavBar = ({ showLangSelector = false }: INavbarProps) => {
  const { t } = useTranslation('navbar')

  return (
    <nav className="absolute top-0 z-50 flex h-fit w-full select-none items-center justify-between bg-neutral-transparent px-8 py-10 lg:px-[4.75rem] lg:py-16">
      <Logo className="h-8 w-auto" />
      <div className="flex-no-shrink hidden items-center justify-center md:flex md:gap-6 lg:gap-11">
        {pageLinks?.map(link => (
          <a
            key={`link-${link?.label}`}
            href={link?.to}
            className="flex-no-grow flex-no-shrink hover:bg-grey-dark relative flex items-center px-4 py-2 leading-normal text-primary-low no-underline transition-all duration-300 ease-in-out hover:font-medium"
          >
            {t(link?.label)}
          </a>
        ))}
      </div>
      {showLangSelector && <LanguageSelector />}

      <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all duration-300 ease-in-out hover:bg-neutral-high md:hidden">
        <Icon icon={faBars} size="lg" />
      </div>
    </nav>
  )
}

export default NavBar
