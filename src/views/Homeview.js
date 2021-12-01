import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import RumCard from "../components/RumCard";
import { getAllRums } from "../services/rumServices";

const HomeView = () => {
  const [rums, setRums] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getRum();
  }, []);

  const getRum = async () => {
    setLoading(true);
    setTimeout(async () => {
      const response = await getAllRums();
      setRums(response.data);
      setLoading(false);
    }, 2000);
  };

  const handleSearch = (event) => setSearch(event.target.value.toLowerCase());

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <h2>Know more about your Rum</h2>
        </div>
        <div className="col-md-3 col-sm-6 mb-3">
          <input
            className="form-control"
            onChange={handleSearch}
            style={{ display: "flex", alignSelf: "flex-end" }}
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="container">
        {loading && (
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <Spinner
              style={{ height: 80, width: 80, fontWeight: "bold" }}
              animation="border"
            />
            <h4>Loading...</h4>
          </div>
        )}
        {rums === null && <h2>No Rums yet</h2>}
        <div className="row rumCards">
          {rums
            .filter((rum) =>
              search ? rum.name.toLowerCase().includes(search) : rum
            )
            .map((rum) => (
              <div
                key={rum._id}
                className="cardBox col-lg-3 col-md-4 col-sm-6 col-xs-12"
              >
                <RumCard obj={rum} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomeView;
