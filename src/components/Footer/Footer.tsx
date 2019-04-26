import "./scss/index.scss";

import * as React from "react";

import { SocialMediaIcon } from "..";
import { SOCIAL_MEDIA } from "../../core/config";
import Nav from "./Nav";


const Footer: React.FC = () => (
  <div className="footer" id="footer">
    <div className="footer__favicons container">
      {SOCIAL_MEDIA.map(medium => (
        <SocialMediaIcon medium={medium} key={medium.ariaLabel} />
      ))}
  <div>
    <span>Thủy Ngô</span> <br />
    <span>Đình làng tống vũ, thôn Tống Vũ, xã Vũ Chính, Thành phố Thái Bình.</span><br />
    <span>Điện thoại 070 774-0013 / hi@thuyngo.vn</span>
    </div>
    </div>
    <Nav />
  </div>
);

export default Footer;
