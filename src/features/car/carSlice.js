import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    cars2:["Model S","Model Y","Model 3","Model X V2","Solar Roof","Solar Panles"]
}
const carSlice2 = createSlice({
 name:"car",
 initialState,
 reducers:{}
})

export const selectCars2 = state =>state.car.cars2

export default carSlice2.reducer