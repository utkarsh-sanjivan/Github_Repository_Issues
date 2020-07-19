import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import IssueHeader from './component/Header/index';
import IssueSearch from './container/IssueSearch/index';
import IssueList from './container/IssueList/index';
import IssueDetails from './container/IssueDetails/index';

const Routing = props => (
  <div>
    <IssueHeader />
    <Router>
      <Switch>
        <Route exact path="/" component={IssueSearch} />
        <Route exact path="/issue-list" component={IssueList} />
        <Route exact path="/issue-details/:issueId" component={IssueDetails} />
      </Switch>
    </Router>
  </div>
)

export default Routing;
