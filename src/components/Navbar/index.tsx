import { INavbarProps } from './types'
import LanguageSelector from './parts/LanguageSelector'
import { Icon, Logo } from '..'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { pageLinks } from '@/utils/constants'
import { useTranslation } from 'react-i18next'

const NavBar = ({ showLangSelector = false }: INavbarProps) => {
  const { t } = useTranslation('navbar')

  return (
    <nav className="absolute top-0 z-50 flex h-fit w-full select-none items-center justify-between bg-neutral-transparent px-8 py-10 lg:px-[4.75rem] lg:py-16">
      <Logo />
      <div className="hidden items-center justify-center md:gap-2 lg:flex xl:gap-6">
        {pageLinks?.slice(1)?.map(link => (
          <a
            key={`link-${link?.label}`}
            href={link?.to}
            className="flex-no-grow flex-no-shrink hover:bg-grey-dark relative flex items-center px-4 py-2 leading-normal text-primary-low no-underline transition-all duration-300 ease-in-out hover:font-medium"
          >
            {t(link?.label)}
          </a>
        ))}
      </div>

      <div className="flex items-center justify-center gap-3">
        {showLangSelector && <LanguageSelector />}

        <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all duration-300 ease-in-out hover:bg-neutral-high lg:hidden">
          <Icon icon={faBars} size="lg" />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
