import compose from 'compose-function'

import { withStore } from './store/with-store'
import { withRouter } from './with-router'

// withQuery,
export const withProviders: $TSFixMe = compose(withRouter, withStore)
