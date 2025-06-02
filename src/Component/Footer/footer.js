import React from "react";
import "./footer.css";
import sitelogo from "../../Assets/sitelogo.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContent">
        {/* Get To Know Us section */}
        <div className="footerCont1">
          <div className="contentFooterTitle">Get To Know Us</div>
          <div className="contentFooterSubTitlediv">
            <div className="contentFooterSubTitleCont">About Us</div>
            <div className="contentFooterSubTitleCont">Careers</div>
            <div className="contentFooterSubTitleCont">Press Releases</div>
            <div className="contentFooterSubTitleCont">Uniformat Science</div>
          </div>
        </div>

        {/* Connect With Us section */}
        <div className="footerCont1">
          <div className="contentFooterTitle">Connect With Us</div>
          <div className="contentFooterSubTitlediv">
            <div className="contentFooterSubTitleCont">Instagram</div>
            <div className="contentFooterSubTitleCont">Twitter</div>
            <div className="contentFooterSubTitleCont">Facebook</div>
          </div>
        </div>

        {/* Make Money With Us section */}
        <div className="footerCont1">
          <div className="contentFooterTitle">Make Money With Us</div>
          <div className="contentFooterSubTitlediv">
            <div className="contentFooterSubTitleCont">On Uniformat</div>
            <div className="contentFooterSubTitleCont">
              Sell under Uniformat Accelerator
            </div>
            <div className="contentFooterSubTitleCont">
              Protect and Build Your Brand
            </div>
            <div className="contentFooterSubTitleCont">
              Uniformat Global Selling
            </div>
            <div className="contentFooterSubTitleCont">Become an Affiliate</div>
            <div className="contentFooterSubTitleCont">
              Fulfilment by Uniformat
            </div>
            <div className="contentFooterSubTitleCont">
              Advertise Your Products
            </div>
            <div className="contentFooterSubTitleCont">
              Uniformat Pay on Merchants
            </div>
          </div>
        </div>

        {/* Let Us Help You section */}
        <div className="footerCont1">
          <div className="contentFooterTitle">Let Us Help You</div>
          <div className="contentFooterSubTitlediv">
            <div className="contentFooterSubTitleCont">
              COVID-19 and Uniformat
            </div>
            <div className="contentFooterSubTitleCont">Your Account</div>
            <div className="contentFooterSubTitleCont">Returns Centre</div>
            <div className="contentFooterSubTitleCont">
              100% Purchase Protection
            </div>
            <div className="contentFooterSubTitleCont">
              Uniformat App Download
            </div>
            <div className="contentFooterSubTitleCont">Help</div>
          </div>
        </div>
      </div>
      <div className="amazonImgContainer">
        {" "}
        {/* Changed class name for clarity */}
        <img className="amazonImgFooter" src={sitelogo} alt="Uniformat Logo" />
        <div className="socialIconsContainer">
          <FacebookIcon className="facebookIconFooter" />
          <InstagramIcon className="instagramIconFooter" />
          <TwitterIcon className="twitterIconFooter" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
