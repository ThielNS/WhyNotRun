import React from 'react';
import moment from 'moment';
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import TagTech from "../TagTech";
import PostFooter from "./PostFooter";
import './cardpost.css';
// import PropTypes from "prop-types";


const CardPost = ({UserName,UserPictures,UserProfession,DateCreation,Title,Description,Techies,Points,Comments}) => {

  const point = -10;

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

// CardPost.propTypes = {
//   name: PropTypes.string.isRequired
// }

export default CardPost;