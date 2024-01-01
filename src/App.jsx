import './App.css'
import Avatar from './components/avatar/Avatar'
import Cards from './components/body/Cards'
import Logo from './components/logo/Logo'
import Navbar from './components/navbar/Navbar'
import SideMenu from './components/sidemenu/SideMenu'

function App() {


  return (
    <div className='main'>
      <div className='sideCard'>
        <Navbar/>
        {/* <Logo /> */}
        {/* <Avatar /> */}
        <SideMenu />

      </div>
      <div className='bodyCard'>
        {/* <Cards /> */}
      </div>

    </div>
  )
}

export default App
