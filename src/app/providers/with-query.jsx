import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
})

export const withQuery = component => () =>
  <QueryClientProvider client={queryClient}>{component()}</QueryClientProvider>
