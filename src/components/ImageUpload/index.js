import React, { useState } from "react";
import './styles.css'
import {getObjectList} from '../../utils';

function ImageUpload (props) {
    const [imagePreview, setImagePreview] = useState();
    const {setSuggestionsData} = props;
    const handleImageChange = (event) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = async function(e) {
                setImagePreview(e.target.result)
                const result = await getObjectList({type: 'form', selectedFile});
                setSuggestionsData(result);
            }
            reader.readAsDataURL(selectedFile);
        }
    }
    
    // microsoft,google,clarifai,amazon,api4ai,sentisigh

    return (
        <div>
            <div className="ImageInput">
                <input type="file" accept="image/*" onChange={handleImageChange} />
                {imagePreview && 
                <div className="ImagePreview">
                    <img src={imagePreview} alt="Preview"></img>
                </div>
                }
            </div>
        </div>
    )
}
export default ImageUpload