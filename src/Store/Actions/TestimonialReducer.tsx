import { createSlice } from '@reduxjs/toolkit'
import { readTestimonial } from '../../Services/FIrebase/FirebaseFunctions'

export const testimonialReducer = createSlice({
  name: 'testimonial',
  initialState: [{
    title : "",
    para : "",
    company : "",
    position : "",
    name : "",
    website : "",
    uid: ""
  }],
  reducers: {
    load: (state : any) => {
      state = readTestimonial()
    },
  },
})

// Action creators are generated for each case reducer function
export const { load } = testimonialReducer.actions

export default testimonialReducer.reducer