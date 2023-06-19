import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { appStore, persistedStore } from '~/app/providers/store/appStore'

export const withStore = (component: $TSFixMe) => () =>
  (
    <ReduxProvider store={appStore}>
      <PersistGate loading={null} persistor={persistedStore}>
        {component()}
      </PersistGate>
    </ReduxProvider>
  )
// <QueryClientProvider client={queryClient}>{component()}</QueryClientProvider>
