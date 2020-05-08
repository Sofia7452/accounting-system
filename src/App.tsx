import React from 'react';
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Layout from './components/layout';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tags">
          <Tags/>
        </Route>
        <Route path="/money">
          <Money/>
        </Route>
        <Route path="/statistics">
          <Statistics/>
        </Route>
        <Redirect from="/" exact to="/money"/>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

function NoMatch() {
  return (
    <div>页面不存在，输错地址了吧</div>
  );
}

function Statistics() {
  return <Layout><h2>统计页面</h2></Layout>
}

function Tags() {
  return <Layout><h2>标签页面</h2></Layout>
}

function Money() {
  return <Layout><h2>记账页面</h2></Layout>
}

export default App;