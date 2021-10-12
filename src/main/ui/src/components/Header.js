import React from "react";

import headerImg from "../assets/Windows-11.png";

export class Header extends React.Component {
  render() {
    return (
      <div>
        <div class="Title">
          <h1>
            Microsoft announces Windows 11, with a new design, Start menu, and
            more
          </h1>
        </div>
        <div class="Author">
          <h5>By: Tom Warren | Jun 24, 2021 11:06 AM EDT</h5>
        </div>
        <div class="Image-Pane">
          <img src={headerImg} alt="Windows-11" id="headerImg" />
          <text>A new version of Windows is officially on the way</text>
        </div>
      </div>
    );
  }
}
