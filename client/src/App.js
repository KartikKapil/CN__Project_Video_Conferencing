import "../src/css/App.css";
import HomePage from "./components/HomePage";
import MeetPage from "./components/MeetPage";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import io from "socket.io-client";
export const meetSocket = io.connect("http://localhost:5000", {
  reconnectionDelayMax: 10000,
});

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route
          exact
          path="/meet"
          element={<MeetPage isAnotherUser={false} />}
        ></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route
          exact
          path="/meet/p/:roomToJoin"
          element={<MeetPage isAnotherUser={true} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
