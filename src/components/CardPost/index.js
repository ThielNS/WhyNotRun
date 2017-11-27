import React from 'react';
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostFooter from "./PostFooter";
import './cardpost.scss';
import PropTypes from 'prop-types';


const CardPost = ({ idPost, title, text, datePublication, user, reactions, technologys, comments }) => {

  return (
    <div className="">
      <div className="post-card">
        <PostHeader user={user} datePublication={datePublication} technologys={technologys}/>
        <PostContent title={title} text={text}/>
        <PostFooter idPost={idPost} reactions={reactions} comments={comments}/>
      </div>
    </div>
  );
};

CardPost.propTypes = {
  idPost: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  datePublication: PropTypes.string.isRequired,
  user: PropTypes.shape(
    PropTypes.shape({
      id: PropTypes.object.isRequired,
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      profession: PropTypes.string.isRequired
    }).isRequired
  ),
  reactions: PropTypes.shape(
    PropTypes.shape({
      agree: PropTypes.number.isRequired,
      disagree: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  technologys: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  ),
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      dateComment: PropTypes.string.isRequired,
      user: PropTypes.shape(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          picture: PropTypes.string.isRequired
        }).isRequired
      ).isRequired
    })
  )
};

export default CardPost;