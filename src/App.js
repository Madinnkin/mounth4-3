
import './App.css';
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import TodosPage from "./pages/TodosPage/TodosPage";

function App() {
  return (
    <div className="App">
      <AboutPage/>
      <MainPage/>
      <TodosPage/>
    </div>
  );
}

export default App;
