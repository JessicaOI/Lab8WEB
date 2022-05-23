import './App.css';

//refereniqa de codigo: https://www.youtube.com/watch?v=CMwt6Nwjf9g&ab_channel=BetoMoedano


function App() {
  return (
    <div className="App">
      <div className = "calculator-grid">
        <div className = "output">
          <div className = "numAnterior">123</div>
          <div className = "numActual">456</div>
        </div>
        <button className = "dosEspacios">AC</button>
        <button>DEL</button>
        <button>/</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>*</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>-</button>
        <button>.</button>
        <button>0</button>
        <button className = "dosEspacios">=</button>

      </div>
      
    </div>
  );
}

export default App;