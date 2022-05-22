import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./compoents/Welcome";
import Quiz from "./compoents/Quiz";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
