import React, { FC } from "react";
import { Button } from "antd";
import { EditOutlined, CopyOutlined, FilterOutlined } from "@ant-design/icons";

const PageHeaderWithActions: FC<{ title: string }> = ({ title }) => {
  return (
    <div className="flex justify-between mb-4">
      <div className="flex justify-start">{title}</div>
      <div className="flex space-x-4">
        <Button type="default" className="align-middle" icon={<EditOutlined />}>
          Notes
        </Button>
        <Button type="default" icon={<CopyOutlined />}>
          Export
        </Button>
        <Button type="default" icon={<FilterOutlined />}>
          Filter
        </Button>
      </div>
    </div>
  );
};

export default PageHeaderWithActions;
