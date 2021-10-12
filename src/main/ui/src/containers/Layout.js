import React from "react";

import "../style/style.css";

import { Header } from "../components/Header";
import { Content } from "../components/Content";
import { HorizontalBar } from "../components/HorizontalBar";
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
        <HorizontalBar width="50vw" minWidth="600px" barWidth={1} />
        <div class="Comment-Section">
          <CommentSection />
        </div>
      </div>
    );
  }
}
