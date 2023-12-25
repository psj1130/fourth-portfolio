import React, {useState} from "react"


function Test() {
  const [ img, setImg ] = useState(null)
  const [ previewImg, setPreviewImg ] = useState(null) 

  const insertImg = (e) => {
    let reader = new FileReader()

    if(e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
      
      setImg(e.target.files[0])
    }

    reader.onloadend = () => {
      const previewImgUrl = reader.result

      if(previewImgUrl) {
        setPreviewImg(previewImgUrl)
      }
    }
  }

// render
  return(
    <form encType="multipart/form-data">
      <input type="file" accept='image/*' onChange={(e) => insertImg(e)}></input>
      <img src={previewImg}></img>
    </form>
  )
}

export default Test;