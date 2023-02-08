import React from "react";
import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsPinterest,
  BsYoutube,
} from "react-icons/bs";
import { Link } from "react-router-dom";

import "./footer.css";

function Footer() {
  const nav_item = [
    "關於",
    "買家服務",
    "退換貨問題",
    "檢舉濫用",
    "隱私政策",
    "電競人條款",
  ];
  return (
    <>
      <footer>
        <div>
          <nav>
            <ul>
              {nav_item.map((v, i) => {
                return <li key={i}>{v}</li>;
              })}
            </ul>
          </nav>
          <div className="line"></div>
          <div>
            <div>
              <div>
                Copyright © 2022 / a0922568671@gmail.com /
                前端工程師就業養成班(MFEE31)
              </div>

              <div className="icon-group">
                <Link to="#/">
                  <BsFacebook />
                </Link>
                <Link to="#/">
                  <BsTwitter />
                </Link>
                <Link to="#/">
                  <BsInstagram />
                </Link>
                <Link to="#/">
                  <BsPinterest />
                </Link>
                <Link to="#/">
                  <BsYoutube />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
