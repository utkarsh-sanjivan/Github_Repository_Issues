import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import IssueHeader from './component/Header/index';
import IssueFooter from './component/Footer/index';
import IssueSearch from './container/IssueSearch/index';
import IssueList from './container/IssueList/index';

const Routing = props => (
  <div>
    <IssueHeader />
    <Router>
      <Switch>
        <Route exact path="/" component={IssueSearch} />
        <Route exact path="/issue-list" component={IssueList} />
      </Switch>
    </Router>
    {/* <IssueFooter/> */}
  </div>
)

export default Routing;
