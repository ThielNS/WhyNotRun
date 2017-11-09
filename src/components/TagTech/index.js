import React from 'react';
import './tagstech.css'

const TagTech = ({ tags }) => {
  return (
    <div className="tags-tech">
      {tags.map((t, i) => (
        <span className="tag" key={i}>{t.name}</span>
        ))}
    </div>
  );
}

export default TagTech;

