
import './App.css';
import BarChart from './components/BarChart';
import HighLightText from './components/HighLightText';
function App() {
  return (
    <div className="App">
     <BarChart />
     <div className='textHighlightContainer'>
     <HighLightText />
     </div>
    </div>
  );
}

export default App;
