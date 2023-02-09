import './App.css';
import CalcDescription from './components/CalcDescription';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className='App'>
      <div className='calc__block'>
        <h1>Provider service price</h1>
        <Calculator />
        <CalcDescription />
      </div>
    </div>
  );
}

export default App;
