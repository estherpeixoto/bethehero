import { Routes, Route } from 'react-router-dom'
import { PublicList } from '@pages/PublicList'
import { SignIn } from '@pages/SignIn'
import { CreateAccount } from '@pages/CreateAccount'
import { Show } from '@pages/Case/Show'

export function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PublicList />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="create-account" element={<CreateAccount />} />
      <Route path="case/:id" element={<Show />} />
    </Routes>
  )
}
