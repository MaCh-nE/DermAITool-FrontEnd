import ModelSpecsComponent2 from './ModelSpecsComponent2'
import formatDate from '../jsFunctions/DateFormatter'


const InterfacePredictionComponent = ({upload, data}) => {

  return (
      <div className="select-none border-solid border-2 border-gray-500 w-[350px] h-[340px] bg-slate-800 rounded-lg">
        <p className='flex justify-between font-serif font-bold italic underline text-sm text-[#5a92d3] mt-[37px] ml-[20px]'>Upload ID :<span className='text-gray-100 mr-[20px] font-extrabold'></span></p>
        <p className='flex justify-between font-serif font-bold italic underline text-sm text-slate-800 ml-[20px]'>Upload ID :<span className='text-gray-100 mr-[20px] font-extrabold'>{upload.imageId}</span></p>
        <p className='flex justify-between font-serif font-bold italic underline text-sm text-[#5a92d3] mt-[10px] ml-[20px]'>Probable Lesion :</p>
        <p className='flex justify-between font-serif font-bold italic underline text-sm text-slate-800 ml-[20px]'>dwdwwwd<span className='text-gray-100 mr-[20px] font-extrabold'>{data.split(":")[0]}</span></p>
        <p className='flex justify-between font-serif font-bold italic underline text-sm text-[#5a92d3] mt-[10px] ml-[20px]'>Probability :<span className='text-gray-100 mr-[20px] font-extrabold'></span></p>
        <p className='flex justify-between font-serif font-bold italic underline text-sm text-slate-800 ml-[20px]'>Probability :<span className='text-gray-100 mr-[20px] font-extrabold'>{"~ " + data.split(":")[1]*100 + " %"}</span></p>
        <p className='font-serif font-bold italic text-sm text-gray-300 mt-[20px] ml-[20px]'>----------------------------------------------------------</p>
        <p className='flex justify-between font-serif font-bold italic text-sm text-[#5a92d3] mt-[10px] ml-[20px]'>Submission Date :<span className='text-sm text-gray-100 mr-[20px] font-extrabold'>{formatDate(upload.submissionDate)}</span></p>
        <ModelSpecsComponent2/>
      </div>
      
  )
}

export default InterfacePredictionComponent