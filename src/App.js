import logo from '../src/images/auto-logo-without-bg.png';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="header">
                <div className="img-div">
                    <img className="img" src={logo} alt="logo" />
                </div>
                <h1 className="h1">Netrukus atsidarome!</h1>
            </div>
            <div className="divas">
                <p>
                    Mūsų komanda siūlo aukščiausios kokybės <br /> automobilių
                    detalizavimo paslaugas
                </p>
            </div>
        </div>
    );
}

export default App;
