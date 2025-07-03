import './App.css';
import Button from './components/Button/Button'

function App() {
  return (
    <div className="calculator">
      <div className="display">
        <div className="input"></div>
        <div className="result"> </div>  
        </div>
      <div className="buttons">
        <Button className="clear" onClick={() => console.log("Clicou!")}>
          C
        </Button>
      </div>
    </div>
  );
}

export default App;
