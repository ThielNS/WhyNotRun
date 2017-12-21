import React, { Component } from 'react';
import PostReact from "./PostReact";
import PostComments from "./PostComments";
import AddCommentContainer from "../../../containers/AddCommentContainer";
import Button from "../../Button";

class PostFooter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showAddComment: false,
    };
  }

  visibleAddComment = () => {
    const { showAddComment } = this.state;
    this.setState({ showAddComment: !showAddComment});
  };

  showMoreComments = () => {

    const { listComments, postId, postIndex, comments } = this.props;
    const commentIndex = comments.length - 1;
    const commentId = comments[commentIndex].id;

    listComments(postIndex, postId, commentId, 7);

  };


  render() {

    const { postId, postIndex, reactions, comments } = this.props;
    const { showAddComment } = this.state;

    const classAddComment = showAddComment ? '-show' : '';
    const moreComments = (
      <div className="row -center -direct-column">
        <Button
          classStyle="-small"
          title="Ver mais comentrários"
          style={{marginBottom: '-20px'}}
          onClick={this.showMoreComments}
        />
        <PostComments comments={comments}/>
      </div>
    );
    const showMoreComments = postIndex %5 ===0 ? moreComments : showAddComment ? moreComments : null;

    return (
      <footer className="post-footer">
        <PostReact reactions={reactions} postId={postId} postIndex={postIndex} visibleAddComment={this.visibleAddComment.bind(this)}/>
        {showMoreComments}
        <AddCommentContainer id={`input-${postId}`} postId={postId} postIndex={postIndex} className={classAddComment}/>
      </footer>
    );
  };
}

export default PostFooter;

