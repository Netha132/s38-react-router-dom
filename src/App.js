
import './App.css';
import Home from './components/Home';
import LogIn from './components/LogIn';
import LogOut from './components/LogOut';
import Profile from './components/Profile';
import SignIn from './components/SignIn';
import About from './components/About';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Support from './components/Support';
import Services from './components/Services';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LogIn/>}></Route>
      <Route path='/signin' element={<SignIn/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/logout' element={<LogOut/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/support' element={<Support/>}></Route>
      <Route path='/services' element={<Services/>}></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
