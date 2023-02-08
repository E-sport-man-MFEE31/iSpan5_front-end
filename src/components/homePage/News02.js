import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function News02() {
  return (
    <>
      <Header />
      {/* News02 */}
      <div className="NewsTitle">
        <div>
          <span>T</span>1’s heartbreak at Worlds 2022
        </div>
      </div>
      <div className="InformationPage">
        <div className="NewsImg02"></div>
      </div>
      <div className="InformationPage">
        <div className="NewsText">
          SAN FRANCISCO -- DRX beat T1 3-2 on Saturday to
          win the organization’s first League of Legends
          World Championship and prevent T1 and star player
          Lee “Faker” Sang-hyeok from getting their record
          fourth Worlds title.
          <br />
          <br />
          The win was a culmination of DRX’s Cinderella run
          to the Worlds final. As the fourth seed from
          Korea, DRX were one of the unlikeliest winners of
          the League of Legends World Championship.
          <br />
          <br />
          Kim "Deft" Hyuk-kyu, a League of Legends veteran
          in his 10th season, won his first world
          championship in his first appearance in the Worlds
          final. At 26, he became the oldest player to ever
          win Worlds.
        </div>
      </div>
      <Footer />
    </>
  );
}

export default News02;
