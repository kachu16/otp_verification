import './App.css';
import Otp from './components/Otp';
import Main from './components/Main';
import { BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {

  
 
  return (


    <BrowserRouter>
   

    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/otp' element={<Otp/>}/>
    </Routes>
    </BrowserRouter>

    
  );
}

export default App;
