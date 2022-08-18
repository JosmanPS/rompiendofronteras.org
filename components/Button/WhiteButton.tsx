import React from 'react'
import { useRouter } from 'next/router'

type Props = {
  children: string
  className?: string
  href?: string
  onClick?: () => void
  blank?: boolean
}

export default function WhiteButton({
  children,
  className,
  href,
  onClick,
  blank,
}: Props) {
  const router = useRouter()

  const navigate = () => {
    if (onClick) {
      onClick()
    }

    if (href) {
      router.push(href)
    }
  }

  let classes = `bg-white py-3 px-10 font-medium border-black border-2 text-black hover:bg-black hover:text-white transition ${className}`

  return blank ? (
    <a className={classes} href={href} target='_blank'>
      {children}
    </a>
  ) : (
    <button className={classes} onClick={navigate}>
      {children}
    </button>
  )
}
