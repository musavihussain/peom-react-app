import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Poem({ item }) {
  return (
    <>
      <Card className="my-3">
        <Card.Body>
          <Link to={"/" + item.title.split(" ").join("-")} state={{ item }}>
            <Card.Title>{item.title}</Card.Title>
          </Link>
          <Card.Text>{item.author}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Poem;
