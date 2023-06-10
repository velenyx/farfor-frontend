import { Routing } from 'pages'
import { withProviders } from './providers'
import './styles/index.scss'
import './styles/fonts.scss'

const App = () => {
  return (
    <>
      <Routing />
    </>
  )
}

export default withProviders(App)
