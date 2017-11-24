

class DefaultLayout extends React.Component {

  props: Props;

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    const {
      component: Component,
      ...restProps
    } = this.props;

    return (
      <Route
        {...restProps}
        render={(Component)=>{
          return (
            <div>
              <Header />
              <Component {...matchProps} />
              <Footer />
            </div>
          );
        }}
      />
    );

  }
}

