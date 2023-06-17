import { createSlice } from '@reduxjs/toolkit'

import { sessionApi } from '~/entities/session/api/sessionApi'

type SessionSliceState =
  | {
      accessToken: string
      isAuthorized: true
      refreshToken: string
    }
  | {
      accessToken?: string
      refreshToken?: string
      isAuthorized: false
    }

const initialState: SessionSliceState = {
  isAuthorized: false,
}

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    clearSessionData: state => {
      state.accessToken = undefined
      state.refreshToken = undefined
      state.isAuthorized = false
    },
  },
  extraReducers(builder) {
    builder.addMatcher(sessionApi.endpoints.checkToken.matchFulfilled, (state: SessionSliceState, { payload }) => {
      state.isAuthorized = true

      if (state.isAuthorized) {
        state.refreshToken = payload.refresh
        state.accessToken = payload.access
      }
    })
  },
})

export const selectIsAuthorized = (state: RootState) => state.session.isAuthorized

export const { clearSessionData } = sessionSlice.actions
