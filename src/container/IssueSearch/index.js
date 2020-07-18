import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as IssueListActions from './../../store/IssueList/actions';
import { Icon } from 'antd';
import InputField from '../../component/InputField';
import notify from '../../component/Notification';
import './style.css';

class IssueSearch extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {};
  }
  
  render () {
    return (
      <div className="issue-search-wrapper">
        <div className="issue-search-desc-text">Search Issues</div>
        <InputField 
          onPressEnter={event => {
            if (event.target && event.target.value.split('/').length>1) {
              const user = event.target.value.split('/')[0];
              const repo = event.target.value.split('/')[1];
              this.props.issueListActions.fetchRepoIssues({ user, repo, page: 1 });
              this.props.history.push('/issue-list');
            } else {
              const notificationIcon = <Icon
                type='close-circle'
                theme='twoTone'
                twoToneColor='red'
                className='notification-icon'
              />;
              notify({
                message: 'Please type in user/repo format',
                placement: 'topRight',
                icon: notificationIcon,
              });
            }
          }}
        />
        <div className="issue-search-desc-info">Type 'user/repo' to find the issues</div>
      </div>
    );
  }
}

const mapStateToProps = ( store ) => ({
    issueList: store.issueList,
});

function mapDispatchToProps(dispatch) {
    return {
      issueListActions: bindActionCreators(IssueListActions, dispatch),
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(IssueSearch);
