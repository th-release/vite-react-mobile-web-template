import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Main from '../../pages/Main'
export default function Routers() {
  const location = useLocation()
  return (
    <Routes location={location} key={location.key}>
      <Route path="/main" element={<Main />} />
      <Route path="*" element={<Navigate to="/main" replace />} />
    </Routes>
  )
}