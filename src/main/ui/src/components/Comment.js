import React from "react";

export class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "Michael",
      comment: "",
      likes: 0,
      dislikes: 0,
      datePosted: "10-21-2021",
    };
  }

  render() {
    return (
      <div>
        <text>{this.state.userName}</text>
      </div>
    );
  }
}
