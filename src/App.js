import './App.css';
import Header from './PageComponents/Header'
import MainHeader from './Page2Components/MainHeader'
import Page4Main from './Page4Components/MainData';
import Juso from './Page4Components/GwangGo';
 function App() {
  return (
    <div className="App">
      <Header/>
      <MainHeader/>
       <Page4Main/> 
       <Juso/>
      </div>
  );
}

export default App;
