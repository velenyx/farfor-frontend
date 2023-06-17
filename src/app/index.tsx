import { FC } from 'react'

import { withProviders } from './providers'
import { Routing } from '../pages/index.tsx'

import './styles/fonts.scss'
import './styles/index.scss'

const App: FC = () => {
  return (
    <>
      <Routing />
    </>
  )
}

export default withProviders(App)
