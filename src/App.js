import Title from './Page2Components/Title'
import './App.css';
import  MainHeader from'./Page2Components/MainHeader'
import Header from './PageComponents/Header';
import TestMain from './Page2Components/TestMain';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainHeader/>
      <Title/>
      <TestMain/>
       </div>
  );
}

export default App;
