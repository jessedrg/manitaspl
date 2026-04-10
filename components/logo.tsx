export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* House outline */}
      <path 
        d="M24 4L4 20V44H18V30H30V44H44V20L24 4Z" 
        fill="#0f4a28"
      />
      {/* Wrench/tool symbol */}
      <path 
        d="M24 18C21.79 18 20 19.79 20 22C20 23.28 20.62 24.42 21.56 25.14L19 32H29L26.44 25.14C27.38 24.42 28 23.28 28 22C28 19.79 26.21 18 24 18Z" 
        fill="#d97706"
      />
      {/* Window details */}
      <rect x="21" y="34" width="6" height="6" fill="#16a34a" />
    </svg>
  )
}

export function LogoMark({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Stylized M with tool element */}
      <rect width="32" height="32" rx="8" fill="#0f4a28" />
      <path 
        d="M7 24V12L11 8L16 14L21 8L25 12V24H21V16L16 21L11 16V24H7Z" 
        fill="white"
      />
      <circle cx="16" cy="11" r="2" fill="#d97706" />
    </svg>
  )
}
