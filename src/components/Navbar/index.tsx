import { INavbarProps } from './types'
import LanguageSelector from './parts/LanguageSelector'
import { Dropdown, Logo } from '..'
import { pageLinks } from '@/utils/constants'
import { useTranslation } from 'react-i18next'
import useBreakpoint from '@/utils/hooks/useBreakpoint'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const NavBar = ({ showLangSelector = false }: INavbarProps) => {
  const isLargerThanMd = useBreakpoint('md')
  const { t } = useTranslation('navbar')

  const ctxWrapper = useRef(null)
  const tl = useRef<any>()

  useEffect(() => {
    tl.current = gsap.timeline({
      defaults: {},
      delay: 1,
    })

    const ctx = gsap.context(() => {
      tl.current
        .fromTo(
          '.anim-navlink',
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            ease: 'power3.out',
            stagger: 0.1,
          },
        )
        .fromTo(
          '.anim-lang-selector',
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            ease: 'power3.out',
          },
        )
    }, ctxWrapper)

    return () => ctx.revert()
  }, [])

  return (
    <nav
      ref={ctxWrapper}
      className="absolute top-0 z-50 flex h-[6rem] w-full select-none items-center justify-between bg-neutral-transparent px-8 lg:h-[8rem] lg:px-[4.75rem]"
    >
      <Logo size={isLargerThanMd ? 'lg' : 'md'} />
      <div className="hidden items-center justify-center md:gap-2 lg:flex xl:gap-6">
        {pageLinks?.slice(1)?.map(link => (
          <a
            key={`link-${link?.label}`}
            href={link?.to}
            className="anim-navlink flex-no-grow flex-no-shrink hover:bg-grey-dark flex items-center px-4 py-2 leading-normal text-primary-low no-underline hover:text-gray-400"
          >
            {t(link?.label)}
          </a>
        ))}
      </div>

      <div className="anim-lang-selector flex items-center justify-center gap-3">
        {showLangSelector && <LanguageSelector />}

        <div className="flex lg:hidden">
          <Dropdown
            className="w-fit"
            icon={faBars}
            options={pageLinks?.map(link => ({
              label: t(link?.label),
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
