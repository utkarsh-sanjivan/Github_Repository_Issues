import React from 'react';
import './style.css';

const IssueHeader = props => {
  return (
    <div className="issues-page-header-wrapper">
      <div className="issues-page-header-title">{window.location.pathname === '/'? 'Issue  Search': window.location.pathname.includes('issue-list')? 'Issue List':'Issue Details'}</div>
      <div className="issues-page-header-sub-title">{window.location.pathname.includes('issue-list')? 'Search issues from a public repository of a user': null}</div>
    </div>
  );
}

export default IssueHeader;
