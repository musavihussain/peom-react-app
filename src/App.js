import PoemList from "./components/PoemList";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PoemDetail from "./components/PoemDetail";
import FavoritPoem from "./components/FavoritPoem";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/:title" element={<PoemDetail />} />
        <Route exact path="/my-favorite" element={<FavoritPoem />} />
        <Route exact path="/" element={<PoemList />} />
      </Routes>
    </Router>
  );
}

export default App;
