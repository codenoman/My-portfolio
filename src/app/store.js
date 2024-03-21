// import React from 'react';


// const MyComponent = () => {
//   return (
//     <div>
//       <h1>Hello, React!</h1>
//     </div>
//   );
// }

// export default MyComponent;
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
export const store = configureStore({
  reducer: {
  counter:counterReducer,
  },
})