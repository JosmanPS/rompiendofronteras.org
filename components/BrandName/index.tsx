import React from 'react'
import BrandLogoBlack from '../Brand/BrandLogoBlack'
import BrandLogoCircleBlack from '../Brand/BrandLogoCircleBlack'

export default function BrandName() {
  const size = 60

  const logosDict = {
    logoCircleBlack: <BrandLogoCircleBlack size={size} />,
    logoBlack: <BrandLogoBlack size={size} />
  }

  const brandLogoClass = 'logoCircleBlack'
  const Brand = logosDict[brandLogoClass]
  return Brand
}
