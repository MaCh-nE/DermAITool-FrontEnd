import React from 'react'

const ModelSpecsComponent2 = () => {
  return (
    <div className="flex flex-col w-[220px] h-[140px] mt-[30px] mx-[65px] border-double border-4 border-y-gray-400 bg-black rounded-lg">
      <h1 className='font-mono flex justify-between underline text-sm text-gray-100 mt-[10px] ml-[20px]'>Model Specs:</h1>
      <p className='flex justify-between font-sans text-xs text-gray-500 mt-[7px] ml-[20px]'>Spec :<span className='text-gray-100 mr-[20px] font-extrabold'>model850(32_85)</span></p>
      <p className='flex justify-between font-sans text-xs text-gray-500 mt-[7px] ml-[20px]'>Dataset :<span className='text-gray-100 mr-[20px] font-extrabold'>HAM10000</span></p>
      <p className='flex justify-between font-sans text-xs text-gray-500 mt-[7px] ml-[20px]'>Classes :<span className='text-gray-100 mr-[20px] font-extrabold'>7</span></p>
      <p className='flex justify-between font-sans text-xs text-gray-500 mt-[7px] ml-[20px]'>Accuracy :<span className='text-gray-100 mr-[20px] font-extrabold'>≈ 86%</span></p>
    </div>
  )
}

export default ModelSpecsComponent2