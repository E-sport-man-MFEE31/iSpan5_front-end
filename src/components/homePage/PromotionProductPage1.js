import React from "react";
import { Link } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import FCMap from "./FCMap";

import "./homePage.scss";
import "leaflet/dist/leaflet.css";

function PromotionProductPage1() {
  return (
    <>
      <Header />
      {/* PromotionProductPage1 */}
      <div className="imgbox">
        <div className="title">
          <span>A</span>SUS-ROG-Strix-Scope-19
        </div>
        <div className="directions">
          ROG Strix Scope RGB wired mechanical gaming
          keyboard with Cherry MX switches,
          <br /> aluminum frame, Aura Sync lighting and
          additional silver WASD for FPS games.
        </div>
        <div className="button">
          <Link
            to="/product"
            class="btn btn-warning text-white border-0"
          >
            立即購買
          </Link>
        </div>
      </div>
      {/* carousel.js */}
      <div className="carousel">
        <Carousel>
          <Carousel.Item>
            <img
              className="CarouselPage"
              src="./images/CarouselPage01.png"
              alt="Razer Naga V2 Pro"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="CarouselPage"
              src="./images/CarouselPage02.png"
              alt="ROG Strix Scope NX TKL Moonlight White"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="CarouselPage"
              src="./images/CarouselPage03.png"
              alt="ROG Strix Scope NX"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      {/* InformationPage */}
      <div className="InformationPageText">
        <div>
          <span>最</span>新消息
        </div>
      </div>
      <div className="InformationPage">
        <a href="/News01" className="boxNews01">
          <p>
            Faker re-signs with T1 on a three-year contract
          </p>
        </a>
        <a href="/News02" className="boxNews02">
          <p>T1’s heartbreak at Worlds 2022</p>
        </a>
      </div>
      {/* map */}
      <div className="InformationPageText">
        <div className="p-5">
          <span>駐</span>點地圖
        </div>
      </div>
      <FCMap />
      <Footer />
    </>
  );
}

export default PromotionProductPage1;
