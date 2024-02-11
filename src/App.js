import Main from 'components/main/main';
import './App.css';
import Header from './components/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Header />}/>
        <Route path='/main' element={<Main />}/>
      </Routes>
    </BrowserRouter>
    
  );
  
}

export default App;

