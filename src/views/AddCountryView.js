import { useState } from "react";
import { createCountry } from "../services/countryService";

const AddCountryView = () => {
  const [country, setCountry] = useState("");

  const handleName = (event) => setCountry(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createCountry({ name: country });
    setCountry("");
  };

  return (
    <div className="container">
      <form className="form">
        <input
          value={country}
          onChange={handleName}
          placeholder="Country Name"
          type="text"
          className="form-control"
        />
        <button onClick={handleSubmit} className="btn btn-primary">
          Add Country
        </button>
      </form>
    </div>
  );
};

export default AddCountryView;
