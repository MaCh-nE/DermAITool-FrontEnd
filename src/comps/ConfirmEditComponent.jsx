import React, {useState} from 'react'
import { IoCloseCircle } from "react-icons/io5";
import saveImageDiagnosis from '../services/SaveDiagnosisService';

const ConfirmEditComponent = ({type, upload, setPopUpModal, setUpdate}) => {

    const [selectedDiagnosis, setSelectedDiagnosis] = useState("")

    return (
        type === "Confirm" ? 
        (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="flex flex-col w-[700px] h-[400px] border-4 border-gray-300 rounded-full bg-gray-50 dark:hover:bg-bray-800 dark:bg-slate-700 dark:border-gray-200 dark:hover:border-gray-300">   
                <button onClick={() => {setPopUpModal([false, "", null])}} className='mt-[20px] ml-[520px]'>
                    <IoCloseCircle className='NTVerrorIcon'/>
                </button>
                <h1 className="mx-auto text-2xl font-extrabold dark:text-white"><span class="underline underline-offset-3 decoration-8 decoration-emerald-600">{type} Prediction</span></h1>
                
                <p className="italic font-mono mt-[60px] mb-[20px] mx-auto text-base font-medium text-gray-900 dark:text-white">Save to confirm the real diagnosis as : </p>
                <h1 className="mb-[80px] mx-auto text-lg font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-2xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                        {upload.prediction}
                    </span>
                </h1>
                <div className='mx-auto'>
                    <button onClick={() => {saveImageDiagnosis(upload.userId, upload.imageId, upload.prediction).then((response) => {console.log(response.data)}).finally(() => {setTimeout(()=> {setUpdate(Math.random()), setPopUpModal([false, "", null])}, 500)})}} type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-xl px-8 py-2.5 text-center me-2 mb-2">Save</button>
                </div>
            </div>
        </div>
        ) 
            : 
        (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="flex flex-col w-[700px] h-[400px] border-4 border-gray-300 rounded-full bg-gray-50 dark:hover:bg-bray-800 dark:bg-slate-700 dark:border-gray-200 dark:hover:border-gray-300">   
                <button onClick={() => {setPopUpModal([false, "", null])}} className='mt-[20px] ml-[520px]'>
                    <IoCloseCircle className='NTVerrorIcon'/>
                </button>
                <h1 className="mx-auto text-2xl font-extrabold dark:text-white"><span class="underline underline-offset-3 decoration-8 decoration-emerald-600">{type} Prediction</span></h1>
                
                <p className="italic font-mono mt-[40px] mb-[20px] mx-auto text-base font-medium text-gray-900 dark:text-white">Select the correct diagnosis for the lesion</p>
                
                <form className="max-w-sm mx-auto">
                <label for="lesions" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <select value={selectedDiagnosis} onChange={(e) => setSelectedDiagnosis(e.target.value)} id="lesions" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>Actinic keratoses and intraepithelial carcinoma</option>
                        <option>Basal cell carcinoma</option>
                        <option>Benign keratosis-like</option>
                        <option>Dermatofibroma</option>
                        <option>Melanoma</option>
                        <option>Melanocytic nevi</option>
                        <option>Vascular lesion</option>
                    </select>
                </form>
                
                <div className='mx-auto mt-[80px]'>
                    <button onClick={() => {saveImageDiagnosis(upload.userId, upload.imageId, selectedDiagnosis).then((response) => {console.log(response.data)}).finally(() => {setTimeout(()=> {setUpdate(Math.random()), setPopUpModal([false, "", null])}, 500)})}} type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-xl px-8 py-2.5 text-center me-2 mb-2">Save</button>
                </div>
            </div>
        </div>
        )
      )
}

export default ConfirmEditComponent