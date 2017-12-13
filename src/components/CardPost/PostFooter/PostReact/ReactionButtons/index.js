import React, { Component } from 'react';
import './reactionbuttons.scss';
import Button from "../../../../Button/index";

class ReactionButtons extends Component {

  changeReaction = (value) => {

    const { reactions, postId, postIndex } = this.props;

    reactions(postId, postIndex, value);
  };

  render() {

    const { agree, disagree, comments, like, changeAddComment } = this.props;

    return (
      <div className="reaction-buttons col-sm-12 row -align-center -space-between">
        <div className="row">
          <button
            className={`button agree-button ${like === true ? `-active` : ``}`}
            onClick={() => this.changeReaction(true)}
          >
            <span className="count">{agree} <i className="fa fa-thumbs-o-up"/></span>
            <span className="label">Concordam</span>
          </button>
          <button
            className={`button disagree-button ${like === false ? `-active` : ``}`}
            onClick={() => this.changeReaction(false)}
          >
            <span className="count">{disagree} <i className="fa fa-thumbs-o-down"/></span>
            <span className="label">Discordam</span>
          </button>
          <button className="button comments-button" onClick={changeAddComment}>
            <span className="count">{comments} <i className="fa fa-comments"/></span>
            <span className="label">Comentários</span>
          </button>
        </div>
        <div className="row">
          <Button style="add-comment-button" title="Comentar" icon="comment" onClick={changeAddComment}/>
          <Button style="share-button" title="Compartilhar" icon="share-alt"/>
        </div>
      </div>
    );
  }
}

export default ReactionButtons;