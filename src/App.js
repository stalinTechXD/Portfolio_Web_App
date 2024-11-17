import './App.css';
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Projects from './pages/Projects';
import Contact from './pages/Contact'; 
function App() {

    return (
        <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path ='/' element = {<Home />}/>
                <Route path ='/projects' element = {<Projects />}/>
                <Route path ='/blogs' element = {<Blogs />}/>
                <Route path ='/contact' element = {<Contact />}/>
            </Routes>
        </BrowserRouter>
        </div>
    );

}

export default App;