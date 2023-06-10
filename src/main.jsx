import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './assets/styles/index.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './assets/fonts/Raleway-Bold.woff2'
import './assets/fonts/Raleway-ExtraBold.woff2'
import './assets/fonts/Raleway-Light.woff2'
import './assets/fonts/Raleway-Medium.woff2'
import './assets/fonts/Raleway-Regular.woff2'
import './assets/fonts/Raleway-SemiBold.woff2'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
)
