import './App.css';
import Footer from './shared/Footer';
//import Login from './AdmiZ
import {Outlet} from 'react-router-dom'
const App = () => {
  return (
   <>
   {/* <Header/> */}
    {/* <p><h1>Helllo</h1></p> */}
   <Outlet/>
   <Footer/>
 
   </>
  );
}
export default App;
