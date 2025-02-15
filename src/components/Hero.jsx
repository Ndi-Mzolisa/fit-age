import React from 'react'
import Button from "./Button"
import fitAgeBannerImage from '../assets/fit-age-banner-image.jpg'

export default function Hero() {
  return (

    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[750px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>DARE TO ENTER THE...</p>
        <h1 className="p-1 font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl border-b-[1px] border-b-[#faa560] w-full">
          <span className="text-red-400">AGE</span> OF GODS
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">Only those who dare to attain <span className="text-red-400 font-medium">legendary strength</span> should click below and accept all risk of becoming so <span className="text-red-400 font-medium">tremendously swole</span> & <span className="text-red-400 font-medium">jacked</span> that the sun sets at your wake. If the earth trembles at your steps & kings bow heads at the figure of a god, it will be yours if you accept it. </p>
      
      <Button func={() =>{
        window.location.href = '#generate'
      }} 
        text={"Accept & Get Started"}>
      </Button>

      <div className="border border-solid border-white rounded-[1rem]">
        <img src={fitAgeBannerImage} alt="image of a very fit viking man" width="450" height="auto" className="border border-solid border-white rounded-[1rem]" />
      </div>
  </div>
      
  )
}
