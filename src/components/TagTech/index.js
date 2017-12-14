import React from 'react';
import './tagstech.scss'
import { Tooltip } from "antd";
import 'antd/lib/tooltip/style/index.css';

const renderTechies = (techies) => {
  return techies.slice(0,2).map((techie, index) => (
    <span className="tag" key={index}>{techie.name}</span>
  ));
};

const TagTech = ({ tags }) => {

  const lengthTags = tags.length;

  const titleTechies = tags.slice(2).map(item => {
    return item.name;
  }).join(`, `);

  return (
    <div className="tags-tech">
      {renderTechies(tags)}
      {lengthTags > 2 ? (
        <Tooltip placement="bottom" title={titleTechies} arrowPointAtCenter>
          <span className="tag">{`+${lengthTags - 2}`}</span>
        </Tooltip>
      ) : null}
    </div>
  );
};

export default TagTech;

