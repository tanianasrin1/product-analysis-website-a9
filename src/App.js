import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./components/DashBoard/DashBoard";
import Blogs from "./components/Blogs/Blogs";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import Reviews from "./components/Reviews/Reviews";

function App() {
  return (
    <div >
      
      <Header></Header>
      <Routes>
        <Route path= '/' element={<Home></Home>}></Route>
        <Route path='/review' element= {<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element= {<DashBoard></DashBoard>}></Route>
        <Route path='/blogs' element= {<Blogs></Blogs>}></Route>
        <Route path='/about' element= {<About></About>}></Route>
        <Route path='*' element= {<NotFound></NotFound>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
