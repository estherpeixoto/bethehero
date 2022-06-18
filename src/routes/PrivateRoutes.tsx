import { Routes, Route } from 'react-router-dom'
import { PrivateList } from '@pages/PrivateList'
import { Create } from '@pages/Case/Create'
import { Show } from '@pages/Case/Show'
import { Edit } from '@pages/Case/Edit'

export function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PrivateList />} />
      <Route path="case/create" element={<Create />} />
      <Route path="case/:id" element={<Show />} />
      <Route path="case/:id/edit" element={<Edit />} />
    </Routes>
  )
}
