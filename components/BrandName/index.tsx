import React from 'react'
import BrandLogoBlack from '../Brand/BrandLogoBlack'
import BrandLogoCircleBlack from '../Brand/BrandLogoCircleBlack'
import BrandLogoCircleWhite from '../Brand/BrandLogoCircleWhite'
import BrandLogoWhite from '../Brand/BrandLogoWhite'

export default function BrandName() {
  const size = 60

  const logosDict = {
    logoCircleBlack: <BrandLogoCircleBlack size={size} />,
    logoBlack: <BrandLogoBlack size={size} />,
    logoWhite: <BrandLogoWhite size={size} />,
    logoCircleWhite: <BrandLogoCircleWhite size={size} />
  }

  const brandLogoClass = 'logoCircleWhite'
  const Brand = logosDict[brandLogoClass]
  return Brand
}
