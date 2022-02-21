import React, { useState } from "react";
import axios from "axios";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Poem from "./Poem";

function PoemList() {
  const [poems, setPoems] = useState([]);

  const getPoems = async () => {
    const { data } = await axios.get("https://poetrydb.org/random/20");
    console.log("data", data);
    setPoems(data);
  };

  const getSortingData = (data) => {
    const sortingData = data.target.value;

    if (sortingData === "title") {
      const sortedPoems = [...poems].sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      setPoems(sortedPoems);
    } else if (sortingData === "author") {
      const sortedPoems = [...poems].sort((a, b) => {
        return a.author.localeCompare(b.author);
      });
      setPoems(sortedPoems);
    }
  };

  return (
    <Container className="p-5">
      <Button variant="primary" className="mb-3" onClick={getPoems}>
        Fetch poems
      </Button>
      {poems.length ? (
        <Form.Select onChange={getSortingData}>
          <option>Select According</option>
          <option value="title">Title</option>
          <option value="author">Author</option>
        </Form.Select>
      ) : (
        ""
      )}
      <Row>
        <Col>
          {poems &&
            poems.map((item, index) => {
              return <Poem key={index} item={item} />;
            })}
        </Col>
      </Row>
    </Container>
  );
}

export default PoemList;
