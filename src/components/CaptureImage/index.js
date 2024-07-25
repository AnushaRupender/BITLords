import Webcam from "react-webcam";
import React, { useRef, useState, useCallback } from "react";
import './styles.css';

const CaptureImage = () => {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
      }, [webcamRef]);

    const retake = () => {
        setImgSrc(null);
    };

    return (
        <div className="CaptureImage">
            {imgSrc ? (
                <img src={imgSrc} alt="webcam" />
            ) : (
                <Webcam height={400} width={600} ref={webcamRef} />
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