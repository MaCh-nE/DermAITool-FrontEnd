import React, {useState, useEffect} from 'react'
import logo from "../assets/images/interFace_logo.png"
import title from "../assets/images/interFace_title.png"
import line from "../assets/images/line.png"
import getImagePredictionService from '../services/GetImagePredictionService';
import { LuFlipHorizontal2 } from "react-icons/lu";
import { LuFlipVertical2 } from "react-icons/lu";
import { MdRotateLeft } from "react-icons/md";
import { MdRotateRight } from "react-icons/md";
import { BsCircleHalf } from "react-icons/bs";
import { VscZoomIn } from "react-icons/vsc";
import { VscZoomOut } from "react-icons/vsc";
import { FaThermometerThreeQuarters } from "react-icons/fa";
import InterfacePredictionComponent from './InterfacePredictionComponent';
import XYlogo from "../assets/images/XY_axis.png"
import mainXY from "../assets/images/mainXYaxis.png"
import { BiXCircle } from "react-icons/bi";
import Loading from './Loading';
import gradCamGenerate from '../services/GRAD-CAMGenerateService';


const ImageEditingInterface = ({upload, setBack}) => {
  const [toggleXY, setToggleXY] = useState(true);
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isFlippedHorizontally, setIsFlippedHorizontally] = useState(false);
  const [isFlippedVertically, setIsFlippedVertically] = useState(false);
  const [popUpModal, setPopUpModal] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [gradCamSrc, setGradCamSrc] = useState(null);
  const [timeout, setTimeout] = useState(false);
  const [data, setData] = useState("");

  const options = ['jet', 'inferno', 'winter', 'viridis', 'plasma'];

  useEffect(() => {
    getImagePredictionService(upload.userId, upload.imageId).then((response) => {
      setData(response.data);
    }).catch((error) => {
      console.error("Error uploading image class prediction.")
    })

    // Generating 4 GRAD-CAMs ;
    for (var i=0 ; i<options.length ; i++) {
      gradCamGenerate(upload.userId, upload.imageId, options[i], "0.5").then((response) => {
        console.log(response.data);
      })
    }
    setTimeout(true);

  }, [])

  useEffect(() => {
    import(`../repo_clone/${upload.imageId}.jpg`).then((module) => {
      setImageSrc(module.default);
    }).catch((error) => {
      console.error('Error loading image:', error);
    });
  }, []);

  const handleGRADCAMClick = () => {
    setPopUpModal(true);
  };

  const handleOptionClick = (Gradcam) => {
    import(`../GRADCAM_clone/${Gradcam}.jpg`).then((module) => {
      setGradCamSrc(module.default);
    }).catch((error) => {
      console.error('Error loading GRADCAM variant:', error);
    });

    setPopUpModal(false);
  };

  const handleZoomIn = () => {
    setZoomLevel(zoomLevel + 0.1);
  };

  const handleZoomOut = () => {
    setZoomLevel(Math.max(1, zoomLevel - 0.1));
  };

  const rotateLeft = () => {
    setRotation(rotation - 90);
  };

  const rotateRight = () => {
    setRotation(rotation + 90);
  };

  const flipHorizontally = () => {
    setIsFlippedHorizontally(!isFlippedHorizontally);
  };

  const flipVertically = () => {
    setIsFlippedVertically(!isFlippedVertically);
  };


  return (
    timeout ? (
    <>
      <div className="mx-[5px] my-8 w-[1630px] h-[790px] border-2 border-gray-300 rounded-lg bg-gray-50 dark:hover:bg-bray-800 dark:bg-slate-900 dark:border-gray-900 dark:hover:border-gray-500 dark:hover:bg-slate-900">
        <div className="w-full h-[120px] border-2 rounded-lg border-slate-600">
          <div className="w-full h-[61px] flex justify-start">
            <img src={logo} className='my-[10px] mx-[13px] h-[47px]'/>
            <img src={line} className='my-[20px] ml-[8px] mr-[13px] h-[30px]'/>
            <img src={title} className='my-[26px] mx-[10px] h-[16px]'/>
            <button onClick={() => {setBack([false, ""], setTimeout(false))}} className='ml-[1355px]'>
              <BiXCircle className='NTVinterfaceClose'/>
            </button>
          </div>
          <div className='w-full h-[20px] flex items-center justify-center'>
            <button onClick={flipHorizontally} className="py-[5px] px-[5px] NTVinterfaceIconFlip hover:bg-slate-700 rounded-lg">
              <LuFlipHorizontal2 />
            </button>
            <button onClick={flipVertically} className="py-[5px] px-[5px] NTVinterfaceIconFlip hover:bg-slate-700 rounded-lg">
              <LuFlipVertical2 />
            </button>
            <button onClick={rotateLeft} className="py-[3px] px-[3px] NTVinterfaceIconRotate hover:bg-slate-700 rounded-lg">
              <MdRotateLeft />
            </button>
            <button onClick={rotateRight} className="py-[3px] px-[3px] NTVinterfaceIconRotate hover:bg-slate-700 rounded-lg">
              <MdRotateRight/>
            </button>
            <button onClick={() => {setIsGrayscale(!isGrayscale)}} className="py-[8px] px-[8px] NTVinterfaceIconGrayscale hover:bg-slate-700 rounded-lg">
              <BsCircleHalf />
            </button>
            <button onClick={handleZoomIn} className="py-[6px] px-[6px] NTVinterfaceIconZoom hover:bg-slate-700 rounded-lg">
              <VscZoomIn />
            </button>
            <button onClick={handleZoomOut} className="py-[6px] px-[6px] NTVinterfaceIconZoom hover:bg-slate-700 rounded-lg">
              <VscZoomOut />
            </button>
            <button onClick={handleGRADCAMClick} className="py-[6px] px-[6px] NTVinterfaceIconGRADCAM hover:bg-slate-700 rounded-lg">
              <FaThermometerThreeQuarters />
            </button>
            
          </div>
          <div className='w-full flex'>
            <p className='mt-[10px] ml-[445px] font-bold text-[#5a92d3] select-none'>X-Flip</p>
            <p className='mt-[10px] ml-[47px] font-bold text-[#5a92d3] select-none'>Y-Flip</p>
            <p className='mt-[10px] ml-[40px] font-bold text-[#5a92d3] select-none'>L-Rotate</p>
            <p className='mt-[10px] ml-[35px] font-bold text-[#5a92d3] select-none'>R-Rotate</p>
            <p className='mt-[10px] ml-[32px] font-bold text-[#5a92d3] select-none'>Grayscale</p>
            <p className='mt-[10px] ml-[33px] font-bold text-[#5a92d3] select-none'>Zoom-In</p> 
            <p className='mt-[10px] ml-[38px] font-bold text-[#5a92d3] select-none'>Zoom-Out</p>
            <p className='mt-[10px] ml-[35px] font-bold text-[#5a92d3] select-none'>GRAD-CAM</p>
          </div>
        </div>
        <div className='flex flex-row w-full h-[668px] rounded-lg'>
            
          <div className='select-none h-full w-[1450px] flex justify-center items-center space-x-6 rounded-lg border-r-2 border-slate-600 '>
            <div className="relative w-[600px] h-[450px]">
              <div className="overflow-hidden relative w-[600px] h-[450px]">
                <img style={{ 
                  filter: isGrayscale ? 'grayscale(100%)' : 'none',
                  transform: `scale(${zoomLevel}) rotate(${rotation}deg) scaleX(${isFlippedHorizontally ? -1 : 1}) scaleY(${isFlippedVertically ? -1 : 1})`,
                  transformOrigin: 'center center',
                  transition: 'transform 0.25s ease-in-out',
                  cursor:'grab', 
                }} className="absolute top-0 left-0 object-cover" src={imageSrc}/>
              </div>

              {
                toggleXY && <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[520px] object-cover" src={mainXY}/>
              }

            </div>
            <div className="relative w-[600px] h-[450px]">
              <img className="absolute top-0 left-0 w-full h-full object-cover" src={gradCamSrc ? (gradCamSrc) : (imageSrc)}/>
              {
                toggleXY && <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[520px] object-cover" src={mainXY}/>
              }
              
            </div>
          </div>
          <div className='select-none h-full w-[425px] flex flex-col  items-center rounded-lg border-l-2 border-slate-600 '>
            <button onClick={() => {setToggleXY(!toggleXY)}} type="button" className="flex mt-[50px] mb-[80px] text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-xl px-8 py-2.5 text-center">
              <img className="h-[50px]" src={XYlogo}/>
              <p className='mt-[10px]'>Toggle XY axis</p>
            </button>
            <InterfacePredictionComponent upload={upload} data={data} />
          </div>
        </div>
      </div>
      {
        popUpModal && (
          <div className="fixed inset-0 bg-black bg-opacity-5 backdrop-blur-sm flex">
              <div className="bg-white rounded-lg border-2 border-[#5a92d3] shadow w-32 h-[160px] dark:bg-slate-800 ml-[1390px] mt-[190px]">
                <ul className="flex flex-col py-2 text-sm text-gray-700 dark:text-gray-200"> 
                      <li className='mb-[10px] mx-auto text-lg font-extrabold text-[#5a92d3] underline'>
                        Colormaps
                      </li> 
                  {options.map((option, index) => (
                    <button key={index} onClick={() => handleOptionClick(`${upload.imageId}_${option}`)}>
                      <li className='hover:bg-gray-600'>
                        {option}
                      </li> 
                    </button>
                  ))}
                </ul>
              </div>
          </div>)
      }
    </>
    ) 
      : 
    (
      <Loading/>
    )
  )
}

export default ImageEditingInterface