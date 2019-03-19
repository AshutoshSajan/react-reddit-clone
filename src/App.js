import React, { Component } from 'react';
import './App.css';
import './App.scss';
import './index.css';
import {Header} from "./Header";
import {SubHeader} from "./SubHeader";
import {MenuBar} from "./MenuBar";
import Main from "./Main";


class App extends Component {
  render() {
    return (
      <section>
        <Header />
        <SubHeader />
        <MenuBar />
        <Main />
      </section>
    );
  }
}

export default App;
