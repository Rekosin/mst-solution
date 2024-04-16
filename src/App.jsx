import { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="bg-indigo-600 w-full h-screen"></div>
    </Fragment>
  );
}

export default App;
