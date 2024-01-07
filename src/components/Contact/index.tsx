import DotPattern from '@/assets/DotPattern'
import { useTranslation } from 'react-i18next'
import { FormikValues, useFormik } from 'formik'
import * as yup from 'yup'
import { Button } from '..'
import { toast } from 'react-toastify'

const contactSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
})

const Contact = () => {
  const { t } = useTranslation('contact')

  const handleSubmit = (values: FormikValues) => {
    console.log(values)
    // toast.error(t('send-error-message'))

    // se sucesso
    toast.success(t('send-success-message'))
    formik?.resetForm()
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: contactSchema,
    onSubmit: values => {
      handleSubmit(values)
    },
  })

  const isButtonDisabled =
    !formik?.dirty ||
    Object.keys(formik?.errors).length > 0 ||
    formik?.isSubmitting

  return (
    <div id="section-contact" className="section-wrapper bg-neutral-white">
      <div className="content-wrapper flex h-full min-h-fit w-full flex-col gap-10 lg:gap-16">
        <div className="z-10 mx-auto flex w-fit max-w-[30rem] flex-col gap-3 lg:max-w-[38rem] lg:gap-4">
          <h1 className="text-center text-4xl font-extrabold text-primary-dark md:text-5xl">
            {t('Contact')}
          </h1>
          <h2 className="text-center text-lg font-light text-primary-low md:text-2xl">
            {t('ContactText')}
          </h2>
        </div>
        <form
          onSubmit={formik?.handleSubmit}
          noValidate
          className="mx-auto flex w-full max-w-[52rem] flex-col gap-8"
        >
          <div className="flex flex-col justify-between gap-4 md:flex-row md:gap-12">
            <div className="flex w-full flex-col gap-2">
              <label
                htmlFor="name"
                data-error={formik?.touched?.name && formik?.errors?.name}
                className="form-label data-[error]:text-error-base"
              >
                {t('NameLabel')}
              </label>
              <input
                data-error={formik?.touched?.name && formik?.errors?.name}
                className="form-input data-[error]:ring-1 data-[error]:ring-error-base"
                id="name"
                name="name"
                placeholder={t('NamePlaceholder')}
                type="name"
                onChange={formik?.handleChange}
                onBlur={formik?.handleBlur}
                value={formik?.values.name}
              />
              {formik?.touched?.name && formik?.errors?.name && (
                <h3 className="form-error">{t('error-message')}</h3>
              )}
            </div>

            <div className="flex w-full flex-col gap-2">
              <label
                htmlFor="email"
                data-error={formik?.touched?.email && formik?.errors?.email}
                className="form-label data-[error]:text-error-base"
              >
                {t('EmailLabel')}
              </label>
              <input
                data-error={formik?.touched?.email && formik?.errors?.email}
                className="form-input data-[error]:ring-1 data-[error]:ring-error-base"
                id="email"
                name="email"
                placeholder={t('EmailPlaceholder')}
                type="email"
                onChange={formik?.handleChange}
                onBlur={formik?.handleBlur}
                value={formik?.values.email}
              />
              {formik?.touched?.email && formik?.errors?.email && (
                <h3 className="form-error">{t('error-message-email')}</h3>
              )}
            </div>
          </div>

          <div className="flex w-full flex-col gap-2">
            <label
              htmlFor="message"
              data-error={formik?.touched?.message && formik?.errors?.message}
              className="form-label data-[error]:text-error-base"
            >
              {t('MessageLabel')}
            </label>
            <textarea
              data-error={formik?.touched?.message && formik?.errors?.message}
              className="form-input max-h-[25rem] min-h-32 data-[error]:ring-1 data-[error]:ring-error-base"
              id="message"
              name="message"
              placeholder={t('MessagePlaceholder')}
              onChange={formik?.handleChange}
              onBlur={formik?.handleBlur}
              value={formik?.values.message}
            />
            {formik?.touched?.message && formik?.errors?.message && (
              <h3 className="form-error">{t('error-message')}</h3>
            )}
          </div>
          <Button
            type="submit"
            className="mx-auto w-full rounded-full bg-primary-low px-8 md:w-fit"
            disabled={isButtonDisabled}
          >
            <h3 className="text-base">{t('submit')}</h3>
          </Button>
        </form>
      </div>
      <DotPattern className="absolute right-[2rem] top-[3rem] z-[1] animate-wiggle-pos opacity-30" />
      <DotPattern className="absolute bottom-[1.5rem] left-[4.5rem] z-[1] animate-wiggle-pos opacity-30" />
    </div>
  )
}

export default Contact
