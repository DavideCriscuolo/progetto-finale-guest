import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import defaultLayout from "./layout/defaultLayout";
import AllGames from "./pages/AllGames";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={defaultLayout}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/AllGames" element={<AllGames />}></Route>
            <Route
              path="/game/${game.id}/${game.title}"
              element={<AllGames />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
