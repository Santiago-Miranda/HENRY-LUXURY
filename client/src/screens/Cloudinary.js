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
    setImage(file.secure_url);
    console.log(file.public_id);
    console.log(file.secure_url);
    setLoading(false);
    const cloudinary = { public_id: file.public_id, url: file.secure_url };
    //setCloudinary(cloudinary);
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
          onChange={uploadImage}
        />
      </label>
      </div>
      <div>
        <button type="submit" onChange={setImage}>submit</button>
      </div>
    </div>
  );
}

export default Cloudinary;