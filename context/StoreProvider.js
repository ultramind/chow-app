import React, { useReducer } from 'react'
import Store from './context'
import reducer from './reducer'

// initial State
const initialState = {
  userInfo: {
    name: 'Akachukwu Udechukwu'
  }
}

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const values = { state, dispatch }
  return <Store.Provider value={values}>{children}</Store.Provider>
}

export default StoreProvider
