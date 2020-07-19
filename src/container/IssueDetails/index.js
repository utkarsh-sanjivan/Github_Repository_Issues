import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import MarkdownGithub from 'react-markdown-github';
import { Skeleton, Avatar } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import * as IssueListActions from './../../store/IssueList/actions';
import StatusTag from './../../component/StatusTag/index';
import { formatDateString } from './../../utils/dateFormatter';
import CommentBox from './../../component/CommentBox/index';
import localStore from './../../utils/localStorage';
import './style.css';

class IssueDetails extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {
        currentIssue: this.props.issueList.issueList.find(issue => issue.number.toString() === this.props.match.params.issueId),
        commentsList: [],
    };
  }

    componentDidMount() {
        const { user, repo } = localStore.getItem('searchParams');
        this.props.issueListActions.getCommentsForIssue({ user, repo, issue: this.props.match.params.issueId });
        if (!this.state.currentIssue) {
            this.props.issueListActions.fetchSingleIssue({ user, repo, issue: this.props.match.params.issueId });
        }
    }

    componentDidUpdate(prevProps) {
        if ( JSON.stringify(prevProps.issueList.commentList) !== JSON.stringify(this.props.issueList.commentList) ) {
           this.setState({ commentList: this.props.issueList.commentList });
        }
        if (
            prevProps.issueList.issue.id !== this.props.issueList.issue.id &&
            prevProps.issueList.issue.number !== this.props.issueList.issue.number
        ) {
           this.setState({ currentIssue: this.props.issueList.issue });
        }
    }
  
    render () {
        return (
        this.props.issueList.issueLoading?
            <Skeleton 
                className="details-skeleton"
                loading={true}
                active
            />
            : <div className="issue-details-wrapper">
                <div className="issue-details-title">{this.state.currentIssue && this.state.currentIssue.title}</div>
                <div className="issue-details-sub-title">
                    <StatusTag
                        color={this.state.currentIssue && this.state.currentIssue.state === 'open'? '#28a745': '#f50'}
                        icon={this.state.currentIssue && this.state.currentIssue.state === 'open'? 
                            <CheckOutlined twoToneColor='#28a745' />
                            : <CloseOutlined twoToneColor='#f50' />
                        }
                        text={this.state.currentIssue && this.state.currentIssue.state === 'open'? 'Open': 'Close'}
                    />
                    <span><b>{this.state.currentIssue && this.state.currentIssue.user.login}</b> openened this issue {this.state.currentIssue && formatDateString(this.state.currentIssue.created_at)}, {this.props.issueList.commentList.length} comments</span>
                </div>
                <div className="issue-details-description-container">
                    <div className="issue-desc-header">
                        <Avatar src={this.state.currentIssue && this.state.currentIssue.user.avatar_url} className='issue-details-raisedby-avatar'/>
                        <span className="issue-details-raisedby-description"><b>{this.state.currentIssue && this.state.currentIssue.user.login}</b> {this.state.currentIssue && ` posted ${formatDateString(this.state.currentIssue.created_at)}`}</span>
                    </div>
                    <MarkdownGithub 
                        source={this.state.currentIssue && this.state.currentIssue.body}
                        className='issue-details-description-content'
                    />
                </div>
                <div className="tags-container">
                    {this.state.currentIssue && this.state.currentIssue.labels.map(value => (
                        <span 
                            style={{ 
                                backgroundColor: `#${value.color}`,
                                color: `${value.color === '000'? '#fff': '#000'}`,
                                border: `${value.color === 'ffffff'? '#9ca2a8 1px solid': 'none'}`,
                            }}
                            className="issue-tag-card"
                        >
                            {value.name}
                        </span>
                        ))}
                </div>
                <div className="issue-details-comment-container">
                    { this.props.issueList.commentListLoading?
                        <Skeleton 
                            className="comments-skeleton"
                            loading={true}
                            active
                        />
                        : this.state.commentList && this.state.commentList.map(comment => (
                            <div className="issue-details-description-container">
                                <div className="issue-desc-header">
                                    <Avatar src={comment.user.avatar_url} className='issue-details-raisedby-avatar'/>
                                    <span className="issue-details-raisedby-description"><b>{comment.user.login}</b> {this.state.currentIssue && ` commented ${formatDateString(comment.created_at)}`}</span>
                                </div>
                                <MarkdownGithub 
                                    source={comment.body}
                                    className='issue-details-description-content'
                                />
                            </div>
                        ))
                    }
                </div>
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

export default  connect(mapStateToProps, mapDispatchToProps)(IssueDetails);
