import i18n, { LANGUAGES } from '@/translations/i18n'
import { EMAIL_ADDRESS, pageLinks, socialLinks } from '@/utils/constants'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation('footer')
  return (
    <div className="section-wrapper bg-primary-low">
      <div className="mb-24 mt-32 flex flex-row gap-[3.5rem] px-8 md:px-[4.75rem]">
        <div className="flex flex-col gap-[3.5rem]">
          <div className="flex flex-col gap-4">
            <h1 className="text-base font-semibold text-neutral-base md:text-xl">
              {t('social-media')}
            </h1>
            <div className="flex w-fit items-center justify-center gap-3">
              {socialLinks?.map(link => (
                <a
                  key={`link-${link?.url}`}
                  href={link?.url}
                  target="_blank"
                  className="anim-social-icon hover:brightness-125"
                >
                  {link?.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-base font-semibold text-neutral-base md:text-xl">
              {t('sections')}
            </h1>
            <div className="flex w-fit flex-col gap-3">
              {pageLinks?.map(link => (
                <a
                  key={`link-${link?.label}`}
                  href={link?.to}
                  className="flex-no-grow flex-no-shrink hover:bg-grey-dark flex items-center text-sm text-gray-300 no-underline hover:text-gray-500 md:text-base"
                >
                  {t(link?.label)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[3.5rem]">
          <div className="flex flex-col gap-4">
            <h1 className="text-base font-semibold text-neutral-base md:text-xl">
              {t('contact-info')}
            </h1>
            <div className="flex w-fit flex-col gap-3">
              <a
                key={`link-email-address`}
                href={`mailto:${EMAIL_ADDRESS}`}
                className="flex-no-grow flex-no-shrink hover:bg-grey-dark flex items-center text-wrap text-sm text-gray-300 no-underline hover:text-gray-500 md:text-base"
              >
                {EMAIL_ADDRESS}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-base font-semibold text-neutral-base md:text-xl">
              {t('lang')}
            </h1>
            <div className="flex w-fit flex-col gap-3">
              {LANGUAGES?.map(link => (
                <h3
                  key={`link-${link?.label}`}
                  className="flex-no-grow flex-no-shrink hover:bg-grey-dark flex cursor-pointer items-center text-sm text-gray-300 no-underline hover:text-gray-500 md:text-base"
                  onClick={() => {
                    i18n.changeLanguage(link?.value)
                  }}
                >
                  {t(link?.label)}
                </h3>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
