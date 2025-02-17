import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ContentA } from "./components/ContentA";
import { ContentB } from "./components/ContentB";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <ContentA />
        <ContentB />
      </main>

      <Footer />
    </div>
  );
};

export default App;
