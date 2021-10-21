import React from "react";
import axios from "axios";
import Moment from "moment";

import like from "../assets/like.png";
import dislike from "../assets/dislike.png";

export class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: 0,
      disliked: 0,
      replyBox: 0,
      userCreateInput: "",
      userCommentInput: "",
    };
  }

  // called when like button is clicked. Either adds a like or switches dislike to like
  handleLike = (e) => {
    var command = "";
    if (this.state.liked === 0 && this.state.disliked === 1) {
      command = "/dislikeToLike/" + this.props.commentid;
    } else if (this.state.liked === 0 && this.state.disliked === 0) {
      command = "/addLike/" + this.props.commentid;
    }
    axios.patch(command).then((response) => {
      this.props.update();
      this.setState({ ...this.state, liked: 1, disliked: 0 });
    });
  };

  //called when dislike button is clicked. Either adds a dislike or switches like to dislike.
  handleDislike = (e) => {
    var command = "";
    if (this.state.liked === 1 && this.state.disliked === 0) {
      command = "/likeToDislike/" + this.props.commentid;
    }
    if (this.state.liked === 0 && this.state.disliked === 0) {
      command = "/addDislike/" + this.props.commentid;
    }
    axios.patch(command).then((response) => {
      this.props.update();
      this.setState({ ...this.state, liked: 0, disliked: 1 });
    });
  };

  //called when reply button is clicked. Opens or closes reply box depending on current state.
  handleReply = (e) => {
    this.setState({
      ...this.state,
      replyBox: this.state.replyBox === 1 ? 0 : 1,
    });
  };

  //updates state when user writing their name
  handleUserChange = (e) => {
    this.setState({ ...this.state, userCreateInput: e.target.value });
  };

  //updates state when user writing reply
  handleCommentChange = (e) => {
    this.setState({ ...this.state, userCommentInput: e.target.value });
  };

  //called when post reply button is clicked. Sends a post request through axios to the backend to post the comment. Updates the page with the new comment section
  handlePost = (e) => {
    e.preventDefault();
    if (
      this.state.userCommentInput !== "" &&
      this.state.userCreateInput !== ""
    ) {
      var timestamp = Moment(timestamp).format("YYYY-MM-DD hh:mm:sss");
      axios
        .post("/users/add/" + this.state.userCreateInput)
        .then((response) => {
          axios
            .post(
              "/replies/add/" +
                this.state.userCreateInput +
                "/" +
                this.props.commentid +
                "/" +
                timestamp +
                "/" +
                this.state.userCommentInput
            )
            .then((response) => {
              this.props.update();
              this.setState({
                ...this.state,
                userCommentInput: "",
                userCreateInput: "",
                replyBox: 0,
              });
            });
        });
    }
  };

  render() {
    return (
      <div class={this.props.comClass}>
        <div class="Details">
          <text>
            {this.props.name}{" "}
            {this.props.parentid != null &&
              "replying to " + this.props.parentName}{" "}
            on {this.props.posted}{" "}
          </text>
        </div>
        <div class="Post">
          <text>{this.props.text}</text>
        </div>
        <div class="Meta">
          <img
            src={like}
            onClick={(e) => this.handleLike(e)}
            alt="like"
            id="like"
            style={{ marginRight: "3px", cursor: "pointer" }}
          />
          <text id="like">{this.props.likes} </text>
          <img
            src={dislike}
            onClick={(e) => this.handleDislike(e)}
            alt="dislike"
            id="dislike"
            style={{ marginRight: "3px", cursor: "pointer" }}
          />
          <text id="dislike" style={{ marginRight: "10px" }}>
            {this.props.dislikes}
          </text>
          {this.props.parentid == null && (
            <text
              onClick={(e) => this.handleReply(e)}
              style={{ cursor: "pointer" }}
            >
              Reply
            </text>
          )}
          {this.state.replyBox === 1 && (
            <div class="Reply-Input">
              <div>
                <input
                  id="replyUserBox"
                  type="text"
                  placeholder="Enter your name..."
                  value={this.state.userCreateInput}
                  onChange={(e) => this.handleUserChange(e)}
                />
              </div>
              <div>
                <textarea
                  id="replyCommentBox"
                  type="text"
                  placeholder="Write your reply..."
                  value={this.state.userCommentInput}
                  onChange={(e) => this.handleCommentChange(e)}
                />
              </div>
              <div>
                <button id="post" onClick={(e) => this.handlePost(e)}>
                  Post
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
