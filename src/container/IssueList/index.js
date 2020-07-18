import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as IssueListActions from './../../store/IssueList/actions';
import { Icon } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
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
        <div>
          <div className="issue-list-back-div" onClick={() => this.props.history.push('/')}>
            <LeftOutlined style={{ marginRight: '5px' }}/> Go Back
          </div>
        </div>
        <InputField 
          loading={this.props.issueList.issueListLoading}
          onPressEnter={event => {
            const value = event.target? event.target.value: event
            if (value.split('/').length>1) {
              const user = value.split('/')[0];
              const repo = value.split('/')[1];
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
          onChange={event => {
            this.props.issueListActions.updateSeatcText(event.target.value);
          }}
          value={this.props.issueList.searchText}
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
