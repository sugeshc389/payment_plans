import './sidemenu.css'
import { MdDashboard } from "react-icons/md";
import { PiPottedPlantFill } from "react-icons/pi";
import { SlPuzzle } from "react-icons/sl";

const SideMenu = () => {
  return (
    <div className='sidemenu'>
      <button className='side-btn'> <MdDashboard className='icons' />Dashboard</button>
      <button className='side-btn'> <PiPottedPlantFill className='icons' />Perks</button>
      <button className='side-btn'> <SlPuzzle className='icons' />Addons</button>
      <button className='side-btn'>FAQ</button>
      <button className='side-btn'>Support</button>
    </div>
  )
}

export default SideMenu