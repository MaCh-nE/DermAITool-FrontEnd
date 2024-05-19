import React, { useEffect, useState } from 'react'
import ImageComponent from './ImageComponent'
import ModelSpecsComponent from './ModelSpecsComponent'
import getUserByIdService from '../services/GetUserByIdService';
import formatDate from '../jsFunctions/DateFormatter';

const ImageCardComponent = ({imageUpload, type}) => {

  const [userData, setUserData] = useState("");

  useEffect(() => {
    getUserByIdService(imageUpload.userId).then((response) => {
      setUserData(response.data)
    }).catch((error) => {
      console.error(error);
    })
  },[])

  return (
    userData ? (<div className="select-none border-solid border-2 border-gray-500 w-[450px] h-[640px] my-8 mx-12 bg-gray-700 rounded-lg">
        <ImageComponent imageId={imageUpload.imageId}/>
        <p className='tracking-wide font-sans text-gray-400 italic mt-[10px] ml-[30px]'>User</p>
        <p className='font-extrabold text-gray-300 text-xl ml-[30px] font-mono'>{userData.firstName + " " + userData.lastName}<span className='text-gray-500'> #id-{imageUpload.userId}</span></p>
        <p className='flex justify-between font-sans text-sm text-gray-500 mt-[37px] ml-[20px]'>Upload ID :<span className='text-gray-100 mr-[20px] font-extrabold'>{imageUpload.imageId}</span></p>
        <p className='flex justify-between font-sans text-sm text-gray-500 mt-[10px] ml-[20px]'>Extension :<span className='text-gray-100 mr-[20px] font-extrabold'>{imageUpload.extension}</span></p>
        <p className='flex justify-between font-sans text-sm text-gray-500 mt-[10px] ml-[20px]'>Submission Date :<span className='text-gray-100 mr-[20px] font-extrabold'>{formatDate(imageUpload.submissionDate)}</span></p>
        <p className='font-sans text-sm text-gray-400 mt-[20px] ml-[20px]'>-  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -</p>
        <p className='flex justify-between italic font-sans text-lg text-gray-500 mt-[10px] ml-[20px]'>Prediction Style :<span className='text-lg text-gray-100 mr-[20px] font-extrabold'>{type}</span></p>
        <ModelSpecsComponent/>
    </div>) : <></>
  )
}

export default ImageCardComponent