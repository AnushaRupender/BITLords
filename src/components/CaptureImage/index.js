import Webcam from "react-webcam";
import React, { useRef, useState, useCallback } from "react";
import './styles.css';
import {getObjectList} from '../../utils';

const CaptureImage = (props) => {
    const {setSuggestionsData} = props;
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);

    // Function to convert Data URL to Blob
    function dataURLToBlob(dataURL) {
        const [header, data] = dataURL.split(',');
        const mimeString = header.split(':')[1].split(';')[0];
        const byteString = atob(data);
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const uint8Array = new Uint8Array(arrayBuffer);

        for (let i = 0; i < byteString.length; i++) {
            uint8Array[i] = byteString.charCodeAt(i);
        }

        return new Blob([uint8Array], { type: mimeString });
    }

    const capture = useCallback(async () => {
        const dataUrl = webcamRef.current.getScreenshot();
        setImgSrc(dataUrl);
        const blob = dataURLToBlob(dataUrl);
        const result = await getObjectList({type:'form', selectedFile:blob});
        setSuggestionsData(result);
      }, [webcamRef, setSuggestionsData]);

    const retake = () => {
        setImgSrc(null);
    };

    return (
        <div className="CaptureImage">
            {imgSrc ? (
                <img src={imgSrc} alt="webcam" />
            ) : (
                <Webcam height={400} width={600} ref={webcamRef} screenshotFormat="image/jpeg" />
            )}
            <div className="btn-container">
                {imgSrc ? (
                <button onClick={retake}>Retake photo</button>
                ) : (
                <button className="capturePhoto" onClick={capture}>Capture photo</button>
                )}
            </div>
        </div>
    );
};

export default CaptureImage;