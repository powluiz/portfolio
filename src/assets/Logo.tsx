interface ILogoProps {
  className?: string
}

const Logo = ({ className }: ILogoProps) => {
  return (
    <svg
      className={className}
      width="110"
      height="32"
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

export default Logo
