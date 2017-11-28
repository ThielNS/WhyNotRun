import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Avatar from "../../../Avatar/index";

class AddComment extends Component {

  render () {

    const { id, className } = this.props;
    const local = localStorage;
    const token = local.getItem ('userToken');
    const user = JSON.parse (local.getItem ('user'));


    return (
      <div className={`add-comment ${className}`} id={id}>
        {token ? (
          <form className='add-comment-form'>
            <Avatar img={user.picture}/>
            <input type="text" placeholder="Participe da discussão."/>
          </form>  
        ) : (
          <div className="col-sm-12 row -center -align-center">
            <h4>Faça login para comentar.</h4>
            <Link to="/login" className="button -second -no-bg"><i className="fa fa-lock"/> Login</Link>
          </div>
        )}
      </div>
    );
  }
}

export default AddComment;

