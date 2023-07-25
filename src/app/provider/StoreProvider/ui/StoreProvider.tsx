// "use client"

// import { Provider } from 'react-redux';
// import { createReduxStore, StateSchema } from '../';
// import { useNavigate } from 'react-router-dom';
// import { ReducersMapObject } from '@reduxjs/toolkit';
//
// interface StoreProviderProps {
//   children: any;
//   initialState?: DeepPartial<StateSchema>;
//   asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
// }
//
// export const StoreProvider = (props: StoreProviderProps) => {
//   const { children, initialState, asyncReducers } = props;
//
//   const navigate = useNavigate();
//
//   const store = createReduxStore(
//     initialState as StateSchema,
//     asyncReducers as ReducersMapObject<StateSchema>,
//     navigate
//   );
//    export const wrapper = createWrapper(store)
//
//
//   return <Provider store={wrapper}>{children}</Provider>;
// };
