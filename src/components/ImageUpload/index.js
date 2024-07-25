import React, { useState } from "react";
import './styles.css'
import axios from "axios";
// import fs from "fs";


function ImageUpload () {
    const [imagePreview, setImagePreview] = useState();
    const handleImageChange = (event) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = function(e) {
                setImagePreview(e.target.result)
                getObjectList(selectedFile);
            }
            reader.readAsDataURL(selectedFile);
        }
    }

    const getObjectsFromImage = (data) => {
        const objects = [];
        for(let key in data) {
            let items = data[key]?.items
            let len = items.length;
            for(let i =0; i<len; i++) {
                if(items[i].confidence > 0.9) {
                    objects.push(items[i])
                }
            }
        }
        console.log(objects)
    }
            // microsoft,google,clarifai,amazon,api4ai,sentisigh

    const getObjectList = (selectedFile) => {
        const form = new FormData();
        form.append("providers", "google,amazon");
        form.append("file", selectedFile);

        const options = {
            method: "POST",
            url: "https://api.edenai.run/v2/image/object_detection",
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMGU3ZmM4NTAtOGUxYy00NmI2LTg3MjAtNDYwMzhlOTI0ODM0IiwidHlwZSI6ImFwaV90b2tlbiJ9.UG8VGsbHSVGJ8O8lZGDTmDuExKdQPCqc4HctTIdVOdQ",
            },
            data: form,
        };
        axios
            .request(options)
            .then((response) => {
                console.log(response.data);
                getObjectsFromImage(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div>
           
            <div className="ImageInput">
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
            />
            <div className="ImagePreview">
                {imagePreview && <img src={imagePreview} alt="Image Preview"></img>}
            </div>
            </div>
        </div>
    )
}
export default ImageUpload