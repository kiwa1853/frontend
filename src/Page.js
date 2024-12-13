import './App.css';
import Header from './PageComponents/Header';
import Gander from './PageComponents/GanderAndAge';
import Age from './PageComponents/Time';
import TitleHeader from'./PageComponents/TitleHeader';
function App() {
  return (
    <div className="App">
    <Header/>
    <TitleHeader/>
    <Gander/>
    <Age/>
     </div>
  );
}

export default App;
