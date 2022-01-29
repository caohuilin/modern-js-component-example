import { useEffect } from 'react';
import { Table } from 'antd';
import { useModel } from '@modern-js/runtime/model';
import tableListModel from './tableListModel';

export default () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
  ];

  const [{ data }, { load }] = useModel(tableListModel);

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="table-list table-theme">
      <Table columns={columns} dataSource={data} />
    </div>
  );
};
