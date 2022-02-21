import React from "react";
import { Container } from "react-bootstrap";
import Poem from "./Poem";

function FavoritPoem() {
  const favoriteData = JSON.parse(localStorage.getItem("poems")) || [];

  return (
    <Container className="p-5">
      {favoriteData &&
        favoriteData.map((item, index) => {
          return <Poem key={index} item={item} />;
        })}
    </Container>
  );
}

export default FavoritPoem;
