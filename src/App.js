// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import { Routes, Route } from "react-router-dom"
import Albums from './component/Albums';
import Comments from './component/Comments';
import Posts from './component/Posts';
import Photos from './component/Photos';
import Todos from './component/Todos';
import Users from './component/Users';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Posts/> } />
        <Route path="/comments" element={ <Comments/> } />
        <Route path="/albums" element={ <Albums/> } />
        <Route path="/photos" element={ <Photos/> } />
        <Route path="/todos" element={ <Todos/> } />
        <Route path="/users" element={ <Users/> } />
      </Routes>
      
    </>
  )
}

export default App;
