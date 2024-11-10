import { useState } from "react";
import "./newPostPage.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import apiRequest from "../../lib/apiRequest.jsx";
import UploadWidget from "../../components/uploadWidget/uploadWidget.jsx";
import { useNavigate } from "react-router-dom";

function NewPostPage() {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    try {
      const token = localStorage.getItem('authToken');
      const res = await apiRequest.post("/post", {
        postData: {
          title: inputs.title,
          address: inputs.address,
          city: inputs.city,
          latitude: inputs.latitude,
          longitude: inputs.longitude,
          images: images,
        },
        postDetail: {
          Pricefortwo: inputs.Pricefortwo,
          opening: parseInt(inputs.opening),
          mail: inputs.mail,
        num: inputs.num,
        webs: inputs.webs,
      },
    }, {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });
    console.log("Redirecting to:", `http://localhost:5173/${res.data._id}`);
window.location.href = `http://localhost:5173/${res.data._id}`;
      navigate("/")
    } catch (err) {
      console.log(err);
      setError(error);
    }
  };

  return (
    <div className="newPostPage">
      <div className="formContainer">
        <h1>Add New Post</h1>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="title">Title</label>
              <input id="title" name="title" type="text" />
            </div>
            
            <div className="item">
              <label htmlFor="address">Address</label>
              <input id="address" name="address" type="text" />
            </div>
            <div className="item description">
              <label htmlFor="desc">Description</label>
              <ReactQuill theme="snow" onChange={setValue} value={value} />
            </div>
            <div className="item">
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" />
            </div>
            
            <div className="item">
              <label htmlFor="latitude">Latitude</label>
              <input id="latitude" name="latitude" type="text" />
            </div>
            <div className="item">
              <label htmlFor="longitude">Longitude</label>
              <input id="longitude" name="longitude" type="text" />
            </div>
            
            <div className="item">
              <label htmlFor="type">Property</label>
              <select name="property">
                <option value="Sight-Seeing">Sight-Seeing</option>
                <option value="Restaurant/Bar">Restaurant/Bar</option>
                <option value="Fun">Fun</option>
              </select>
            </div>

           
           
            <div className="item">
              <label htmlFor="Pricefortwo">Price for two</label>
              <input
                id="Pricefortwo"
                name="Pricefortwo"
                type="text"
                placeholder="Price for two"
              />
            </div>
            <div className="item">
              <label htmlFor="opening">Total opening (sqft)</label>
              <input min={0} id="opening" name="opening" type="number" />
            </div>
            <div className="item">
  <label htmlFor="mail">Email</label>
  <input id="mail" name="mail" type="email" placeholder="example@domain.com" required />
</div>

<div className="item">
  <label htmlFor="num">Phone Number</label>
  <input id="num" name="num" type="tel" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
</div>

<div className="item">
  <label htmlFor="webs">Website</label>
  <input id="webs" name="webs" type="url" placeholder="https://example.com" required />
</div>

            <button className="sendButton">Add</button>
            {error && <span>error</span>}
          </form>
        </div>
      </div>
      <div className="sideContainer">
        {images.map((image, index) => (
          <img src={image} key={index} alt="" />
        ))}
        <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: "lamadev",
            uploadPreset: "estate",
            folder: "posts",
          }}
          setState={setImages}
        />
      </div>
    </div>
  );
}

export default NewPostPage;