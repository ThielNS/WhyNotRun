import React from 'react';
import './tagstech.css'

const renderTechies = techies => {
  return techies.map((techie, index) => (
    <span className="tag" key={index}>{techie.Name}</span>
  ))
}

const TagTech = ({ tags }) => {
  return (
    <div className="tags-tech">
      {renderTechies(tags)}
    </div>
  );
}

export default TagTech;

