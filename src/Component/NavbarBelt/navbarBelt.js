import React from 'react'
import './navbarBelt.css'
import sitelogo from '../../Assets/sitelogo.png'
import india from '../../Assets/india.png'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

const NavbarBelt = () => {
  return (
    <div className="navbarBelt">
      <div className="leftNavBelt">
        <Link to={"/"} className='leftNavbeltLogo'>
          <img className='sitelogoNavbar' src={sitelogo} alt="SiteLogo" />
        </Link>
        <div className='navbarBeltLocation'>
          <div className='navbarBeltLocationImg'>
            <LocationOnOutlinedIcon className='navbarBeltLocationImgIcon' sx={{ fontSize: '22px' }} />
          </div>
          <div className='navbarBeltLocationPlace'>
            <div className='navbarBeltLocationTop'>Delivering to India 734429</div>
            <div className='navbarBeltLocationBottom'>Update Location</div>
          </div>
        </div>
      </div>

      <div className="centerNavBeltSearchBox">
        <div className='navbarBeltSearchDiv'>
          <div className='navbarbeltSearchBoxAll'>
            <div className='navbarBeltSearchBoxAllText'>All</div>
            <ArrowDropDownIcon sx={{ fontSize: '20px'}} />
          </div>

          <input className='navbarBeltSearchBoxInput' type="text" placeholder='Search Uniformat.com' />
          <div className='searchIconNavbarBelt'>
            <SearchIcon className='SearchBoxInputIcon' sx={{ fontSize: '26px' }} />
          </div>
        </div>
      </div>

      <div className="rightSiteNavBelt">
        <div className='indianFlagCode'>
          <img className='indianFlag' src={india} alt="Indian Flag" />
          <div className='indiaCodeNavbarBelt'>EN<ArrowDropDownOutlinedIcon sx={{ fontSize: '16px', marginTop: '1px',marginLeft: '-0.4px' }} className='indiaCodeNavbarBeltDrp' /></div>
        </div>
        <div className="helloSignInNavbarBelt">
          <div className="helloTopNavbarBelt">Hello, User</div>
            <div className="indiaCodeNavbarBelt">Accounts & Lists</div>
          </div>
          <Link to="/cart" className="helloSignInNavbarBelt">
            <span className="cartItemNumberNavbarBelt"> 2</span>
            <div className="helloTopNavbarBelt">
              <ShoppingCartOutlinedIcon />
            </div>
          </Link>
        </div>
      </div>
  )
}

export default NavbarBelt
