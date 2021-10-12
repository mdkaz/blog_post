import React from "react";

import "../style/style.css";

import { Header } from "../components/Header";
import { Content } from "../components/Content";
import { CommentSection } from "./CommentSection";

export class Layout extends React.Component {
  render() {
    return (
      <div class="Layout">
        <div class="Header">
          <Header />
        </div>
        <div class="Content">
          <Content />
        </div>
        <hr
          style={{
            borderStyle: "solid",
            borderBottomColor: "white",
            borderBottomWidth: 1,
            width: "50vw",
            marginLeft: 0,
          }}
        />
        <div class="Comments">
          <CommentSection />
        </div>
      </div>
    );
  }
}
