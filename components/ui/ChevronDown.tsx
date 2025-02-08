
import { FC, SVGProps } from "react";



const ChevronDown: FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (

  <svg

    className={className}

    {...props}

    viewBox="0 0 24 24"

    fill="none"

    xmlns="http://www.w3.org/2000/svg"

  >

    <path

      d="M7 10l5 5 5-5"

      stroke="currentColor"

      strokeWidth="2"

      strokeLinecap="round"

      strokeLinejoin="round"

    />

  </svg>

);



export { ChevronDown };