import { SVGProps } from 'react'

export const Icons = {
  User: ({ ...props }: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
    </svg>
  ),
  Lock: ({ ...props }: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  Show: ({ ...props }: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  Hide: ({ ...props }: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </svg>
  ),
  Logout: ({ ...props }: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  ),
  Message: ({ ...props }: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),

  Github: ({ ...props }: SVGProps<SVGSVGElement>) => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M27 0H5C2.23858 0 0 2.23858 0 5V27C0 29.7614 2.23858 32 5 32H27C29.7614 32 32 29.7614 32 27V5C32 2.23858 29.7614 0 27 0Z"
        fill="#231E1B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.9755 8.192C11.5719 8.192 8 11.7639 8 16.1675C8 19.6905 10.2997 22.6752 13.4312 23.7516C13.8226 23.8006 13.9694 23.5559 13.9694 23.3602C13.9694 23.1645 13.9694 22.6752 13.9694 21.9902C11.7676 22.4795 11.2783 20.9137 11.2783 20.9137C10.9358 19.9841 10.3976 19.7394 10.3976 19.7394C9.66361 19.2501 10.4465 19.2501 10.4465 19.2501C11.2294 19.299 11.6697 20.0819 11.6697 20.0819C12.4037 21.3052 13.5291 20.9626 13.9694 20.7669C14.0183 20.2287 14.263 19.8862 14.4587 19.6905C12.6972 19.4948 10.8379 18.8097 10.8379 15.7272C10.8379 14.8464 11.1315 14.1614 11.6697 13.5743C11.6208 13.4275 11.3272 12.5957 11.7676 11.5192C11.7676 11.5192 12.4526 11.3235 13.9694 12.351C14.6055 12.1553 15.2905 12.1064 15.9755 12.1064C16.6606 12.1064 17.3456 12.2042 17.9817 12.351C19.4985 11.3235 20.1835 11.5192 20.1835 11.5192C20.6239 12.5957 20.3303 13.4275 20.2813 13.6232C20.7706 14.1614 21.1131 14.8954 21.1131 15.7761C21.1131 18.8587 19.2538 19.4948 17.4924 19.6905C17.7859 19.9351 18.0306 20.4244 18.0306 21.1584C18.0306 22.2348 18.0306 23.0666 18.0306 23.3602C18.0306 23.5559 18.1774 23.8006 18.5688 23.7516C21.7492 22.6752 24 19.6905 24 16.1675C23.9511 11.7639 20.3792 8.192 15.9755 8.192Z"
        fill="white"
      />
    </svg>
  ),

  Google: ({ ...props }: SVGProps<SVGSVGElement>) => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M32 5C32 2.23858 29.7614 0 27 0H5C2.23858 0 0 2.23858 0 5V27C0 29.7614 2.23858 32 5 32H27C29.7614 32 32 29.7614 32 27V5Z"
        fill="#6fa2f422"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.8299 16.1818C23.8299 15.6146 23.779 15.0691 23.6845 14.5455H16.1499V17.64H20.4554C20.2699 18.64 19.7063 19.4873 18.859 20.0546V22.0619H21.4445C22.9572 20.6691 23.8299 18.6182 23.8299 16.1818Z"
        fill="#4285F4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.1496 24C18.3096 24 20.1205 23.2836 21.4442 22.0618L18.8587 20.0545C18.1423 20.5345 17.226 20.8181 16.1496 20.8181C14.066 20.8181 12.3023 19.4109 11.6732 17.52H9.00049V19.5927C10.3169 22.2072 13.0223 24 16.1496 24Z"
        fill="#34A853"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.6735 17.52C11.5135 17.04 11.4226 16.5272 11.4226 16C11.4226 15.4727 11.5135 14.96 11.6735 14.48V12.4072H9.00081C8.45899 13.4872 8.1499 14.709 8.1499 16C8.1499 17.2909 8.45899 18.5127 9.00081 19.5927L11.6735 17.52Z"
        fill="#FBBC05"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.1496 11.1818C17.3241 11.1818 18.3787 11.5855 19.2078 12.3782L21.5023 10.0836C20.1169 8.79273 18.306 8 16.1496 8C13.0223 8 10.3169 9.79273 9.00049 12.4073L11.6732 14.48C12.3023 12.5891 14.066 11.1818 16.1496 11.1818Z"
        fill="#EA4335"
      />
    </svg>
  ),
  Instagram: ({ ...props }: SVGProps<SVGSVGElement>) => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M27 0H5C2.23858 0 0 2.23858 0 5V27C0 29.7614 2.23858 32 5 32H27C29.7614 32 32 29.7614 32 27V5C32 2.23858 29.7614 0 27 0Z"
        fill="#f000748a"
      />
      <path
        d="M16 9.2C18.2 9.2 18.5 9.2 19.4 9.2C20.2 9.2 20.6 9.4 20.9 9.5C21.3 9.7 21.6 9.8 21.9 10.1C22.2 10.4 22.4 10.7 22.5 11.1C22.6 11.4 22.7 11.8 22.8 12.6C22.8 13.5 22.8 13.7 22.8 16C22.8 18.3 22.8 18.5 22.8 19.4C22.8 20.2 22.6 20.6 22.5 20.9C22.3 21.3 22.2 21.6 21.9 21.9C21.6 22.2 21.3 22.4 20.9 22.5C20.6 22.6 20.2 22.7 19.4 22.8C18.5 22.8 18.3 22.8 16 22.8C13.7 22.8 13.5 22.8 12.6 22.8C11.8 22.8 11.4 22.6 11.1 22.5C10.7 22.3 10.4 22.2 10.1 21.9C9.8 21.6 9.6 21.3 9.5 20.9C9.4 20.6 9.3 20.2 9.2 19.4C9.2 18.5 9.2 18.3 9.2 16C9.2 13.7 9.2 13.5 9.2 12.6C9.2 11.8 9.4 11.4 9.5 11.1C9.7 10.7 9.8 10.4 10.1 10.1C10.4 9.8 10.7 9.6 11.1 9.5C11.4 9.4 11.8 9.3 12.6 9.2C13.5 9.2 13.8 9.2 16 9.2ZM16 7.7C13.7 7.7 13.5 7.7 12.6 7.7C11.7 7.7 11.1 7.9 10.6 8.1C10.1 8.3 9.6 8.6 9.1 9.1C8.6 9.6 8.4 10 8.1 10.6C7.9 11.1 7.8 11.7 7.7 12.6C7.7 13.5 7.7 13.8 7.7 16C7.7 18.3 7.7 18.5 7.7 19.4C7.7 20.3 7.9 20.9 8.1 21.4C8.3 21.9 8.6 22.4 9.1 22.9C9.6 23.4 10 23.6 10.6 23.9C11.1 24.1 11.7 24.2 12.6 24.3C13.5 24.3 13.8 24.3 16 24.3C18.2 24.3 18.5 24.3 19.4 24.3C20.3 24.3 20.9 24.1 21.4 23.9C21.9 23.7 22.4 23.4 22.9 22.9C23.4 22.4 23.6 22 23.9 21.4C24.1 20.9 24.2 20.3 24.3 19.4C24.3 18.5 24.3 18.2 24.3 16C24.3 13.8 24.3 13.5 24.3 12.6C24.3 11.7 24.1 11.1 23.9 10.6C23.7 10.1 23.4 9.6 22.9 9.1C22.4 8.6 22 8.4 21.4 8.1C20.9 7.9 20.3 7.8 19.4 7.7C18.5 7.7 18.3 7.7 16 7.7Z"
        fill="white"
      />
      <path
        d="M16 11.7C13.6 11.7 11.7 13.6 11.7 16C11.7 18.4 13.6 20.3 16 20.3C18.4 20.3 20.3 18.4 20.3 16C20.3 13.6 18.4 11.7 16 11.7ZM16 18.8C14.5 18.8 13.2 17.6 13.2 16C13.2 14.5 14.4 13.2 16 13.2C17.5 13.2 18.8 14.4 18.8 16C18.8 17.5 17.5 18.8 16 18.8Z"
        fill="white"
      />
      <path
        d="M20.4 12.6C20.9523 12.6 21.4 12.1523 21.4 11.6C21.4 11.0477 20.9523 10.6 20.4 10.6C19.8477 10.6 19.4 11.0477 19.4 11.6C19.4 12.1523 19.8477 12.6 20.4 12.6Z"
        fill="white"
      />
    </svg>
  ),
  MoreVertical: ({ ...props }: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  ),

  Settings: ({ ...props }: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  Moon: ({ ...props }: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  ),
  Sun: ({ ...props }: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 8a2 2 0 1 0 4 4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  ),

  linkedin: ({ ...props }: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
