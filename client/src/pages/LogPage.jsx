import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import YearWiseTable from "../components/Tables/YearWiseTable";
import humanDate from "../utils/humanDateForamt";
import humanTime from "../utils/humanTime";
import DetalisFormatted from "../components/DetalisFormatted";
import MuiModal from "../components/MuiModal";

const LogPage = () => {
  const axios = useAxiosPrivate();
  const [openModal, setOpenModal] = useState(false);
  const [selectedLog, setselectedLog] = useState({});
  const { data, isLoading } = useQuery({
    queryKey: ["log"],
    queryFn: async () => {
      try {
        const response = await axios.get("/api/logs/get-logs");
        return response.data;
      } catch (error) {
        console.error(error.response.data.message);
      }
    },
  });

  const handleViewlog = (data) => {
    setselectedLog(data);
    setOpenModal(true);
  };

  const columns = [
    {
      headerName: "Sr No",
      field: "srNo",
      width: 80,
    },
    {
      headerName: "Action",
      field: "action",
      flex: 1,
      cellRenderer: (params) => (
        <div role="button" onClick={() => handleViewlog(params.data.payload)}>
          <span className="underline text-primary cursor-pointer">
            {params.value}
          </span>
        </div>
      ),
    },
    {
      headerName: "User",
      field: "user",
      flex: 1,
    },
    {
      headerName: "Path",
      field: "path",
      flex: 1,
    },
    {
      headerName: "Date",
      field: "createdAt",
      flex: 1,
      cellRenderer: (params) => humanDate(params.value),
    },
  ];
  const tableData = isLoading
    ? []
    : data.map((item) => ({
        ...item,
        user: `${item.performedBy?.firstName} ${item.performedBy?.lastName}`,
        path: item.path.split("/").splice(2).join(" > "),
        createdAt: item.createdAt,
        payload: item.payload,
      }));

  //////////////////////Format data for view modal/////////////////////////

  // Format key to be more human-readable (e.g., "dueDate" => "Due Date")
  const formatKey = (key) =>
    key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());

  // Format value (arrays, objects, nulls)
 const formatValue = (key, value) => {
  if (Array.isArray(value)) {
    return (
      <ul className="list-disc list-inside">
        {value.map((item, idx) => (
          <li key={idx}>
            {typeof item === "object" ? JSON.stringify(item, null, 2) : item}
          </li>
        ))}
      </ul>
    );
  } else if (typeof value === "object" && value !== null) {
    return (
      <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
        {JSON.stringify(value, null, 2)}
      </pre>
    );
  } else {
    if (key.toLowerCase().includes("date")) {
      return humanDate(value);
    }
    if (key.toLowerCase().includes("time")) {
      return humanTime(value);
    }
    return value ?? "-";
  }
};


  return (
    <div className="p-4">
      <YearWiseTable
        data={tableData || []}
        columns={columns}
        dateColumn="createdAt"
        tableHeight={400}
        tableTitle="Logs Table"
        exportData={true}
        search={true}
      />
      <MuiModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        title="View Log"
      >
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
          {selectedLog &&
            Object.entries(selectedLog).map(([key, value], index) => (
              <DetalisFormatted
                key={index}
                title={formatKey(key)}
                detail={formatValue(key,value)}
              />
            ))}
        </div>
      </MuiModal>
    </div>
  );
};

export default LogPage;
