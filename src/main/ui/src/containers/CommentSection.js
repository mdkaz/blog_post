import React from "react";

import { Comment } from "../components/Comment";

export class CommentSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numComments: 3,
    };
  }

  showComments(num) {
    let commentList = [];
    for (var i = 0; i < num; i++) {
      commentList.push(<Comment />);
    }
    return commentList;
  }

  render() {
    return (
      <div>
        <h1>Comments</h1>
        {this.showComments(this.state.numComments)}
      </div>
    );
  }
}
