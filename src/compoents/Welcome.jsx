import { useNavigate } from "react-router-dom";
function Welcome() {
  const path = useNavigate();
  return (
    <div style={{ fontSize: "64px" }}>
      <div>Welcome to the react quiz</div>
      <button onClick={() => path("/quiz")}>Start the Quiz</button>
    </div>
  );
}

export default Welcome;
