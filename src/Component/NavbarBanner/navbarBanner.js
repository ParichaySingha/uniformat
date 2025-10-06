import React, { useState } from "react";
import "./navbarBanner.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';

const options = [
    { "name": "Home", to: "/" },
    { "name": "Hotel/Hospitality" },
    { "name": "School" },
    { "name": "Automobiles" },
    { "name": "Corporate" },
    { "name": "Restaurant" },
    { "name": "Security Guard" },
    { "name": "Hospital" },
    { "name": "Medical factory" },
    { "name": "Factory Workers" },
    { "name": "Catering" },
    { "name": "T-Shirts" },
    { "name": "Aprons" }
  ];

const sidebarSections = [
  {
    header: null,
    items: [{ type: "greeting", label: "Login/Register" }],
  },
  {
    items: [
      { label: "Home", to: "/" },
      { label: "About Us", to: "/products" },
    ],
  },
  {
    header: "Shop by Category",
    items: [
      {
        label: "Hotel/Hospitality", to: "/products",
        submenu: true,
        submenuItems: ["Housekeeping Uniform", "Maintenance Uniform","Kitchen Uniform","FCB/GSA/Waiter Uniform","Front Office Desk Uniform","Spa Uniform","Manager","Bell Boy","Valet Uniform","Hostess Uniform","Security Guard Uniform","Back Office"],
      },
      {
        label: "School",
      },
      {
        label: "Automobiles",
      },
      {
        label: "Corporate",
      },
      {
        label: "Restaurant",
        submenu: true,
        submenuItems: ["Cafe Uniform", "Pub Uniform"],
      },
      {
        label: "Security Guard",
      },
      {
        label: "Hospital",
        submenu: true,
        submenuItems: ["Doctor Coat", "Nurse Uniform","Patient Uniform","Back Office"],
      },
      {
        label: "Medical factory",
      },
      {
        label: "Factory Workers",
      },
      {
        label: "Catering Uniform",
      },
      {
        label: "T-Shirts",
      },
      {
        label: "Aprons",
        submenu: true,
        submenuItems: ["Aprons 1", "Aprons 2", "Aprons 3", "Aprons 4"],
      },
    ],
  }
];

const NavbarBanner = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [submenu, setSubmenu] = useState(null); // Track open submenu

  return (
    <div className="navbarBanner">
      <div className="navbarBannerOptionsLeft">
        <div className="optionsNavbarBanner"
          onClick={() => setSidebarOpen(true)}
          style={{ cursor: "pointer" }}>
          <MenuIcon sx={{ fontSize: "24px" }} />
          <div className="allOptionsNavbarBanner">All</div>
        </div>
        {
          options.map((item, ind) => (
            <Link to={item.to || '/products'} className="optionsNavbarBanner" key={ind}>
              <div className="allOptionsNavbarBanner">{item.name}</div>
            </Link>
          ))
        }
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebarHeader">
          <CloseIcon
            sx={{ fontSize: "28px", cursor: "pointer" }}
            onClick={() => {
              setSidebarOpen(false);
              setSubmenu(null);
            }}
          />
        </div>
        <div className="sidebarSections">
          {!submenu &&
            sidebarSections.map((section, idx) => (
              <div key={idx} className="sidebarSection">
                {section.header && (
                  <div className="sidebarSectionHeader">{section.header}</div>
                )}
                {section.items.map((item, itemIdx) => {
                  if (item.type === "greeting") {
                    return (
                      <div className="sidebarGreeting" key={itemIdx}>
                        <span className="sidebarGreetingIcon"><PersonIcon></PersonIcon></span>
                        {item.label}
                      </div>
                    );
                  }
                  return (
                    <div
                      className={`sidebarOptionRow${
                        item.submenu ? " hasSubmenu" : ""
                      }`}
                      key={itemIdx}
                      onClick={() =>
                        item.submenu
                          ? setSubmenu({ sectionIdx: idx, itemIdx })
                          : setSidebarOpen(false)
                      }
                    >
                      <Link
                        to={item.to || "#"}
                        className="sidebarOption"
                        onClick={(e) => {
                          if (item.submenu) e.preventDefault();
                          else setSidebarOpen(false);
                        }}
                      >
                        {item.label}
                      </Link>
                      {item.submenu && (
                        <ChevronRightIcon className="sidebarChevron" />
                      )}
                    </div>
                  );
                })}
                {idx !== sidebarSections.length - 1 && (
                  <div className="sidebarDivider"></div>
                )}
              </div>
            ))}
          {/* Submenu */}
          {submenu &&
            (() => {
              const item =
                sidebarSections[submenu.sectionIdx].items[submenu.itemIdx];
              return (
                <div className="sidebarSubmenu">
                  <div
                    className="sidebarOptionRow"
                    onClick={() => setSubmenu(null)}
                  >
                    <ChevronLeftIcon className="sidebarChevron" />
                    <span className="mainmanu" style={{ marginLeft: 8, color: "black" }}>MAIN MANU</span>
                  </div>
                  <div className="sidebarSectionHeader">{item.label}</div>
                  {item.submenuItems &&
                    item.submenuItems.map((sub, subIdx) => (
                      <div className="sidebarOptionRow" key={subIdx}>
                        <Link
                          to={`/products?category=${encodeURIComponent(
                            item.label
                          )}&subcategory=${encodeURIComponent(sub)}`}
                          className="sidebarOption"
                          onClick={() => setSidebarOpen(false)}
                        >
                          {sub}
                        </Link>
                      </div>
                    ))}
                </div>
              );
            })()}
        </div>
      </div>
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="sidebarOverlay"
          onClick={() => {
            setSidebarOpen(false);
            setSubmenu(null);
          }}
        />
      )}
    </div>
  );
};

export default NavbarBanner;
