import "./App.css";
import Navbar from "./components/navbar";
import Movies from "./components/movies";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Movies />
      </div>
    </>
  );
}

export default App;
