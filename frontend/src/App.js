import { Route, Routes } from "react-router-dom";
import History from "./pages/History";
import AddElection from "./pages/AddElection";
import Elections from "./pages/Elections";
import Home from "./pages/Home";
import Election from "./pages/Election";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/elections" element={<Elections />} />
        <Route path="/elections/:id" element={<Election />} />
        <Route path="/history" element={<History />} />
        <Route path="/add-election" element={<AddElection />} />
      </Routes>
    </>
  );
}

export default App;
