import './App.css';
import Footer from './shared/Footer';
//import Login from './AdmiZ
import {Outlet} from 'react-router-dom'
import Body from "./components/Body";
import Header from "./components/Header";


const App = () => {
  return (
   <>

   {/* <Header/> */}
  {/* <p><h1>Helllo</h1></p>  */}
     {/* <div className='welcome'>
  <img src={myImage} alt="My Image" class="image"  width="300px" height="300px"/>
      </div> */}


   <Outlet/>
   {/* <Footer/> */}
   <Header/>
   <Body/> 
   </>
  );
}
export default App;
