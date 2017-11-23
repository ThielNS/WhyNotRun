import React from 'react';
import Avatar from '../Avatar';
import Button from '../Button';
import './cardpost.scss';

const CardPost = ({ tags }) => {

  const point = -10;
  return (
    <div className="">
      <div className="post-card">
        <div className="post-header row -space-between -align-center">
          <div className="post-user row -align-center">
            <Avatar/>
            <span>{'Gabriel Souza'}</span>
          </div>
          <div className="post-data">
            <p>Postado a 1 dia</p>
          </div>
        </div>

        <div className="post-content">
          <h3>Title Tech</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus animi, atque consequatur</p>
        </div>

        <div className="tags">
          {tags.map((t, i) => (
            <span className="tag" key={i}>{t.title}</span>
          ))}
        </div>

        <footer className="post-footer">
          <div className="row -space-between post-data">
            <div className="post-react">
              <Button icon="thumbs-o-up" style="-third -no-bg" />
              <Button icon="thumbs-o-down" style="-danger -no-bg" />
            </div>
            <span className={point < 0 ? 'point -negative' : point === 0 ? 'point' : 'point -positive'}>{point} Pontos</span>
          </div>

          <div className="post-comments">
            <ul className="row -direct-column">
              <li className="col-sm-12">
                <Avatar/>
                <div className="comment">
                  <span>{'Gabriel Souza'}</span>
                  <p>Lorem Ispsum dolos sit amet</p>
                </div>
              </li>
              <li>
                <Avatar/>
                <div className="comment">
                  <span>{'Gabriel Souza'}</span>
                  <p>Lorem Ispsum dolos sit amet</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="add-comment">
            <form>
              <input type="text" placeholder="Comentar..."/>
              <Button icon="send" style="-third -circle"/>
            </form>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default CardPost;