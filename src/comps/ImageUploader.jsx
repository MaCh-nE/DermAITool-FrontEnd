import {React, useState} from 'react'
import { imageUploadService } from '../services/ImageUploadService';

const ImageUploader = ({id, setUpdate}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showSubmit, setShowSubmit] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setShowSubmit(true);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('image', selectedFile);

    imageUploadService(id, formData).then((response) => {
      console.log('File uploaded:', response.data);
      setUpdate(Math.random())
    }).catch((error) => {
      console.error('Upload failed:', error);
    });

    setSelectedFile(null);
    setShowSubmit(false);
  };

  return (
    <div className='select-none flex flex-col w-full'>
      <div className="flex w-full h-full">
        <label for="dropzone-file" className="flex flex-col ml-64 mt-[80px] items-center justify-center w-8/12 h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload new image</span> or drag & drop</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">PNG / JPG images only</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange}/>
        </label>
      </div>
      {showSubmit && (
        <button onClick={handleSubmit} class="inline-flex items-center justify-center py-[2px] my-[50px] mx-[730px] overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <span class="relative px-14 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Submit
          </span>
        </button>
      )} 
    </div>
  )
}

export default ImageUploader;