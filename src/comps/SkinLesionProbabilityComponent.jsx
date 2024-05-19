import React from 'react'
import exponentialToDecimal from '../jsFunctions/ExponentialToDecimal'

const SkinLesionProbabilityComponent = ({lesion, proba}) => {

  const probDec = exponentialToDecimal(proba);

  return (
    <div>
        <p className="select-none font-sans mr-[30px] text-sm mt-[10px] text-gray-400">-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
        <p className='flex w-[1000px] justify-between font-mono font-bold text-xl '><span className="lg:text-xl ml-6 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{lesion + " "}</span><span className="lg:text-xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{probDec*100 + " %"}</span></p>
        <div className="w-[1035px] mr-[10px]">
            <label for="labels-range-input" className="sr-only">Labels range</label>
            <input id="labels-range-input" type="range" value={parseFloat(probDec)} min="0" max="1" step="0.0001" readonly className="w-full h-2 bg-gray-500 rounded-lg"/>
        </div>
        <div className='flex flex-row mr-[10px] w-[1035px] justify-between'>
            <p class="text-sm text-gray-100">0</p>
            <p class="text-m text-gray-100">1</p>
        </div>
    </div>
  )
}

export default SkinLesionProbabilityComponent