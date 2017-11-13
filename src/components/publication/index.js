import React, { Component } from 'react';
import './publication.css';
import Button from "../Button";

class Publication extends Component {
  //5a059a03e50ef6543868f33d
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
      idTechs: [],
      idUser: '5a04ac2053d35705fcfbc428',
    }
  }
  handleTitle = e => {
    this.setState({ title: e.target.value});
  }
  handleText = e => {
    this.setState({ text: e.target.value});
  }
  submitPost(e) {
    this.props.addPost(this.state.title,this.state.text,this.state.idTechs,this.state.idUser);
  }

  render() {
    const {title,text,idTechs,idUser} = this.state;

    return (
      <div className="container -fluid bg-grey-dark">
        <div className="container -space-v publication">
          <h2>Criar Intriga</h2>
          <form action="" onSubmit={e => this.submitPost(e)}>
            <input type="text" name="title" placeholder="Titulo" className="col-sm-12" onChange={this.handleTitle} value={this.state.title}/>
            <textarea name="text" placeholder="Texto da discussão" className="col-sm-12" onChange={this.handleText} value={this.state.text}/>
            {/*<div className="select-tech">*/}
              {/*<div className="option-tech -header">*/}
                {/*<span>Tecnologias</span>*/}
                {/*<i className="fa fa-angle-down"></i>*/}
              {/*</div>*/}
            {/*</div>*/}
            <label>
              <input type="checkbox" value="1"/>
              React JS
            </label>
            <label>
              <input type="checkbox" value="2"/>
              Angular JS
            </label>
            <label>
              <input type="checkbox" value="3"/>
              Redux
            </label>
            <Button style="-default" title="Postar" icon="send"/>
          </form>
        </div>
      </div>
    );
  }
}

export default Publication;