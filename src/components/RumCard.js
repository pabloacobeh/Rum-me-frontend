import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { addToFavorites } from "../services/favoriteServices";
import "./RumCard.css";

const rumImage =
  "https://www.abcfws.com/file/general/about_rum_wooden_rum_casks.jpg";

const RumCard = ({ obj }) => {
  return (
    <Card style={{ width: "15rem" }}>
      <Card.Body>
        <Card.Title>{obj.name}</Card.Title>
        <img
          className="rumCardImage"
          src={obj.image ? obj.image : rumImage}
          alt=""
        />
        <div className="buttonCard">
          <Link to={`/rum/${obj._id}`} className=" btn btn-primary">
            More Info
          </Link>
          <br />
          {/* <button onClick={addToFavorites} className="btn btn-outline-dark">
            🤍
          </button> */}
        </div>
      </Card.Body>
    </Card>
  );
};

export default RumCard;
