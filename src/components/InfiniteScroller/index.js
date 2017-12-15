import React, { Component } from 'react';
import { notification, Spin } from 'antd';
import 'antd/lib/message/style/index.css';
import 'antd/lib/spin/style/index.css';
import InfiniteScroll from 'react-infinite-scroller';
import CardPost from "../CardPost/index";

class InifiniteScroller extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: false,
      hasMore: true,
      page: 0,
    };
  }

  errorLoad = () => {
    notification.open({
      message: 'Postagens',
      description: 'Houve um erro ao carregar as postagens',
    });
  };

  componentWillMount() {
    this.props.listPosts(1)
      .catch(error => {
          this.errorLoad();
      });
  }

  handleInfiniteOnLoad = () => {
    let { page } = this.state;
    page = page + 1;

    this.setState({
      loading: true,
    });

    this.props.listPosts(page)
      .then(() => {
        this.setState({
          loading: false,
          page
        });
      })
      .catch(() => {
        this.errorLoad();
      })
  };

  render() {

    const { loading, hasMore } = this.state;
    const { posts } = this.props;

    return (
      <div className="container">
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={!loading && hasMore}
        >
          {posts.map((item, index) => (
            <CardPost key={index} {...item}/>
          ))}
          <div className="col-sm-12 row -center _margin-top _margin-bottom">
            <Spin/>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default InifiniteScroller;