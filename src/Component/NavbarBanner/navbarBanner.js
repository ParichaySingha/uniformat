import React from 'react'
import './navbarBanner.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const NavbarBanner = () => {
  const options = [
    { "name": "Hotel/Hospitality" },
    { "name": "School" },
    { "name": "Automobiles" },
    { "name": "Corporate" },
    { "name": "Today's Deals" },
    { "name": "Restaurant" },
    { "name": "Security Guard" },
    { "name": "Hospital" },
    { "name": "Medical factory" },
    { "name": "Factory Workers" },
    { "name": "Catering" },
    { "name": "T-Shirts" },
    { "name": "Aprons" }
  ];
  return (
    <div className="navbarBanner">
      <div className="navbarBannerOptionsLeft">
        <div className="optionsNavbarBanner">
          <MenuIcon sx={{ fontSize: "24px" }} />
          <div className="allOptionsNavbarBanner">All</div>
        </div>
        {
          options.map((item, ind) => (
            <Link to={'/products'} className="optionsNavbarBanner" key={ind}>
              <div className="allOptionsNavbarBanner">{item.name}</div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default NavbarBanner