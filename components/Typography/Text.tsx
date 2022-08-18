import React from 'react'

type Props = {
  children: React.ReactNode,
  className?: string
}

export default function Text({ children, className }: Props) {
  const classes = `text-lg ${className}`
  return (
    <p className={classes}>{ children }</p>
  )
}
