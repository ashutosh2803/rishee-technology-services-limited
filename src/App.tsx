import { Route, Routes } from "react-router-dom";
import { SiteLayout } from "./components/layout/SiteLayout";
import { sitePages } from "./pages";
import { NotFoundPage } from "./pages/NotFoundPage";

export function App() {
  return (
    <SiteLayout>
      <Routes>
        {sitePages.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </SiteLayout>
  );
}
