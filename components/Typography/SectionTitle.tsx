import React from 'react'

type Props = {
  children: string,
  className?: string
}

export default function SectionTitle({ children, className }: Props) {
  const classes = `text-5xl font-extrabold tracking-tighter ${className}`
  return (
    <h2 className={classes}>{ children }</h2>
  )
}
