import { useState } from 'react'
import TableRow from './TableRow'
import ConfirmRow from './ConfirmRow'

const ConfirmTable = ({imageDATA, openClose}) => {

  return (
    <div className='select-none overflow-y-auto hover:max-h-[670px]'>
        <table className="w-full max-h-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-slate-700 dark:text-gray-400">
                <tr className='h-16'>
                    <th scope="col" className="px-16 py-3">
                        Image
                    </th>
                    <th scope="col" className="px-3 py-3">
                        Image-ID
                    </th>
                    <th scope="col" className="px-3 py-3">
                        Extension
                    </th>
                    <th scope="col" className="px-2 py-3">
                        Prediction Status
                    </th>
                    <th scope="col" className="px-2 py-3">
                        Real Diagnosis
                    </th>
                    <th scope="col" className="px-3 py-3">
                        Upload Date
                    </th>
                    <th scope="col" className="px-[0px] py-3">
                        Confirm Or Edit prediction
                    </th>
                </tr>
            </thead>
            <tbody>
                {imageDATA && imageDATA.map((upload, index) => (
                            ((upload.prediction != "None" && upload.realDiagnosis === "None") && <ConfirmRow key={index} upload={upload} trigger={openClose}/>)
                        ))}
            </tbody>
        </table>
    </div>
  )
}

export default ConfirmTable