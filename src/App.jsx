import './App.css'
import Avatar from './components/avatar/Avatar'
import Logo from './components/logo/Logo'
import SideMenu from './components/sidemenu/SideMenu'

function App() {
 

  return (
    <div className='main'>
      <div className='sideCard'>
        <Logo/>
        <Avatar/>
        <SideMenu/>

      </div>
      <div className='bodyCard'>

      </div>
      
    </div>
  )
}

export default App
