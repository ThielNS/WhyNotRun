import React from 'react';

const ListTechnologys = ({ list, text }) => {
  return (
    <ul className="list-technologys">
      {text && list.map((item, index) => {
        if(item.name.toUpperCase().indexOf(text.toUpperCase()) > -1){
          return (<li key={index}>{item.name}</li>);
        }
      })}
    </ul>
  );
};

export default ListTechnologys;