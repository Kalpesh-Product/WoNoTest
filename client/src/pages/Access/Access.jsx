import AccessTree from "../../components/AccessTree";
import hierarchy from "../../assets/hierarchy-new.png"; // Import your image file
import PageFrame from "../../components/Pages/PageFrame";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import {
  setSelectedEmployee,
  setSelectedEmployeeMongoId,
} from "../../redux/slices/hrSlice";
import AgTable from "../../components/AgTable";
import { useNavigate } from "react-router-dom";
import StatusChip from "../../components/StatusChip";
import MuiAccordion from "../../components/MuiAccordion";

const Access = () => {
  const axios = useAxiosPrivate();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    data: departments,
    isLoading: isDepartments,
    error,
  } = useQuery({
    queryKey: ["access-departments"],
    queryFn: async () => {
      const response = await axios.get("/api/access/department-wise-employees");
      return response.data?.data;
    },
  });

  console.log("dep : ", departments);

  const handleEmployeeClick = (emp) => {
    console.log("emp data : ", emp);
    // navigate("permissions", {
    //   state: {
    //     user: emp,
    //   },
    // });
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* <div>
        <AccessTree clickState={true} autoExpandFirst />
      </div> */}
      <PageFrame>
        <div className="h-[35rem]  overflow-hidden">
          <img
            src={hierarchy}
            alt="hierarchy"
            className="h-full w-full object-contain"
          />
        </div>
      </PageFrame>
      <PageFrame>
        <MuiAccordion
          data={departments}
          titleKey="name"
          itemsKey="employees"
          itemClick={handleEmployeeClick}
        />
      </PageFrame>
    </div>
  );
};

export default Access;
