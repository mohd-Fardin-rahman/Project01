import { configureStore } from '@reduxjs/toolkit'
// ye Slice.jsx ka reducer hai jo Slice.jsx folder ki last line me export kiya gaya hai isko import karte time hum kisi bhi name se import kar sakte hai but (from) ke baad wala path ('./Slice') sahi hona chahiye
import MySliceReducer from './Slice'

export const store = configureStore({
  reducer: {
    First : MySliceReducer
  },
})
