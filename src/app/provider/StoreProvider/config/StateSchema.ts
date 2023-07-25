// import type {
//   AnyAction,
//   CombinedState,
//   EnhancedStore,
//   Reducer,
//   ReducersMapObject
// } from '@reduxjs/toolkit';
// import type { To } from '@remix-run/router';
// import type { AxiosInstance } from 'axios';
// import type { UserSchema } from 'entities/User';
// import type { LoginSchema } from 'features/AuthByUsername';
// import type { NavigateOptions } from 'react-router';
//
// export interface StateSchema {
//   user: UserSchema;
//
//   // Асинхронные редюсеры
//   loginForm?: LoginSchema;
// }
//
// export type StateSchemaKey = keyof StateSchema;
//
// export interface ReducerManager {
//   getReducerMap: () => ReducersMapObject<StateSchema>;
//   reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
//   add: (key: StateSchemaKey, reducer: Reducer) => void;
//   remove: (key: StateSchemaKey) => void;
// }
//
// export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
//   reducerManager: ReducerManager;
// }
//
// export interface ThunkExtraArg {
//   api: AxiosInstance;
//   navigate?: (to: To, options?: NavigateOptions) => void;
// }
//
// export interface ThunkConfig<T> {
//   rejectValue: T;
//   extra: ThunkExtraArg;
//   state: StateSchema;
// }
