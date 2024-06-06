import { createBrowserRouter } from 'react-router-dom'

import { PasswordRecover } from './pages/app/password-recover'
import { SignIn } from './pages/auth/sign-in'

export const router = createBrowserRouter([
  { path: '/', element: <SignIn /> },
  { path: '/redefinir-senha', element: <PasswordRecover /> },
])
