import { INavbarProps } from './types'
import LanguageSelector from './parts/LanguageSelector'
import { Dropdown, Logo } from '..'
import { pageLinks } from '@/utils/constants'
import { useTranslation } from 'react-i18next'
import useBreakpoint from '@/utils/hooks/useBreakpoint'

const NavBar = ({ showLangSelector = false }: INavbarProps) => {
  const { t } = useTranslation('navbar')

  const isLargerThanMd = useBreakpoint('md')

  return (
    <nav className="absolute top-0 z-50 flex h-fit w-full select-none items-center justify-between bg-neutral-transparent px-8 py-10 lg:px-[4.75rem] lg:py-16">
      <Logo size={isLargerThanMd ? 'lg' : 'md'} />
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

        <div className="flex lg:hidden">
          <Dropdown
            className="w-fit"
            options={pageLinks?.map(link => ({
              label: link?.label,
              value: link?.to,
            }))}
            onChange={option => {
              const link = document.createElement('a')
              link.href = option?.value
              link.click()
            }}
          />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
