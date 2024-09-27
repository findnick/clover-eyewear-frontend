import React, { useState } from "react";
import { Space, Table, Tag } from "antd";
import { CircularProgress } from "@mui/material";
import { useLocation } from "react-router-dom";
const columns = [
  {
    title: "",
    dataIndex: "name",
    key: "name",
    render: (text) => <a className="font-medium">{text}</a>,
  },
  {
    title: "Sphere",
    dataIndex: "sphere",
    key: "spheres",
    render: (text) => <p className="text-lg font-light">{text}</p>,
  },
  {
    title: "Cylinder",
    dataIndex: "cylinder",
    key: "cylinder",
    render: (text) => <p className="text-lg font-light">{text}</p>,
  },
  {
    title: "Axis",
    dataIndex: "axis",
    key: "axis",
    render: (text) => <p className="text-lg font-light">{text}</p>,
  },
  {
    title: "Pupillary Distance",
    dataIndex: "pd",
    key: "pd",
    render: (text) => <p className="text-lg font-light">{text}</p>,
  },
];
// const data = [
//   {
//     key: "3",
//     name: "OD",
//     sphere: "-0.25",
//     cylinder: "0.00",
//     axis: "0",
//     pd: "0",
//   },
//   {
//     key: "1",
//     name: "OS",
//     sphere: "0.00",
//     cylinder: "0.00",
//     axis: "0",
//     pd: "0",
//   },
// ];

export default function ConfirmPrescription() {
  const location = useLocation();
  const { data } = location.state;
  console.log(data);
  const [loading, setLoading] = useState(true);
  setTimeout(() => setLoading(false), 3000);
  return (
    <>
      {loading ? (
        <div className="text-center my-20">
          <CircularProgress />
        </div>
      ) : (
        <div className="m-10 shadow-md rounded-md">
          <Table columns={columns} dataSource={data} pagination={false} />
        </div>
      )}
    </>
  );
}
