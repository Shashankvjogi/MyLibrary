import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './stylesheets/alignments.css';
import './stylesheets/theme.css';
import './stylesheets/sizes.css';
import './stylesheets/custom-components.css';
import './stylesheets/form-elements.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes> 
      </BrowserRouter> 
    </div>
  );
}

export default App;
