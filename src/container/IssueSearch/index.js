import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { CloseCircleOutlined } from '@ant-design/icons';
import * as IssueListActions from './../../store/IssueList/actions';
import notify from '../../component/Notification';
import InputField from '../../component/InputField';
import localStore from './../../utils/localStorage';
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
            const value = event.target? event.target.value: event;
            if (value.split('/').length>1) {
              const user = value.split('/')[0];
              const repo = value.split('/')[1];
              localStore.setItem('searchParams', { user, repo });
              this.props.issueListActions.fetchRepoIssues({ user, repo, page: 1 });
              this.props.history.push('/issue-list');
            } else {
              notify({
                message: 'Please type in user/repo format',
                placement: 'topRight',
                icon: <CloseCircleOutlined twoToneColor='#ed3833' className='notification-icon'/>,
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
