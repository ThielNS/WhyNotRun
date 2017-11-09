import React from 'react';
import './tagstech.css'

const TagTech = ({ tags }) => {
  const tag = tags ? tags : {}
  return (
    <div className="tags-tech">
      {tag.map((t, i) => (
        <span className="tag" key={i}>{t.name}</span>
        ))}
    </div>
  );
}

export default TagTech;

