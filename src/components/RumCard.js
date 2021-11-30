import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./RumCard.css";

const rumImage =
  "https://www.abcfws.com/file/general/about_rum_wooden_rum_casks.jpg";

const RumCard = ({ obj }) => {
  return (
    <Card style={{ width: "22rem" }}>
      <Card.Body>
        <Card.Title>{obj.name}</Card.Title>
        <img
          className={"rumCardImage"}
          src={obj.image ? obj.image : rumImage}
          alt=""
        />

        <Link to={`/rum/${obj._id}`} className="buttonCard btn btn-primary">
          More information
        </Link>
      </Card.Body>
    </Card>
  );
};

export default RumCard;
