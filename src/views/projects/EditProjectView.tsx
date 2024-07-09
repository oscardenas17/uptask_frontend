import { getProjectById } from "@/api/ProjectAPI";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const EditProjectView = () => {
  const params = useParams();
  const projectId = params.projectId!;

  const { data } = useQuery({
    queryKey: ["editProject", projectId],
    queryFn: () => getProjectById(projectId),
    retry: false,
  });
  console.log(data);
  return <div>EditProjectView</div>;
};

export default EditProjectView;
