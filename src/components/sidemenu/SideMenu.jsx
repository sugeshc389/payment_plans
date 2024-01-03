
import "./sidemenu.css";
import { IoIosArrowForward } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiShutDownLine } from "react-icons/ri";
import table from "../../assets/table.png";
import FAQ from "../../assets/faq.png";
import support from "../../assets/support.png";
import addon from "../../assets/token.png";
import perks from "../../assets/perks.png";
const SideMenu = () => {


  return (
    <>
      <GiHamburgerMenu className="toggleBtn" style={{ position: "absolute" }} />
      <div className="sideBar">
        <div className="sidebar-content">
          <div className="userDetails">
            <div className="img">
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOuWIaHp9DuOVnnRaT-Y_tRE57_Ivw-agMDz7JTUMgXQ&s' alt="" />
            </div>
            <p>
              Ram Mohan{" "}
              <span>
                <IoIosArrowForward />
              </span>
            </p>
            <p>rammohan2@gmail.com</p>
          </div>
          <div className="navigation">
            <ul>
              <a href="">
                <li className="liactive">
                  <img src={table} alt="" />
                  <span>Dahboard</span>
                </li>
              </a>
              <a href="">
                <li>
                  <img src={perks} alt="" />
                  <span>Perks</span>
                </li>
              </a>
              <a href="">
                <li>
                  <img src={addon} alt="" />
                  <span>Addons</span>
                </li>
              </a>
              <a href="">
                <li>
                  <img src={FAQ} alt="" />
                  <span>FAQ</span>
                </li>
              </a>
              <a href="">
                <li>
                  <img src={support} alt="" />
                  <span>Support</span>
                </li>
              </a>
            </ul>
          </div>
        </div>
        <button>
          Logout{" "}
          <span>
            <RiShutDownLine />
          </span>
        </button>
      </div>
    </>
  );
};

export default SideMenu;