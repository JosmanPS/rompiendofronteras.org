import React from 'react'

type Props = {
  children: string,
  className?: string,
  mr?: boolean
}

export default function WhiteButton({ children, className, mr }: Props) {
  let classes = 'bg-white py-3 px-10 font-medium border-black border-2 hover:bg-black hover:text-white transition'
  if (mr) {
    classes = `${classes} mr-2`
  }
  return (
    <button className={classes}>{ children }</button>
  )
}
