import React from 'react'
import fitAgeLogoImage from '../assets/fit-age-logo-image.png'

export default function Nav() {
  return (
    <div className="py-10 px-4 pb-32 w-full md:w-1/2 md:px-20 rounded-[0.5rem]">
        <img src={fitAgeLogoImage} alt="fit-age logo image" width="auto" height="auto" className="rounded-[0.5rem]"/>
    </div>
  )
}
