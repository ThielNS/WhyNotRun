import React from 'react';
import moment from 'moment';
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import TagTech from "../TagTech";
import PostFooter from "./PostFooter";
import './cardpost.css';


const CardPost = (props) => {

  const point = -10;

  return (
    <div className="">
      <div className="post-card">
        <PostHeader user={props.user} date={props.datePost}/>
        <PostContent title={props.title} text={props.text}/>
        <TagTech tags={props.techs}/>
        <PostFooter points={props.points}/>
      </div>
    </div>
  );
}

export default CardPost;