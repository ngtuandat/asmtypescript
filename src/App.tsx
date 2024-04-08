import { Routes, Route } from "react-router-dom";
import Adminlayout from "./layouts/AdminLayout";
import BaseLayout from "./layouts/BaseLayout";
import BookTickets from "./pages/BookTickets";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePgae";
import Pay from "./pages/Pay";
import AddTrip from "./pages/trips/Add";
import ListTrips from "./pages/trips/ListTrips";
import NotFound from "./pages/trips/NotFound";
import UpdateTrip from "./pages/trips/Update";

// import NotFound from "./pages/trips/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/booktickets" element={<BookTickets />} />
          <Route path="/pay" element={<Pay />} />
        </Route>
        <Route path="admin" element={<Adminlayout />}>
          <Route index element={<Dashboard />} />
          <Route path="trips" element={<ListTrips />} />
          <Route path="trips/add" element={<AddTrip />} />
          <Route path="trips/update" element={<UpdateTrip />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
