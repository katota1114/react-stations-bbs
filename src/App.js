import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ThreadsListScreen from "./index/ThreadsListScreen";
import CreateThreadScreen from "./thread/new/CreateThreadScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<ThreadsListScreen />} />
        <Route path={"/thread/new"} element={<CreateThreadScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
