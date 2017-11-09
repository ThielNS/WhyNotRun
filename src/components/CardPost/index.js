import React from 'react';
import moment from 'moment';
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import TagTech from "../TagTech";
import PostFooter from "./PostFooter";
import './cardpost.css';


const CardPost = (props) => {

  const point = -10;

  const user = {
    name: props.UserName,
    avatar: props.UserPictures,
    work: props.USerProfession,
  };

  return (
    <div className="">
      <div className="post-card">
        <PostHeader user={user} date={props.dateCreation}/>
        <PostContent title={props.Title} text={props.Description}/>
        <TagTech tags={props.Techies}/>
        <PostFooter points={props.Points}/>
      </div>
    </div>
  );
}

export default CardPost;