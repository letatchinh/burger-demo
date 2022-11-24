import { Route, Routes } from 'react-router-dom';
import './App.css';
import DefaultPage from './pages/DefaultPage';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<DefaultPage />}>
          <Route path='/login' element={<Login />}/>
          <Route path='/' element={<HomePage />}/>
          <Route path='/register' element={<Register />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
