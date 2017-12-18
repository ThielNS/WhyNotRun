import React, { Component } from 'react';
import { notification } from 'antd';
import 'antd/lib/notification/style/index.css';
import './reactionbuttons.scss';
import Button from "../../../../Button/index";
import { Link } from "react-router-dom";

class ReactionButtons extends Component {

  changeReaction = (value) => {

    const { reactions, postId, postIndex, access } = this.props;
    if(access.userToken) {
      reactions(postId, postIndex, value);
    } else {
      notification.open({
        message: 'Reação',
        description: 'Para reagir é necessário fazer login!',
      });
    }
  };

  render() {

    const { agree, disagree, comments, changeAddComment, access } = this.props;
    let { like } = this.props;

    if(!access.userToken) {
      like = null;
    }

    const location = window.location.href;

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
          <Button classStyle="add-comment-button" title="Comentar" icon="comment" onClick={changeAddComment}/>
          <div
            className="fb-share-button row -align-center"
            data-href={location}
            data-layout="button"
            data-size="large"
            data-mobile-iframe="false"
          >
            <Link
              className="fb-xfbml-parse-ignore button"
              target="_blank"
              to={`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(location)}%2F&amp;src=sdkpreparse`}
            >
              <i className="fa fa-facebook-official"/>
              Compartilhar
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ReactionButtons;