import { LegacyRef } from 'react'

export interface ILogoProps {
  className?: string
  ref?: LegacyRef<SVGSVGElement> | undefined
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const sizeMap = {
  sm: 0.25,
  md: 0.5,
  lg: 0.75,
  xl: 1,
}

export const letterSpacingMap = {
  sm: '0.0625rem',
  md: '0.125rem',
  lg: '0.185rem',
  xl: '0.25rem',
}

export const chevronSpacingMap = {
  sm: '0.25rem',
  md: '0.45rem',
  lg: '0.6rem',
  xl: '0.75rem',
}

const LogoFull = ({ className, ref, size = 'xl' }: ILogoProps) => {
  return (
    <svg
      ref={ref}
      className={className}
      width={110 * sizeMap[size]}
      height={32 * sizeMap[size]}
      viewBox="0 0 110 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_110_3372)">
        <path
          d="M0 5.5249H9.28546V7.84627H11.6068V10.1676H13.9282V12.489H16.2495V14.8104H18.5709V19.4531H16.2495V21.7744H13.9282V24.0958H11.6068V26.4172H9.28546V28.7385H0V24.0958H2.32136V21.7744H4.64273V19.4531H6.96409V14.8104H4.64273V12.489H2.32136V10.1676H0V5.5249Z"
          fill="#7547FF"
        />
        <path d="M35.8767 32H31.8143V0H39.9391V32H35.8767Z" fill="#0F172A" />
        <path
          d="M64.6268 32.0002H48.3772V29.0869H44.3381V8.72852H52.4628V26.1387H60.5876V8.72852H68.7124V32.0002H64.6268Z"
          fill="#0F172A"
        />
        <path
          d="M77.1505 5.80341H73.123V0H81.2477V5.80341H77.1505ZM77.1505 31.9884H73.123V8.77476H81.2477V32L77.1505 31.9884Z"
          fill="#0F172A"
        />
        <path
          d="M105.889 31.9998H85.6119V26.1964H89.6743V23.2715H93.7251V17.41H97.7875V14.5432H85.6119V8.73975H109.986V14.5432H105.924V17.41H101.838V23.2134H97.7875V26.1268H109.951V31.9302L105.889 31.9998Z"
          fill="#0F172A"
        />
      </g>
      <defs>
        <clipPath id="clip0_110_3372">
          <rect width="109.951" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

const Chevron = ({ className, ref, size = 'xl' }: ILogoProps) => {
  return (
    <svg
      ref={ref}
      className={className}
      width={19 * sizeMap[size]}
      height={24 * sizeMap[size]}
      viewBox="0 0 19 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0.523926H9.28546V2.84529H11.6068V5.16665H13.9282V7.48802H16.2495V9.80938H18.5709V14.4521H16.2495V16.7735H13.9282V19.0948H11.6068V21.4162H9.28546V23.7376H0V19.0948H2.32136V16.7735H4.64273V14.4521H6.96409V9.80938H4.64273V7.48802H2.32136V5.16665H0V0.523926Z"
        fill="#7547FF"
      />
    </svg>
  )
}

const L = ({ className, ref, size = 'xl' }: ILogoProps) => {
  return (
    <svg
      ref={ref}
      className={className}
      width={9 * sizeMap[size]}
      height={32 * sizeMap[size]}
      viewBox="0 0 9 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.87646 32H0.814072V0H8.93885V32H4.87646Z" fill="#0F172A" />
    </svg>
  )
}

const U = ({ className, ref, size = 'xl' }: ILogoProps) => {
  return (
    <svg
      ref={ref}
      className={className}
      width={25 * sizeMap[size]}
      height={24 * sizeMap[size]}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.6267 23.9997H4.37717V21.0864H0.337997V0.728027H8.46277V18.1383H16.5875V0.728027H24.7123V23.9997H20.6267Z"
        fill="#0F172A"
      />
    </svg>
  )
}

const I = ({ className, ref, size = 'xl' }: ILogoProps) => {
  return (
    <svg
      ref={ref}
      className={className}
      width={9 * sizeMap[size]}
      height={32 * sizeMap[size]}
      viewBox="0 0 9 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.15052 5.80341H0.122955V0H8.24773V5.80341H4.15052ZM4.15052 31.9884H0.122955V8.77476H8.24773V32L4.15052 31.9884Z"
        fill="#0F172A"
      />
    </svg>
  )
}

const Z = ({ className, ref, size = 'xl' }: ILogoProps) => {
  return (
    <svg
      ref={ref}
      className={className}
      width={25 * sizeMap[size]}
      height={24 * sizeMap[size]}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.889 23.9993H0.6119V18.1959H4.67429V15.271H8.72506V9.40955H12.7875V6.54267H0.6119V0.739258H24.9862V6.54267H20.9238V9.40955H16.8382V15.213H12.7875V18.1263H24.9514V23.9297L20.889 23.9993Z"
        fill="#0F172A"
      />
    </svg>
  )
}

export { LogoFull, Chevron, L, U, I, Z }
