import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./fonts/AlenbiSans-Black.woff";
import "./fonts/AlenbiSans-Bold.woff";
import "./fonts/AlenbiSans-Regular.woff";
import "./fonts/AlenbiSans-Light.woff";

import "./App.css";

import Landing from "./pages/landing/Landing";
import Admin from "./pages/admin/Admin";
import Game from "./pages/game/Game";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Landing />} />
          <Route path="admin" element={<Admin />} />
          <Route path="game" element={<Game />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
