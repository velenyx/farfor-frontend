import { FC } from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import { Home } from './Home/Home'

import { NotFound } from '~/pages/NotFound/NotFound'

export const Routing: FC<$TSFixMe> = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  )
}
