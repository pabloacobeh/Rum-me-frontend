import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../services/authServices";
import { getSingleRumFromApi } from "../services/rumServices";

const RumDetails = () => {
  const [rum, setRum] = useState({});
  const { id } = useParams();
  const user = isAuthenticated();

  useEffect(() => {
    getSingleRum();
  }, []);

  const getSingleRum = async () => {
    const response = await getSingleRumFromApi(id);
    setRum(response.data);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h2 style={{ fontWeight: "bold", marginTop: "40px" }}>{rum.name}</h2>
          <h4>
            <b>{rum.country?.name}</b>
          </h4>
          <h4>
            <b>Category:</b> {rum.category}
          </h4>
          <h4>
            <b>Description:</b>
          </h4>
          <h5>{rum.description}</h5>
          {user.role === "ADMIN" && (
            <Link to={`/editRum/${id}`} className="btn-outline-dark btn">
              Edit
            </Link>
          )}
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img
            style={{ height: "500px", margin: "40px auto" }}
            src={rum.image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default RumDetails;
