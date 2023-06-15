import React from "react";
import clientsImg from "../assets/images/clients.svg";

const WhatAboutClients = () => {
  return (
    <div className="ai-whataboutclients">
      <div className="wrapper">
        <div className="about-clients row d-flex align-items-center">
          <div className="left-side col-12 col-md-6 ">
            <h1 className="text-white my-4">
              What our clients say about <br />
              our awesome solutions
            </h1>
            <p className="text-white">
              To take a trivial example, which of us ever undertakes <br />{" "}
              laborious physical exercise, except to obtain some <br />{" "}
              advantage from it who do not know.
            </p>
            <p className="text-white">
              Lorem ipsum is placeholder text commonly used in the <br />
              graphic, print, and publishing .
            </p>
            <p>
              Lorem ipsum is placeholder previewing layouts and visual <br />{" "}
              mockups.
            </p>
            <p>
              Lorem ipsum is placeholder text commonly used in the <br />{" "}
              graphic, print, and publishing industries for previewing <br />{" "}
              layouts and visual mockups.
            </p>
          </div>

          <div className="right-side col-12 col-md-6">
            <img src={clientsImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatAboutClients;
