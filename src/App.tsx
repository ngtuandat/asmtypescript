import { Routes, Route } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import BookTickets from "./pages/BookTickets";
import HomePage from "./pages/HomePgae";
import Pay from "./pages/Pay";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/booktickets" element={<BookTickets />} />
          <Route path="/pay" element={<Pay />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
