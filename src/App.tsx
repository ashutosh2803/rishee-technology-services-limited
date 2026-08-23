import { Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/layout/SiteLayout'
import { sitePages } from './pages'

export function App() {
  return (
    <SiteLayout>
      <Routes>
        {sitePages.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </SiteLayout>
  )
}
