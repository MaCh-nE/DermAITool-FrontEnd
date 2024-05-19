import React, { useEffect } from 'react'
import { useState } from 'react'
import { HiOutlineUpload } from "react-icons/hi";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { HiOutlineDatabase } from "react-icons/hi";
import { HiOutlinePhotograph } from "react-icons/hi";
import ImageUploader from './ImageUploader';
import IntroHeader from './IntroHeader';
import MainUploadsContainer from './MainUploadsContainer';
import UploadsTable from './UploadsTable';
import UploadCounter from './UploadCounter';
import getUserImagesListService from '../services/GetUserImagesListService';
import MultiplePredictionsInterface from './MultiplePredictionsInterface';
import PredictionInterface from './PredictionInterface';
import ConfirmTable from './ConfirmTable';
import Loading from './Loading';
import ConfirmEditComponent from '../comps/ConfirmEditComponent.jsx';
import ImageEditingInterface from './ImageEditingInterface.jsx';




const Toolbar = ({userId}) => {
  const font = "select-none mt-16 bg-slate-100 hover:bg-slate-300 text-white font-bold rounded-lg w-12 h-12";
  const clicked = "outline outline-offset-2 outline-2 outline-slate-300 bg-slate-300";

  const [pressState, setPressState] = useState(1);
  const [userUploads, setUserUploads] = useState([]);
  const [update, setUpdate] = useState(Math.random());

  
  const [secondPredictionClickState, setSecondPredictionClickState] = useState([false, ""]);
  const [secondMultipleClickState, setSecondMultipleClickState] = useState([false, ""]);
  const [secondEditingClickState, setSecondEditingClickState] = useState([false, ""]);

  const [popUpModal, setPopUpModal] = useState([false, "", null])

  const updatePress = (button) => {
    setPressState(button);
  }

  useEffect(() => {
    getUserImagesListService(userId).then((response) => {
      setUserUploads(response.data);
    }).catch((error) => {
      console.error(error);
    }).finally(() => {
      setTimeout(() => {
      }, 1300);
    })
  }, [update])


// <---------------------------------------------------------------------------------------------------------------------------------->
// <---------------------------------------------------------------------------------------------------------------------------------->

  const PerButtonReturn = (state) => {
    switch (state) {
      case 1 :
        return (
          <>
            <IntroHeader main="Upload Image" details="to prepare for prediction or editing."/>
            <MainUploadsContainer content={(
              <>
                <ImageUploader id={userId} setUpdate={setUpdate}/>
                <UploadCounter count={userUploads.length}/>
              </>
            )}/>
          </>
      )
      case 2 :
        return (
          userUploads.length>0 ? (
            !secondPredictionClickState[0] ? (<>
            <IntroHeader main="Choose Image" details="for skin-lesion prediction."/>
            <MainUploadsContainer content={<UploadsTable imageDATA={userUploads} setClickState={setSecondPredictionClickState}/>}/>
          </>) : <PredictionInterface setBack={setSecondPredictionClickState} userId={userId} imageUpload={secondPredictionClickState[1]} setUpdate={setUpdate}/>) : (<></>)
        )
      case 3 :
        return (
          userUploads.length>0  ? (
            !secondMultipleClickState[0] ? (<>
            <IntroHeader main="Choose Image" details="for prediction probabilities."/>
            <MainUploadsContainer content={<UploadsTable imageDATA={userUploads} setClickState={setSecondMultipleClickState}/>}/>
          </>) : <MultiplePredictionsInterface setBack={setSecondMultipleClickState} userId={userId} imageUpload={secondMultipleClickState[1]} setUpdate={setUpdate} /> ): (<></>)
        )
      case 4 :
        return (
          userUploads.length>0  ? (<>
            <IntroHeader main="Edit or Confirm prediction" details="after real diagnosis by dermatologist."/>
            <MainUploadsContainer content={<ConfirmTable imageDATA={userUploads} openClose={setPopUpModal}/>}/>
          </>) : (<></>)
        )
      case 5 :
        return (
          userUploads.length>0  ? (
            !secondEditingClickState[0] ? (<>
            <IntroHeader main="Image Editor" details=""/>
            <MainUploadsContainer content={<UploadsTable imageDATA={userUploads} setClickState={setSecondEditingClickState}/>}/>
          </>) : <ImageEditingInterface upload={secondEditingClickState[1]} setBack={setSecondEditingClickState} /> ) : (<></>)
        )
      default :
        return null;
      }
  }

// <---------------------------------------------------------------------------------------------------------------------------------->
// <---------------------------------------------------------------------------------------------------------------------------------->


  return (
    <>
      <div className="flex">
        {/* Actual tool bar : */}
        <div className="pb-24 border-solid border-2 border-cyan-700 flex flex-col my-20 mx-16 h-full w-24 rounded-full bg-slate-100 p-6">
            <button type="button" className={pressState === 1 ? font + " " + clicked : font} onClick={() => updatePress(1)}>
              <HiOutlineUpload className='NTVicons'/>
            </button>

            <button data-tooltip-target="tooltip-default" className={pressState === 2 ? font + " " + clicked : font} onClick={() => updatePress(2)}>
              <HiOutlineDocumentSearch className='NTVicons'/>
            </button>

            <button data-tooltip-target="tooltip-default" className={pressState === 3 ? font + " " + clicked : font} onClick={() => updatePress(3)}>
              <HiOutlineDocumentDuplicate className='NTVicons'/>        
            </button>
            
            <button data-tooltip-target="tooltip-default" className={pressState === 4 ? font + " " + clicked : font} onClick={() => updatePress(4)}>
              <HiOutlineDatabase className='NTVicons'/> 
            </button>

            <button data-tooltip-target="tooltip-default" className={pressState === 5 ? font + " " + clicked : font} onClick={() => updatePress(5)}>
              <HiOutlinePhotograph className='NTVicons'/> 
            </button>
        </div>
        {/* Content = Header + tool */}
        {userUploads.length>0 ? (
        <div className='flex flex-col w-full'>
          {PerButtonReturn(pressState)}
        </div>
        )
        :
        (
          <Loading />
        )}
      </div>
      {
          popUpModal[0] && (<ConfirmEditComponent type={popUpModal[1]} upload={popUpModal[2]} setPopUpModal={setPopUpModal} setUpdate={setUpdate}/>)
      }
    </>
  )
}

export default Toolbar