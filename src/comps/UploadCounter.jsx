import React from 'react'

const UploadCounter = ({count}) => {
  return (
    <div className='flex flex-col w-full'>
      <div className="flex w-full h-full">
        <label className="flex flex-col mx-auto mt-[60px] items-center justify-center w-[1200px] h-[200px] border-2 border-gray-300 rounded-lg bg-gray-500">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <p className="mb-2 text-sm"><span className="text-lg font-bold underline underline-offset-8">TOTAL UPLOADS</span></p>
                <p className="mt-[40px] text-3xl text-slate-900 dark:text-gray-900">{count}</p>
            </div>
        </label>
      </div> 
    </div>
  )
}

export default UploadCounter