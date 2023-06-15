import React from "react";
import introductionImg from "../assets/images/introduction.svg";
//import OverlayMenu from 'src/components./OverlayMenu'

import PlayIcon from "../assets/images/playicon.svg";
import Button from "./Button";

const Introduction = () => {
  return (
    // Grid mentiqinden istifade edeceyik

    <div className="ai-introduction">
      <div className="wrapper">
        <div className="introduction row">
          <div className="left-side  col-12 col-md-6 ">
            <h6>Next generation platform</h6>
            <h1>
              Arficial Intelligence <br /> & Syber security
            </h1>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,{" "}
              <br /> print, and publishing industries for previewing layouts and{" "}
              <br />
              visual mockups.
            </p>

            <div className="button-groups  mt-5">
              <Button buttonDeyeri="Get Started" />
              <Button buttonDeyeri="Watch Video" icon={PlayIcon} />
            </div>
          </div>

          <div className="right-side  col-12 col-md-6  d-flex justify-content-end">
            <img src={introductionImg} className="w-100" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
// bg-warning { sari rengi } bildirir
// bg-success { yasil rengi } bildirir
