import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./fonts/AlenbiSans-Black.woff";
import "./fonts/AlenbiSans-Bold.woff";
import "./fonts/AlenbiSans-Regular.woff";
import "./fonts/AlenbiSans-Light.woff";

import "./App.css";

import Landing from "./pages/landing/Landing";
import Admin from "./pages/admin/Admin";
import Room from "./pages/room/Room";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Landing />} />
          <Route path="admin" element={<Admin />} />
          <Route path="room" element={<Room />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
