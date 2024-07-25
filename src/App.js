import React, { useState }  from 'react';
import './App.css';
import ImageUpload from './components/ImageUpload'
import CaptureImage from './components/CaptureImage'

function App() {
  const [inputType, setInputType] = useState();
  return (
    <div className="App">
      <header className="App-header">BIT Lords</header>
      <div className='Content'>
        <div className='InputOptionContainer'>
          <h2>Select an Image</h2>
          <h4>to Calculate Carbon Footprint</h4>
          <div className="inputOptions">
            <input type='radio' name="inputMode" value="imageUpload" onChange={(event)=>setInputType(event.target.value)}></input>
            <label htmlFor="imageUpload">Upload Image</label><br></br>
            <input type='radio' name="inputMode" value="captureImage" onChange={(event)=>setInputType(event.target.value)}></input>
            <label htmlFor="captureImage">Capture Live Image</label><br></br>
          </div>
        </div>
        <div className='InputCaptureContainer'>
          {inputType === 'imageUpload' && <ImageUpload /> }
          {inputType === 'captureImage' && <CaptureImage />}
        </div>
      </div>
    </div>
  );
}

export default App;
