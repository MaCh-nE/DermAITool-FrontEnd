import React from 'react'
import { useState, useEffect } from 'react';
import formatDate from '../jsFunctions/DateFormatter';
import confirm from "../assets/UI/confirm.png"
import edit from "../assets/UI/edit.png"

const ConfirmRow = ({upload, trigger}) => {

  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    import(`../repo_clone/${upload.imageId}.jpg`).then((module) => {
      setImageSrc(module.default);
    }).catch((error) => {
      console.error('Error loading image:', error);
    });
  }, []);

  return (
    <tr className="select-none cursor-pointer h-[148px] bg-white border-b dark:bg-slate-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="p-4">
            <img src={imageSrc} className="w-16 md:w-32 max-w-full max-h-full"/>
        </td>
        <td className="px-3 py-4 font-semibold text-gray-900 dark:text-white">
            {upload.imageId}
        </td>
        <td className="px-3 py-4">
            {upload.extension}
        </td>
        <td className="px-2 py-4 font-semibold text-gray-900 dark:text-white">
            <div className="flex items-center">
                <div className={upload.prediction === "None" ?
                 "h-2.5 w-2.5 rounded-full bg-red-500 me-2" : "h-2.5 w-2.5 rounded-full bg-green-500 me-2"}></div> {upload.prediction}
            </div>
        </td>
        <td className="px-2 py-4 font-semibold text-gray-900 dark:text-white">
            <div className="flex items-center">
                <div className={upload.realDiagnosis === "None" ?
                 "h-2.5 w-2.5 rounded-full bg-red-500 me-2" : "h-2.5 w-2.5 rounded-full bg-green-500 me-2"}></div> {upload.realDiagnosis}
            </div>
        </td>
        <td className="px-3 py-4">
            {formatDate(upload.submissionDate)}
        </td>
        <td className="py-4">
            <div className='flex'>
              <button onClick={() => trigger([true, "Confirm", upload])} type="button" className='w-[58px] ml-[20px]'>
                <img src={confirm}/>
              </button>
              <button onClick={() => trigger([true, "Edit", upload])} type="button" className='w-[50px] ml-[30px]'>
                <img src={edit}/>
              </button>
            </div>
        </td>
    </tr>
  )
}

export default ConfirmRow