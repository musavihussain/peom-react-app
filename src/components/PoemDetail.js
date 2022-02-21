import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function PoemDetail() {
  const location = useLocation();
  const poem = location.state.item;

  const addFavorite = () => {
    const poems = JSON.parse(localStorage.getItem("poems")) || [];
    const isAdded = poems.some((item) => {
      if (item.title === poem.title) {
        return true;
      } else {
        return false;
      }
    });
    if (!isAdded) {
      poems.push(poem);
      localStorage.setItem("poems", JSON.stringify(poems));
    }
  };

  const removeFavorite = () => {
    const poems = JSON.parse(localStorage.getItem("poems")) || [];
    const updatedPoems = poems.filter((item) => item.title !== poem.title);
    localStorage.setItem("poems", JSON.stringify(updatedPoems));
  };

  return (
    <div>
      <Container className="p-5">
        <Button className="me-2 my-3" onClick={addFavorite}>
          Add to favorite
        </Button>
        <Button variant="danger" onClick={removeFavorite}>
          Remove from favorite
        </Button>
        <Link className="btn btn-primary mx-2" to="/my-favorite">
          Favorites
        </Link>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>
                <h3>{poem.title}</h3>
              </td>
            </tr>
            <tr>
              <td> by: {poem.author}</td>
            </tr>
            <tr>
              <td>
                {poem.lines.map((lyric, index) => {
                  return (
                    <p key={index} className="text-center">
                      {lyric}
                    </p>
                  );
                })}
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default PoemDetail;
