import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import DashboardView from "./views/DashboardView";
import CreateProjectView from "./views/projects/CreateProjectView";
import EditProjectView from "./views/projects/EditProjectView";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<DashboardView />} index />
          <Route
            path="/projects/create"
            element={<CreateProjectView />}
            index
          />
          <Route
            path="/projects/:projectId/edit"
            element={<EditProjectView />}
            index
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
