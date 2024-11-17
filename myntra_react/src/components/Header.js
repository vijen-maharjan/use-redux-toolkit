import { CgProfile } from "react-icons/cg";
import { GiSelfLove } from "react-icons/gi";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"
const Header=()=>{
    const bags=useSelector(store=> store.bags)
    //console.log(bags); //it must be array
    
    return (
        <header>
        <div className="logo_container">
            <Link to="/">
              <img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home"/>

              </Link>
        </div>
        <nav className="nav_bar">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Studio <sup>New</sup></a>
        </nav>
        <div className="search_bar">
            <input className="search_input" placeholder="Search for products, brands and more"/>
        </div>
        <div className="action_bar">
            <div className="action_container">
                <CgProfile />
                <span className="action_name">Profile</span>
            </div>

            <div className="action_container">
            <GiSelfLove />
                <span className="action_name">Wishlist</span>
            </div>

            <Link className="action_container" to="/bags">
            <FaCartArrowDown />
                <span className="action_name">Bag</span>
                <span className="bag-item-count">{bags.length}</span>
            </Link>
        </div>
    </header>
    )
}
export default Header;