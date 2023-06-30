import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import NavBar from './Components/NavBar'
import PostForm from './Pages/PostForm';

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
          <Route
          path="/form"
          element={<PostForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
