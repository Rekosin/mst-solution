import { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <div className="bg-indigo-600 w-full h-screen"></div>
    </Fragment>
  );
}

export default App;
