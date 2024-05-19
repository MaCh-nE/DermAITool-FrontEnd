import React from 'react'

const ModelSpecsComponent = () => {
  return (
    <div className="flex flex-col w-[320px] h-[200px] mt-[30px] mx-[65px] border-double border-4 border-y-gray-400 bg-black rounded-lg">
      <h1 className='font-mono flex justify-between underline text-lg text-gray-100 mt-[10px] ml-[20px]'>Model Specs:</h1>
      <p className='flex justify-between font-sans text-sm text-gray-500 mt-[15px] ml-[20px]'>Model Specification :<span className='text-gray-100 mr-[20px] font-extrabold'>model850(32_85)</span></p>
      <p className='flex justify-between font-sans text-sm text-gray-500 mt-[15px] ml-[20px]'>Training Dataset :<span className='text-gray-100 mr-[20px] font-extrabold'>HAM10000</span></p>
      <p className='flex justify-between font-sans text-sm text-gray-500 mt-[15px] ml-[20px]'>Classes :<span className='text-gray-100 mr-[20px] font-extrabold'>7</span></p>
      <p className='flex justify-between font-sans text-sm text-gray-500 mt-[15px] ml-[20px]'>Accuracy :<span className='text-gray-100 mr-[20px] font-extrabold'>≈ 86%</span></p>
    </div>
  )
}

export default ModelSpecsComponent