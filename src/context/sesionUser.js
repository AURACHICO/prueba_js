import { createSlice } from '@reduxjs/toolkit'

const initialState = { logout:false } 

const sesionUserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSesionUser : (state, action) => ({
      ...state,
      logout: action.payload
    })
  },
})

export const { setSesionUser } = sesionUserSlice.actions
export default sesionUserSlice.reducer