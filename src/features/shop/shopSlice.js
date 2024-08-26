import { createSlice } from '@reduxjs/toolkit'
import categories from '../../data/categoriesType.json'
import topSells from '../../data/topSells.json'
import products from '../../data/productsDetails.json'

//url firebase: https://ecommerce-reactnative-co-f8bee-default-rtdb.firebaseio.com/

const initialState = {
  categories : categories,
  topSells : topSells,
  products : products
}

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
   
  },
})


export const {  } = shopSlice.actions

export default shopSlice.reducer