import React from "react";

import like from "../assets/like.png";
import dislike from "../assets/dislike.png";

export class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "Michael",
      comment:
        "This is a test comment thats a lot longer so that it wraps around a second line and I can see how that looks",
      likes: 0,
      dislikes: 0,
      datePosted: "10-21-2021",
    };
  }

  render() {
    return (
      <div class="Comment">
        <div class="Details">
          <text>
            {this.state.userName} on {this.state.datePosted}{" "}
          </text>
        </div>
        <div class="Post">
          <text>{this.state.comment}</text>
        </div>
        <div class="Meta">
          <img src={like} alt="like" id="like" style={{ marginRight: "3px" }} />
          <text id="like">{this.state.likes} </text>
          <img
            src={dislike}
            alt="dislike"
            id="dislike"
            style={{ marginRight: "4px" }}
          />
          <text id="dislike">{this.state.dislikes}</text>
        </div>
      </div>
    );
  }
}
