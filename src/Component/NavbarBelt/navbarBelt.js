import React from 'react'
import './navbarBelt.css'
import sitelogo from '../../Assets/sitelogo.png'
import india from '../../Assets/india.png'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import { useSelector } from 'react-redux';

const NavbarBelt = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div className="navbarBelt upgradedNavbarBelt">
      <div className="leftNavBelt">
        
        <div className='navbarBeltLocation'>
          <LocationOnOutlinedIcon className='navbarBeltLocationImgIcon' sx={{ fontSize: '24px' }} />
          <div className='navbarBeltLocationPlace'>
            <div className='navbarBeltLocationTop'>Deliver to <b> 734429</b></div>
            <div className='navbarBeltLocationBottom'>Update Location</div>
          </div>
        </div>
        <Link to={"/"} className='leftNavbeltLogo'>
          <img className='sitelogoNavbar' src={sitelogo} alt="SiteLogo" />
        </Link>
      </div>

      <div className="centerNavBeltSearchBox">
        <div className='navbarBeltSearchDiv'>
          <div className='navbarbeltSearchBoxAll'>
            <span className='navbarBeltSearchBoxAllText'>All</span>
            <ArrowDropDownIcon sx={{ fontSize: '20px'}} />
          </div>
          <input className='navbarBeltSearchBoxInput' type="text" placeholder='Search Uniformat.com' />
          <button className='searchIconNavbarBelt'>
            <SearchIcon sx={{ fontSize: '26px', color: '#fff' }} />
          </button>
        </div>
      </div>

      <div className="rightSiteNavBelt">
        <div className='indianFlagCode'>
          <img className='indianFlag' src={india} alt="Indian Flag" />
          <div className='indiaCodeNavbarBelt'>
            EN
            <ArrowDropDownOutlinedIcon sx={{ fontSize: '16px', marginTop: '1px', marginLeft: '-0.4px' }} />
          </div>
        </div>
        <div className="helloSignInNavbarBelt">
          <PersonIcon sx={{ fontSize: '20px', marginRight: '5px' }} />
          <div className="helloTopNavbarBelt">User</div>
        </div>
        <Link to="/cart" className="cartNavbarBelt">
          <ShoppingCartOutlinedIcon sx={{ fontSize: '28px' }} />
          <span className="cartItemNumberNavbarBelt">{cartItems.length}</span>
        </Link>
      </div>
    </div>
  )
}

export default NavbarBelt