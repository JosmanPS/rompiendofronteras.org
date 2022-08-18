import React, { useState } from 'react'
import BrandName from '../BrandName'
import Container from '../Container'
import NavLink from './NavLink'
import ToggleButton from './ToggleButton'
import links from './links'

export default function Navigator() {
  const [showMobileNav, setShowMobileNav] = useState(false)

  const onToggleNav = () => {
    setShowMobileNav(!showMobileNav)
  }

  return (
    <nav className="bg-black">
      <Container>
        <div className="container flex flex-wrap justify-between items-center mx-auto pt-6 pb-6">
          <BrandName />
          <div className="flex flex-row md:hidden">
            <ToggleButton onClick={onToggleNav} />
          </div>
          <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium items-center text-white">
              {/* <DarkModeSwitch /> */}
              {links.map((link) => (
                <li key={link.href}>
                  <NavLink href={link.href}>{link.text}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          {showMobileNav && (
            <div className="w-full md:hidden" id="mobile-menu">
              <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium text-white">
                {links.map((link) => (
                  <li>
                    <NavLink href={link.href}>
                      {link.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Container>
    </nav>
  )
}
