import Accordian from "./components/accordian";
import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from "./components/Home";

function App() {
  return (
    <div className="main-container">
      <Header />
      <Intro/>
      <Accordian />
    </div>
  );
}

export default App;
