import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { deleteCountryInApi } from "../services/countryService";

const CountriesView = () => {
  const [countries, setCountries] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    const response = await axios.get(`${apiUrl}/countries`);
    setCountries(response.data);
  };

  const deleteCountry = (id) => {
    const filtered = countries.filter((country) => {
      return country._id !== id;
    });
    deleteCountryInApi(id);
    setCountries(filtered);
  };

  return (
    <div className="container mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Country</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{country.name}</td>
              <td>
                <button
                  onClick={() => deleteCountry(country._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CountriesView;
