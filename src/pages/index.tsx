import { FC } from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import { Home } from './Home/Home'
import { OurRestaurants } from './OurRestaurants/OurRestaurants'
import { Payment } from './Payment/Payment'
import { SaleDetail } from './SaleDetail/SaleDetail'
import { Sales } from './Sales/Sales'

import { NotFound } from '~/pages/NotFound/NotFound'

export const Routing: FC<$TSFixMe> = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/sales/:saleSlug" element={<SaleDetail />} />
      <Route path="/delivery" element={<OurRestaurants />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  )
}
