import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import NavBar from './Components/NavBar'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route
          path="/"
          element={<Home/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
