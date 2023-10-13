import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ThreadsListScreen from "./index/ThreadsListScreen";
import CreateThreadScreen from "./thread/new/CreateThreadScreen";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={"/"} element={<ThreadsListScreen />} />
        <Route path={"/thread/new"} element={<CreateThreadScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
