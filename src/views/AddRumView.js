import { useEffect, useState } from "react";
import { createRumInApi } from "../services/rumServices";
import { getAllCountries } from "../services/countryService";

const AddRumView = () => {
  const [preview, setPreview] = useState("");
  const [countries, setCountries] = useState([]);

  const [rum, setRum] = useState({
    name: "",
    country: "",
    category: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    const response = await getAllCountries();
    setCountries(response.data);
  };

  const handleChange = (event) => {
    setRum({
      ...rum,
      [event.target.name]: event.target.value,
    });
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setRum({
      ...rum,
      image: imageFile,
    });
    setPreview(URL.createObjectURL(imageFile));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createRumInApi(rum);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <form className="form">
            <h1>Add New Rum</h1>
            <input
              name="name"
              value={rum.name}
              onChange={handleChange}
              placeholder="Name"
              type="text"
              className="form-control"
            />
            <select
              onChange={handleChange}
              defaultValue={"Select Country"}
              className="form-control"
              name="country"
              id=""
            >
              <option disabled value="Select Country">
                Select Country
              </option>
              {countries.map((country) => (
                <option key={country._id} value={country._id}>
                  {country.name}
                </option>
              ))}
            </select>
            <select
              onChange={handleChange}
              defaultValue={"title"}
              className="form-control mt-4"
              name="category"
              id=""
            >
              <option disabled value="title">
                Select category
              </option>
              <option value="LIGHT">Light</option>
              <option value="GOLD">Gold</option>
              <option value="DARK">Dark</option>
              <option value="AGED">Aged</option>
              <option value="BLACK">Black</option>
              <option value="SPICED">Spiced</option>
            </select>
            <textarea
              name="description"
              value={rum.description}
              onChange={handleChange}
              placeholder="Description"
              type="text"
              className="form-control"
            />
            <input
              onChange={handleImageChange}
              placeholder="image"
              accept="image/*"
              name="image"
              type="file"
              className="form-control"
            />
            <button
              onClick={handleSubmit}
              className="form-control btn btn-primary"
            >
              Add New Rum
            </button>
          </form>
        </div>
        <div className="col-6">
          <img style={{ height: "300px", marginTop: "40px" }} src={preview} />
        </div>
      </div>
    </div>
  );
};

export default AddRumView;
