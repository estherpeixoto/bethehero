import { Routes, Route } from 'react-router-dom'
import { PrivateList } from '@pages/PrivateList'
import { Show } from '@pages/Case/Show'

export function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PrivateList />} />
      <Route path="case/:id" element={<Show />} />
    </Routes>
  )
}
