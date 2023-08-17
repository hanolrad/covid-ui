"use client";
import React, { FC } from "react";
import { Avatar, Card } from "antd";
import { MessageOutlined, HeartOutlined } from "@ant-design/icons";

const ChartCard: FC<{ title: string; children: React.ReactElement }> = ({
  title,
  children,
}) => {
  return (
    <Card title={title} bordered={false} style={{ width: 500 }}>
      {children}
      <div className="flex justify-between items-center">
        <Avatar
          size={32}
          src="https://ui-avatars.com/api/?background=0D8ABC&color=fff"
          shape="circle"
          alt="Avatar"
        />
        <div className="flex space-x-4 align-middle">
          <HeartOutlined style={{ fontSize: 25, cursor: "pointer" }} />
          {/* <HeartFilled style={{fontSize: 25 }} /> */}
          <span className="justify-around align-middle cursor-pointer text-base font-bold">
            <MessageOutlined style={{ fontSize: 25 }} />
            {12}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default ChartCard;
