import React, { useEffect, useState } from 'react'
import ImageCardComponent from './ImageCardComponent'
import SkinLesionProbabilityComponent from './SkinLesionProbabilityComponent'
import getImagePredictionsService from '../services/GetImagePredictionsService'
import PredictionLoading from './PredictionLoading'
import saveImagePrediction from '../services/SavePredictionService'

const MultiplePredictionsInterface = ({setBack, userId, imageUpload, setUpdate}) => {
  const [dataFetch, setDataFetch] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getImagePredictionsService(userId, imageUpload.imageId).then((response) => {
      setData(response.data);
    }).catch((error) => {
      console.error("Error uploading image probabilities prediction.")
    }).finally(() => {
      setTimeout(() => {
        setDataFetch(true);
      }, 3000);
    })
  }, [])

  return (
    dataFetch ? (<>
      <div className='flex flex-row'>
        <div className="flex flex-row overflow-hidden mx-8 my-8 w-[1630px] h-[790px] border-2 border-gray-300 rounded-lg bg-gray-50 dark:hover:bg-bray-800 dark:bg-slate-900 dark:border-gray-900 dark:hover:border-gray-500 dark:hover:bg-slate-900">
          <ImageCardComponent imageUpload={imageUpload} type={"Class Probabilities"}/>
          <div className='w-full flex flex-col items-center'>
            <h1 className="italic mt-2 text-4xl font-extrabold leading-none tracking-tight text-gray-900 lg:text-3xl dark:text-slate-300"><span class="underline underline-offset-3 decoration-slate-500">Skin lesion Probabilities</span> :</h1>
            <SkinLesionProbabilityComponent lesion={data[0].split(":")[0]} proba={data[0].split(":")[1]}/>
            <SkinLesionProbabilityComponent lesion={data[1].split(":")[0]} proba={data[1].split(":")[1]}/>
            <SkinLesionProbabilityComponent lesion={data[2].split(":")[0]} proba={data[2].split(":")[1]}/>
            <SkinLesionProbabilityComponent lesion={data[3].split(":")[0]} proba={data[3].split(":")[1]}/>
            <SkinLesionProbabilityComponent lesion={data[4].split(":")[0]} proba={data[4].split(":")[1]}/>
            <SkinLesionProbabilityComponent lesion={data[5].split(":")[0]} proba={data[5].split(":")[1]}/>
            <SkinLesionProbabilityComponent lesion={data[6].split(":")[0]} proba={data[6].split(":")[1]}/>
            <div className='flex justify-between'>
              <button onClick={() => {saveImagePrediction(userId, imageUpload.imageId, data[0].split(":")[0]).then((response) => {console.log(response.data)}).finally(() => {setTimeout(()=> {setUpdate(Math.random()), setBack([false, ""])}, 1500)})}} type="button" class="text-white mr-[300px] bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-xl px-8 py-2.5 text-center me-2 mb-2">Save</button>
              <button onClick={() => setBack([false, ""])} type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-xl px-8 py-2.5 text-center me-2 mb-2">Back</button>
            </div>
          </div>
        </div>
      </div> 
    </>) : <PredictionLoading/>
  )
}

export default MultiplePredictionsInterface