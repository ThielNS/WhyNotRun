import React from 'react';
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import TagTech from "../TagTech";
import PostFooter from "./PostFooter";
import './cardpost.css';
import PropTypes from 'prop-types';


const CardPost = ({UserName,UserPictures,UserProfession,DateCreation,Title,Description,Techies,Points,Comments}) => {

  const user = {
    name: UserName,
    avatar: UserPictures,
    work: UserProfession,
  };

  return (
    <div className="">
      <div className="post-card">
        <PostHeader user={user} date={DateCreation}/>
        <PostContent title={Title} text={Description}/>
        <TagTech tags={Techies}/>
        <PostFooter points={Points} comments={Comments}/>
      </div>
    </div>
  );
}

CardPost.propTypes = {
  UserName: PropTypes.string.isRequired,
  UserPicture: PropTypes.string.isRequired,
  UserProfession: PropTypes.string.isRequired,
  DateCreation: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  Techies: PropTypes.arrayOf(
    PropTypes.shape({
      Name: PropTypes.string.isRequired
    }).isRequired
  ),
  Points: PropTypes.number.isRequired,
  Comments: PropTypes.arrayOf(
    PropTypes.shape({
      UserName: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired
    })
  )
}

export default CardPost;