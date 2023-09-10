import React from 'react';
import "./Footer.css";
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram, TiArrowSortedDown } from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri"
import Home from '../Pages/Home';

const Footer = () => {
  return (
    <div className={"footer"}>
      <div className={"footer_box"}>
        <div className={"footer_box_social"}>
          {/* <Image src={images.logo} alt='footer logo' height={100} width={100}/> */}
          <p>
            The world fastest crypto curncy exchange platform
          </p>
          <div className={"footer_social"}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
          </div>
        </div>
        <div className={"footer_box_discover"}>
          <h3>Discover</h3>

        </div>
        <div className={"footer_box_discover"}>
          <h3>Help Center</h3>

        </div>
        <div className={"footer_box_discover"}>
          <h3>Subscribe</h3>

          <div className={"subscribe_box"}>
            <input type="email" placeholder='Enter your email *' />
            <RiSendPlaneFill className={"subscribe_box_send"} />
          </div>
          <div className={"subscribe_box_info"}>
            <p>disover,collect,sell and buy </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer