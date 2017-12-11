import React from 'react';
import { Link } from "react-router-dom";
import TagTech from "../../TagTech/index";


const checkAvailability = (arr, val) => {
  return arr.some(function(arrVal) {
    return arrVal.name.toUpperCase().indexOf(val) > -1;
  });
};

const ResultSearch = ({ textSearch, resultSearch }) => {

  const textSearchUpper = textSearch.toUpperCase();

  return (
    <div className="search-result col-sm-12">
      <ul>
        { textSearch && resultSearch.map((item, index) => {

            if (
              (item.title.toUpperCase().indexOf(textSearchUpper) > -1) ||
              (checkAvailability(item.tags, textSearchUpper))
            ) {
              return(
                <li key={index}>
                  <Link to="/" className="row -align-center -space-between col-sm-12 ">
                    <div className="search-result-title">{item.title}</div>
                    <div className="row -align-center">
                      <TagTech tags={item.tags}/>
                    </div>
                  </Link>
                </li>
              )
            }

          })
        }
      </ul>
    </div>
  );
};

export default ResultSearch;