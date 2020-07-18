import React from 'react';
import './style.css';

const IssueHeader = props => {
  return (
    <div className="issues-page-header-wrapper">
      <div className="issues-page-header-title">{window.location.pathname === '/'? 'Issue  Search': 'Issue List'}</div>
      <div className="issues-page-header-sub-title">Search issues from a public repository of a user</div>
    </div>
  );
}

export default IssueHeader;
