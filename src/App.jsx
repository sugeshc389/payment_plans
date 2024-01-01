import './App.css'
// import { Navbar } from './components/Navbar'
// import { SideBar } from './components/SideBar'
import { FaBell } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Navbar from './components/navbar/Navbar';
import SideMenu from './components/sidemenu/SideMenu';
import Cards from './components/body/Cards';


const App = () => {
  return (
    <div className='App'>
      <div className='bell'>
        <span>3</span>
        <FaBell style={{ fontSize: '20px', color: '#2b7eca' }} />
      </div>
      <div className="scroll"></div>
      <div className="add"><button><FaPlus style={{ color: '#d127b5' }} /></button></div>
      <Navbar />
      <div className="content">

        <div style={{ display: 'flex' }}>
         <SideMenu/>
         <Cards/>


        </div>
      </div>
    </div>
  )
}

export default App
