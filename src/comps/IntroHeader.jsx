import React from 'react'

const IntroHeader = ({main, details}) => {
  return (
    <div className='flex ml-20 mt-7 flex-row w-full'>
        <h1 className="mt-1 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-lime-400 from-sky-300">{main}</span></h1>
        <p className="text-lg font-normal mt-7 ml-10 text-gray-500 lg:text-xl dark:text-gray-400"> {details} </p>
    </div>
  )
}

export default IntroHeader;