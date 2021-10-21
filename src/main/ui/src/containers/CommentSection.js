import React from "react";
import axios from "axios";
import Moment from "moment";

import { Comment } from "../components/Comment";

export class CommentSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numComments: 0,
      comments: [],
      userCreateInput: "",
      userCommentInput: "",
    };
  }

  componentDidMount() {
    this.retreiveComments();
  }

  retreiveComments = () => {
    axios.get("/getCommentSection").then((response) => {
      this.setState({
        numComments: response.data.num,
        comments: response.data.commentSection,
      });
    });
  };

  showComments() {
    let commentList = [];
    this.state.comments.forEach((comm) => {
      var name = comm.comment[0].name;
      var commentid = comm.comment[0].commentid;
      var posted = comm.comment[0].posted;
      var text = comm.comment[0].text;
      var likes = comm.comment[0].likes;
      var dislikes = comm.comment[0].dislikes;
      commentList.push(
        <Comment
          comClass="Comment"
          name={name}
          commentid={commentid}
          posted={posted}
          text={text}
          likes={likes}
          dislikes={dislikes}
          update={this.retreiveComments}
        />
      );
      if (comm.replies != null) {
        comm.replies.forEach((reply) => {
          var replyName = reply.name;
          var commentid = reply.commentid;
          var parentid = reply.parentid;
          var posted = reply.posted;
          var text = reply.text;
          var likes = reply.likes;
          var dislikes = reply.dislikes;
          commentList.push(
            <Comment
              comClass="Reply"
              name={replyName}
              parentName={name}
              commentid={commentid}
              parentid={parentid}
              posted={posted}
              text={text}
              likes={likes}
              dislikes={dislikes}
              update={this.retreiveComments}
            />
          );
        });
      }
    });
    return commentList;
  }

  handleUserChange = (e) => {
    this.setState({ ...this.state, userCreateInput: e.target.value });
  };

  handleCommentChange = (e) => {
    this.setState({ ...this.state, userCommentInput: e.target.value });
  };

  handlePost = (e) => {
    e.preventDefault();
    if (
      this.state.userCommentInput !== "" &&
      this.state.userCreateInput !== ""
    ) {
      var timestamp = Moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
      axios
        .post("/users/add/" + this.state.userCreateInput)
        .then((response) => {
          axios
            .post(
              "/comments/add/" +
                this.state.userCreateInput +
                "/" +
                timestamp +
                "/" +
                this.state.userCommentInput
            )
            .then((response) => {
              this.retreiveComments();
              this.setState({
                ...this.state,
                userCommentInput: "",
                userCreateInput: "",
              });
            });
        });
    }
  };

  render() {
    return (
      <div>
        <h1>{this.state.numComments} Comments</h1>
        <div class="Input">
          <div>
            <input
              id="userBox"
              type="text"
              placeholder="Enter your name..."
              value={this.state.userCreateInput}
              onChange={(e) => this.handleUserChange(e)}
            />
          </div>
          <div>
            <textarea
              id="commentBox"
              type="text"
              placeholder="Write your comment..."
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
        {this.showComments()}
      </div>
    );
  }
}
