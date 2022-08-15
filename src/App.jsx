import { Home } from './Pages/Home';
import Header from './Pages/Header';
import BarResult from './components/BarResult';

import './App.css';
import useApp from './hooks/useApp';

function App() {
const {handleSubmit,genero,icm,setGenero,setIcm} = useApp();
  return (
    <>
      <Header />
      <div className="p-5">
        <div className="row">
          <div className="col-md-6 px-2">
            <Home onClick={handleSubmit} onReset={() => { setIcm(0)}} onchangeGenero={(value)=>{setGenero(value);setIcm(0)}} />
          </div>
          <div className="col-md-6 my-auto">
            {
              (genero === "") ? null : (genero === "Mujer") ? <BarResult resultIMC={icm} genero={genero}/> : <BarResult resultIMC={icm} genero={genero}/>              
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
