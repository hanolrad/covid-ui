import React, { FC } from "react";
import { Button } from "antd";
import { EditOutlined, CopyOutlined, FilterOutlined } from "@ant-design/icons";

const PageHeaderWithActions: FC<{ title: string }> = ({ title }) => {
  return (
    <div className="flex justify-between min-w-full mb-4">
      <div className="flex justify-start font-medium">{title}</div>
      <div className="flex space-x-4">
        <Button
          type="primary"
          className="bg-white text-blue-500 hover:text-white"
          icon={
            <EditOutlined className="flex text-current align-middle relative top-0.5" />
          }
        >
          Notes
        </Button>
        <Button
          type="primary"
          className="bg-white text-blue-500 hover:text-white"
          icon={
            <CopyOutlined className="flex text-current align-middle relative top-0.5" />
          }
        >
          Export
        </Button>
        <Button
          type="primary"
          className="bg-white text-blue-500 hover:text-white"
          icon={
            <FilterOutlined className="flex text-current align-middle relative top-0.5" />
          }
        >
          Filter
        </Button>
      </div>
    </div>
  );
};

export default PageHeaderWithActions;
