import React from 'react';
import { Table, Empty, Skeleton, Avatar } from 'antd';
import './style.css';

const TableDetails = props => {
  const columns = [
    {
      title: 'Labels',
      dataIndex: 'labels',
      width: '300px',
      key: 'labels',
      render: (tagArr, record) => (
        <div className='table-label-cells'>
          {tagArr.map(value => (
            <span 
              style={{ 
                backgroundColor: `#${value.color}`,
                color: `${value.color === 'ffffff'? '#000000': '#ffffff'}`,
                border: `${value.color === 'ffffff'? '#9ca2a8 1px solid': 'none'}`,
              }}
              className="table-issue-tag"
            >
              {value.name}
            </span>
          ))}
        </div>
      ),
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (value, record) => (
        <div>
          <div onClick={() => window.open(`/Github_Repository_Issues/#/issue-details/${record.number}`, '_blank')} className="issue-title-container">{value}</div>
          <div style={{ backgroundColor: `${record.open? '#28a745': '#f50'}` }} className="issue-sub-title-container">{record.open? 'Open': 'Close'}</div>
        </div>
      ),
    },
    {
      title: 'Raised By',
      dataIndex: 'raisedBy',
      key: 'raisedBy',
      render: (value, record) => (
        <div>
          <Avatar src={record.user.avatar_url} className='table-raisedby-avatar'/>
          <span className="issue-title-container">{value}</span>
        </div>
      ),
    },
  ];

  return (
    <div style={{ marginTop: '25px' }}>
      {props.loading && props.dataSource.length<31?
        <Skeleton 
          loading={true}
          active
        />
        : props.dataSource.length === 0?
          <Empty 
            className="table-empty-image"
            description={'No Issues Available'}
          />
          : <Table 
            {...props}
            dataSource={props.dataSource}
            columns={columns}
            pagination={{  position:  'bottom', defaultPageSize: 30, current: props.current, showSizeChanger: false }}
          />}
    </div>
  );
};

export default TableDetails;
