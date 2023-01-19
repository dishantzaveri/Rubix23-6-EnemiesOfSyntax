import { Route, Routes } from "react-router-dom";
import Voting from "./pages/Voting";
import History from "./pages/History";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Voting />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </>
  );
}

export default App;
