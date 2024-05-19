import React from 'react'

const MainUploadsContainer = ({content}) => {
  return (
    <div className="overflow-hidden mx-8 my-8 items-center justify-center w-[1630px] h-[670px] border-2 border-gray-300 rounded-lg bg-gray-50 dark:hover:bg-bray-800 dark:bg-slate-900 dark:border-gray-900 dark:hover:border-gray-500 dark:hover:bg-slate-900">
      {content}
    </div>
  )
}

export default MainUploadsContainer