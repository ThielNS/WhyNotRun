import React, { Component } from 'react';
import './publication.css';
import Button from "../Button";

class Publication extends Component {
  render() {
    return (
      <div className="container -fluid bg-grey-dark">
        <div className="container -space-v publication">
          <h2>Criar Intriga</h2>
          <form action="">
            <input type="text" name="title" placeholder="Titulo" className="col-sm-12"/>
            <textarea name="text" placeholder="Texto da discussão" className="col-sm-12"/>
            <Button style="-default" title="Postar" icon="send"/>
          </form>
        </div>
      </div>
    );
  }
}

export default Publication;