import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;
