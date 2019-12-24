import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import loadable from '@loadable/component';
const Window = loadable(() => import(/* webpackChunkName: "Window" */ './components/Window'));


export interface AppProps {
  isLogin?: boolean
  location?: any
}

class App extends Component<AppProps> {

  render() {
    const {isLogin, location} = this.props;
    
    let element : any = null;
    if (location != null){
      let pathName =  window.document.location.pathname;
      if (!isLogin && pathName !== "/login" ) {
        if (pathName === "/searchpassword" ){
        } else if (pathName === "/signup") {
        } else {
          window.location.replace("/login"); 
        }
        
      }
    }
    element = <Switch>
      <Route exact path="/" render={() => <Window pageName="Home" pageTitle="Home" />} />
      <Route path="/news" render={() => <Window pageName="News" pageTitle="News" />} />
      <Route path="/login" render={() => <Window pageName="Login" pageTitle="Login" />} />
      <Route path="/signup" render={() => <Window pageName="SignUp" pageTitle="SignUp" />} />
      <Route path="/searchpassword" render={() => <Window pageName="SearchPassword" pageTitle="SearchPassword" />} />
      </Switch>;
      
    return (
      <div>
          {element}
      </div>
    );
  }
}

export default App;