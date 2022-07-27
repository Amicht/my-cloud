import { Route, Routes} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import Home from './components/Home';


function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
