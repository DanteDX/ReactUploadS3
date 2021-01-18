import React,{useState} from 'react';
import ImageUploader from 'react-images-upload';
import axios from 'axios';
import "./App.css";

const UploadComponent = props =>{
  return(
    <form>
      <label>
        File Upload:
        <input id="urlInput" type="text" onChange={props.onUrlChange} value={props.url}/>
      </label>
      <ImageUploader
        key="image-uploader"
        withIcon={true}
        withPreview={true}
        label="maximum size file 5MB"
        buttonText="Choose an Image"
        onChange={props.onImage}
        imgExtension={['.jpg','.jpeg','.png']}
        maxFileSize={5242880}
      >
      </ImageUploader>
    </form>
  )
}

const App = () =>{
  const [progress,setProgress] = useState('getUpload');
  const [url,setImageUrl] = useState(undefined);
  const [errorMessage,setErrorMessage] = useState('');
  const onUrlChange = e =>{
    setImageUrl(e.target.value);
  }

  const onImage = async (failedImages,successImages) =>{
    if(!url){
      console.log('missing url');
      setErrorMessage('missing a url to upload to');
      setProgress('upload Error');
      return;
    }
    setProgress('uploading');
    try{
      console.log('sucess image', successImages);
      const parts = successImages[0].split(";");
      const mime = parts[0].split(":")[1];
      const name = parts[1].split('=')[1];
      const data = parts[2];
      const res = await axios.post(url,{mime,name,image:data});
      setImageUrl(res.data.imageURL);
      setProgress('uploaded');
      console.log('Image uploaded');
    }catch(err){
      console.log('error in upload', err);
      setErrorMessage(err);
      setProgress('upload error');
    }
  }
  return (
    <div>
      <UploadComponent url={url} onUrlChange={onUrlChange} onImage={onImage}/>
    </div>
  )
}

export default App;