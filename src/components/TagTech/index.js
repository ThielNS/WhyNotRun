import React from 'react';
import './tagstech.css'

const renderTechies = (techies) => {
  return techies.slice(0,2).map((techie, index) => (
    <span className="tag" key={index}>{techie.name}</span>
  ));
};

const TagTech = ({ tags }) => {

  const lengthTags = tags.length;

  return (
    <div className="tags-tech">
      {renderTechies(tags)}
      {lengthTags > 2 ? (<span className="tag">{`+${lengthTags - 2}`}</span>) : null}
    </div>
  );
};

export default TagTech;

