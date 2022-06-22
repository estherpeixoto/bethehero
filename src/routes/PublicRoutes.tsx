import { Routes, Route } from 'react-router-dom'
import { PublicList } from '@pages/PublicList'
import { SignIn } from '@pages/SignIn'
import { SignUp } from '@pages/SignUp'
import { ForgotPassword } from '@pages/ForgotPassword'
import { Show } from '@pages/Case/Show'

export function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PublicList />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="case/:id" element={<Show />} />
    </Routes>
  )
}
