import React, {useState, useEffect} from 'react'
import ImageCardComponent from './ImageCardComponent'
import getImagePredictionService from '../services/GetImagePredictionService';
import PredictionLoading from './PredictionLoading';
import saveImagePrediction from '../services/SavePredictionService';

const PredictionInterface = ({setBack, userId, imageUpload, setUpdate}) => {
  const [dataFetch, setDataFetch] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    getImagePredictionService(userId, imageUpload.imageId).then((response) => {
      setData(response.data);
    }).catch((error) => {
      console.error("Error uploading image class prediction.")
    }).finally(() => {
      setTimeout(() => {
        setDataFetch(true);
      }, 3000);
    })
  }, [])

  return (
    dataFetch ? (<>
      <div className="flex flex-row overflow-hidden mx-8 my-8 w-[1630px] h-[790px] border-2 border-gray-300 rounded-lg bg-gray-50 dark:hover:bg-bray-800 dark:bg-slate-900 dark:border-gray-900 dark:hover:border-gray-500 dark:hover:bg-slate-900">
        <ImageCardComponent imageUpload={imageUpload} type={"Class"}/>
        <div className='w-full flex flex-col items-center'>
          <h1 class="italic mt-8 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 lg:text-3xl dark:text-slate-300">Probable <span class="underline underline-offset-3 decoration-8 decoration-slate-500">skin lesion</span> :</h1>
          <h1 class="bg-clip-text mr-4 bg-gradient-to-r to-emerald-600 from-sky-400 mt-12 mb-4 border-4 px-[80px] py-2 rounded-full font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-7xl dark:text-white"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{data.split(":")[0]}</span></h1>
          
          <p className="select-none font-sans mr-[30px] text-sm mt-[60px] text-gray-400">-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
      
          <h1 class="mt-16 mb-4 text-4xl leading-none tracking-tight text-gray-900 lg:text-xl dark:text-gray-400">Prediction Probability :  <span className="lg:text-3xl ml-12 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{data.split(":")[1] + "%"}</span></h1>
          <div className="mt-[5px] w-[900px] mr-[10px] mb-[4px]">
              <label for="labels-range-input" className="sr-only">Labels range</label>
              <input id="labels-range-input" type="range" value={data.split(":")[1]} min="0" max="1" step="0.001" readonly className="w-full h-2 bg-gray-500 rounded-lg"/>
          </div>
          <div className='flex flex-row mr-[10px] w-[900px] justify-between'>
            <p class="text-lg text-gray-100">0</p>
            <p class="text-lg text-gray-100">1</p>
          </div>
          <div className='flex mt-12 justify-between'>
            <button onClick={() => {saveImagePrediction(userId, imageUpload.imageId, data.split(":")[0]).then((response) => {console.log(response.data)}).finally(() => {setTimeout(()=> {setUpdate(Math.random()), setBack([false, ""])}, 500)})}} type="button" class="text-white mr-[300px] bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-xl px-8 py-2.5 text-center me-2 mb-2">Save</button>
            <button onClick={() => setBack([false, ""])} type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-xl px-8 py-2.5 text-center me-2 mb-2">Back</button>
          </div>
        </div>
      </div>
    </>) : <PredictionLoading/>
  )
}

export default PredictionInterface