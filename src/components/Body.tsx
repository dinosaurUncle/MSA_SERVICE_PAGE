import React, { Component } from 'react';
import loadable from '@loadable/component';
const Home = loadable(() => import(/* webpackChunkName: "Window" */ '../pages/Home'));
const Login = loadable(() => import(/* webpackChunkName: "Window" */ '../pages/Login'));
const News = loadable(() => import(/* webpackChunkName: "Window" */ '../pages/News'));


export interface BodyProps {
pageName:string
}


class Body extends Component<BodyProps>{


  render() {
    const {pageName} = this.props;
    let content: any = null;
    if (pageName === "Home") {
      content = (<Home />)
    } else if (pageName === "Login") {
      content = (<Login />)
    } else if (pageName === "News") {
      content = (<News />)
    }
    return (
      <div>
        {content}
      </div>
    );
  }
}

export default Body;