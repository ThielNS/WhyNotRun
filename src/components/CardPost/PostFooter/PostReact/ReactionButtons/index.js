import React from 'react';
import './reactionbuttons.scss';
import Button from "../../../../Button/index";

const ReactionButtons = ({ agree, disagree, comments }) => (
  <div className="reaction-buttons col-sm-12 row -align-center -space-between">
    <div className="row">
      <button className="button agree-button -active">
        <span className="count">{agree} <i className="fa fa-thumbs-o-up"/></span>
        <span className="label">Concordam</span>
      </button>
      <button className="button disagree-button">
        <span className="count">{disagree} <i className="fa fa-thumbs-o-down"/></span>
        <span className="label">Discordam</span>
      </button>
      <button className="button comments-button">
        <span className="count">{comments} <i className="fa fa-comments"/></span>
        <span className="label">Comentários</span>
      </button>
    </div>
    <div className="row">
      <Button style="add-comment-button" title="Comentar" icon="comment"/>
      <Button style="share-button" title="Compartilhar" icon="share-alt"/>
    </div>
  </div>
);

export default ReactionButtons;