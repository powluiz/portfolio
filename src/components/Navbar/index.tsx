import { INavbarProps } from './types'
import LanguageSelector from './parts/LanguageSelector'
import { Icon } from '..'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const NavBar = ({ links, showLangSelector = false }: INavbarProps) => {
  return (
    <nav className="bg-neutral-white flex w-full select-none items-center justify-between px-12 py-10 shadow-md lg:px-20 lg:py-16">
      <div className="relative font-black">
        <h1 className="text-primary-dark text-2xl">{`<Luiz />`}</h1>
      </div>
      <div className="flex-no-shrink hidden items-center justify-center md:flex md:gap-6 lg:gap-11">
        {links?.map(link => (
          <a
            key={`link-${link.label}`}
            href="#"
            className="flex-no-grow flex-no-shrink hover:bg-grey-dark relative flex items-center px-4 py-2 leading-normal text-white no-underline transition-all duration-300 ease-in-out hover:font-medium"
          >
            {link.label}
          </a>
        ))}

        {showLangSelector && <LanguageSelector />}
      </div>

      <div className="hover:bg-neutral-high flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all duration-300 ease-in-out md:hidden">
        <Icon icon={faBars} size="lg" />
      </div>
    </nav>
  )
}

export default NavBar
