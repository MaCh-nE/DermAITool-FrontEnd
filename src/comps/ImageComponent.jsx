import {React, useState, useEffect} from 'react'

const ImageComponent = ({imageId}) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    import(`../repo_clone/${imageId}.jpg`).then((module) => {
      setImageSrc(module.default);
    }).catch((error) => {
      console.error('Error loading image:', error);
    });
  }, []);

  return (
    <div className="select-none flex items-center justify-center w-[380px] h-[220px] mt-[30px] mx-[36px] bg-slate-900">
      <img className="max-h-[200px] max-w-[350px]" src={imageSrc}/>
    </div>
  )
}

export default ImageComponent