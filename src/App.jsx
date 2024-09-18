import Navbar from "./components/Navbar";
import Main from "./components/Main";

import "./App.css";
import Card from "./components/Card";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="container
      "
      >
        <Main></Main>
        <Card></Card>
      </div>
    </div>
  );
}

export default App;
