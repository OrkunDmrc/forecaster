import './App.css';
import { MainContextProvider } from './contexts/MainContext';
import City from "./components/City"
import Weather from './components/Weather';

function App() {
  return (
    <div className="App Center">
      <div id="MiddleDiv" className="Column">
        <MainContextProvider>
          <City />
          <Weather />
        </MainContextProvider>
      </div>
    </div>
  );
}

export default App;
