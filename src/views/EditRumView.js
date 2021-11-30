import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getAllCountries } from "../services/countryService";
import {
  deleteRumInApi,
  getAllRums,
  getSingleRumFromApi,
  imageUpload,
  imageUploadToApi,
  updateRumInApi,
} from "../services/rumServices";

const EditRumView = () => {
  const [rum, setRum] = useState({
    name: "",
    country: "",
    category: "",
    description: "",
    image: "",
  });
  const [countries, setCountries] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getRum();
    getCountries();
  }, []);

  const getRum = async () => {
    const response = await getSingleRumFromApi(id);
    await setRum(response.data);
  };

  const getCountries = async () => {
    const response = await getAllCountries();
    setCountries(response.data);
  };

  const handleChange = (event) => {
    setRum({
      ...rum,
      [event.target.name]: event.target.value,
    });
  };

  const handleImageChange = async (event) => {
    const option = window.confirm("Are you sure you want to update the image");
    if (!option) return;
    const imageFile = event.target.files[0];
    await imageUploadToApi(id, imageFile);
    getRum();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await updateRumInApi(rum);
    getRum();
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    const response = await deleteRumInApi(id);
    return <Navigate to="/" />;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 col-md-6 col-sm-12">
          <form className="form">
            <h2>Edit Rum</h2>
            <label>Name </label>
            <input
              name="name"
              value={rum.name}
              onChange={handleChange}
              placeholder="name"
              type="text"
              className="form-control"
            />
            <label> Country: {rum.country?.name}</label>
            <select
              onChange={handleChange}
              defaultValue={"Choose Country"}
              className="form-control"
              name="country"
              id=""
            >
              <option disabled value="title">
                Select new country
              </option>
              {countries.map((country) => (
                <option key={country._id} value={country._id}>
                  {country.name}
                </option>
              ))}
            </select>
            <label className="mt-4">Category: {rum.category}</label>
            <select
              onChange={handleChange}
              defaultValue={"title"}
              className="form-control"
              name="category"
              id=""
            >
              <option disabled value="title">
                Select new category
              </option>
              <option value="LIGHT">Light</option>
              <option value="GOLD">Gold</option>
              <option value="DARK">Dark</option>
              <option value="AGED">Aged</option>
              <option value="BLACK">Black</option>
              <option value="SPICED">Spiced</option>
            </select>
            <br />
            <label>Description</label>
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
              className="form-control btn btn-primary mb-3"
            >
              Update Rum
            </button>
            {/* <button
              onClick={handleDelete}
              className="form-control btn btn-danger "
            >
              Delete Rum
            </button> */}
          </form>
        </div>
        <div className="col-6">
          <img
            style={{ marginTop: "40px", width: "500px" }}
            src={rum.image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default EditRumView;
