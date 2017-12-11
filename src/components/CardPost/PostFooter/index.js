import React, { Component } from 'react';
import PostReact from "./PostReact";
import PostComments from "./PostComments";
import AddComment from "./AddComment";
import AddCommentContainer from "../../../containers/AddCommentContainer";

class PostFooter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showAddComment: false,
    };
  }

  changeAddComment = () => {
    this.setState({ showAddComment: !this.state.showAddComment});
  };

  componentDidUpdate() {

    const addComment = document.getElementById(`input-${this.props.postId}`);

    if(this.state.showAddComment) {
      addComment.classList.add('-show');
      addComment.lastElementChild.lastElementChild.focus();
    } else {
      addComment.classList.remove('-show');
    }
  }

  render() {

    const { postId, postIndex, reactions, comments } = this.props;
    const { showAddComment } = this.state;

    const classAddComment = showAddComment ? '-show' : '';

    return (
      <footer className="post-footer">
        <PostReact reactions={reactions} postId={postId} postIndex={postIndex} changeAddComment={this.changeAddComment.bind(this)}/>
        <PostComments comments={comments}/>
        <AddCommentContainer id={`input-${postId}`} postId={postId} postIndex={postIndex} className={classAddComment}/>
      </footer>
    );
  };
}

export default PostFooter;

