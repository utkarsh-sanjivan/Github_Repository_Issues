import React from 'react';
import { Table, Empty, Skeleton } from 'antd';
import './style.css';

const TableDetails = props => {
  const columns = [
    {
      title: 'Labels',
      dataIndex: 'labels',
      width: '300px',
      key: 'labels',
      render: (tagArr, record) => (
        tagArr.map(value => (
          <span 
            style={{ backgroundColor: `#${value.color}` }}
            className="table-issue-tag"
          >
            {value.name}
          </span>
        ))
      ),
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (value, record) => (
        <div>
          <div onClick={() => window.open(record.html_url, '_blank')} className="issue-title-container">{value}</div>
          <div className="issue-sub-title-container">{record.open? 'Opened': 'Closed'}</div>
        </div>
      ),
    },
    {
      title: 'Raised By',
      dataIndex: 'raisedBy',
      key: 'raisedBy',
      render: (value, record) => (
        <div>
          <div className="issue-title-container">{value}</div>
        </div>
      ),
    },
  ];

  return (
    <div style={{ marginTop: '25px' }}>
      {props.loading?
        <Skeleton 
          loading={true}
          active
        />
        : props.dataSource.length === 0?
          <Empty 
            description={'No Issues Available'}
          />
          : <Table 
            dataSource={props.dataSource}
            columns={columns}
            pagination={{  position:  'bottom', pageSize: 30 }}
          />}
    </div>
  );
};

export default TableDetails;
