import React from "react";
import { useState } from "react";

function Cloudinary({ setCloudinary }) {
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    console.log(data);
    data.append("file", files[0]);
    data.append("upload_preset", "products");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dr1abzs6h/image/upload",
      {
        method: "POST",
        body: data,
      }
     
    );
    const file = await res.json();
    console.log(res);
    setImage(file.url);
    console.log(file.public_id);
    console.log(file.secure_url);
    setLoading(false);
    const cloudinary = { public_id: file.public_id, url: file.secure_url };
    setCloudinary(cloudinary);
    console.log(cloudinary.url)
  };

  



  return (
    <div>
      <div>
      <label
        htmlFor="upload"
      >
        <input
          type="file"
          name="file"
          id="upload"
          style={{ cursor: "pointer" }}
          multiple
          onChange={uploadImage}
        />
        {loading ? (<h3>Cargando Imagenes</h3>) : (<img src={image} style={{width:"300px"}} alt="img"/>)}
      </label>
      </div>
    </div>
  );
}

export default Cloudinary;