import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as IssueListActions from './../../store/IssueList/actions';
import { Icon } from 'antd';
import InputField from '../../component/InputField';
import notify from '../../component/Notification';
import TableDetails from '../../component/TableDetails';
import './style.css';

class IssueList extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      issueList: [],
      user: '',
      repo: '',
      pageNumber: 1,
    };
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.issueList.issueList.length !== this.props.issueList.issueList.length &&
      prevProps.issueList.issueList.lenght !== 0
    ) {
      this.setState({ issueList: this.props.issueList.issueList });
    }
    if (
      prevProps.issueList.issueListError !== this.props.issueList.issueListError &&
      this.props.issueList.issueListError
    ) {
      const notificationIcon = <Icon
        type='close-circle'
        theme='twoTone'
        twoToneColor='red'
        className='notification-icon'
      />;
      notify({
        message: 'Internal Server Error',
        placement: 'topRight',
        icon: notificationIcon,
      });
    }
  }
  
  render () {
    return (
      <div className="issue-list-wrapper">
        <InputField 
          loading={this.props.issueList.issueListLoading}
          onPressEnter={event => {
            if (event.target && event.target.value.split('/').length>1) {
              const user = event.target.value.split('/')[0];
              const repo = event.target.value.split('/')[1];
              this.setState({ user, repo });
              this.props.issueListActions.fetchRepoIssues({ user, repo, page: 1 });
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
        <TableDetails 
          dataSource={this.state.issueList}
          loading={this.props.issueList.issueListLoading}
          onChange={this.onHandleChangeTable}
        />
      </div>
    );
  }

  onHandleChangeTable = (pagination, filters, sorter) => {
    // For sorting the table
    if (Object.keys(sorter).length>0) {
      this.setState({
        sortOrder: sorter,
      });
    }

    if (Object.keys(pagination).length>0) {
      this.setState(prevState => ({
        pageNumber: prevState.pageNumber +1,
      }), () => {
        this.props.issueListActions.fetchRepoIssues({ 
          user: this.state.user,
          repo: this.state.repo,
          page: this.state.pageNumber,
        });
      });
    };
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

export default  connect(mapStateToProps, mapDispatchToProps)(IssueList);
